'use strict';

var React    = require('react-native');
var uuid     = require('node-uuid');
var TabBar   = require('./TabBar.js');
var BASE_URL = 'https://ed2ulg2d5i.execute-api.us-west-2.amazonaws.com/prod';
var {
  View
} = React;

var App = React.createClass({

  getInitialState: function() {
    return { photos: [] };
  },

  render: function() {
    return (
      <TabBar photos={this.state.photos}
        likePhoto={this.likePhoto}
        dislikePhoto={this.dislikePhoto}
        getLikedPhotos={this.getLikedPhotos}/>
    );
  },

  componentDidMount: function() {
    if (!this.state.jobId) this.getJobId();
  },

  getJobId: function() {
    var locationURL = BASE_URL + '/location';
    var that = this;

    navigator.geolocation.getCurrentPosition(
      function(initialPosition) {
        var lat = initialPosition.coords.latitude;
        var lng = initialPosition.coords.longitude;
        fetch(locationURL, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
          body: JSON.stringify({
            "lat": lat,
            "lng": lng
          })
        })
        .then(
          function(response) {
            var jobId = JSON.parse(response._bodyText).jobId
            that.getJob(jobId);
          },
          function(error) {
            console.warn('Something went wrong getting the position:', error);
          }
        ).done();
      },
      function(error) {
        console.warn('something went wrong', error);
      }
    );
  },

  getJob: function(jobId) {
    var jobURL = BASE_URL + '/job'
    var stubbedJobId = 43513954;
    fetch(jobURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        jobId: stubbedJobId
      })
    })
    .then(
      function(response) {
        this.setState({ photos: this.cleanPhotoData(response) });
      }.bind(this),
      function(error) {
        console.warn('Something went wrong getting job:', error);
      }
    ).done();
  },

  cleanPhotoData: function(rawData) {
    var salonData = JSON.parse(rawData._bodyText).salonData;
    var cleanedData = salonData.map(function(salon) {
      var photoArray = salon.photos.map(function(photo) {
        var newPhotoObj = {
          url: photo.url,
          uuid: uuid.v4(),
          salonData: {
            name: salon.name,
            yelpUrl: salon.yelpUrl
          },
        };
        return newPhotoObj;
      });
      return photoArray;
    }).reduce(function(previousArray, nextArray) {
      return previousArray.concat(nextArray);
    });
    return cleanedData;
  },

  likePhoto: function(uuid) {
    this.updatePhotoLike(uuid, true);
  },

  dislikePhoto: function(uuid) {
    this.updatePhotoLike(uuid, false);
  },

  updatePhotoLike: function(uuid, status) {
    var photos = this.state.photos;
    photos.forEach(function(photo) {
      if (photo.uuid === uuid) photo.liked = status;
    });
    this.setState({ photos: photos });
  }
});

module.exports = App;
