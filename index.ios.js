'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var BrowseTab = require('./components/BrowseTab.js');
var TabStyles = require('./styles/TabStyles.js');
var BASE_URL = "https://ed2ulg2d5i.execute-api.us-west-2.amazonaws.com/prod";

var App = React.createClass({

  getInitialState: function() {
    return { data: [] };
  },

  render: function() {
    var jobId = this.state.jobId;
    var data  = this.state.data;
    return <BrowseTab data={data} />
  },

  componentDidMount: function() {
    if (!this.state.jobId) {
      this.getJobId();
    }
  },

  getJobId: function() {
    var locationURL = BASE_URL + "/location";
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
            this.getJob(jobId);
          }.bind(that),
          function(error) {
            console.warn('Something went wrong getting the position:', error);
          }
        );
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
        this.setState({ data: this.cleanData(response) });
      }.bind(this),
      function(error) {
        console.warn('Something went wrong getting job:', error);
      }
    );
  },

  cleanData: function(rawData) {
    var salonData = JSON.parse(rawData._bodyText).salonData;
    var cleanedData = salonData.map(function(salon) {
      var photoArray = salon.photos.map(function(photo) {
        var newPhotoObj = {
          url: photo.url,
          salonData: {
            name: salon.name,
            yelpUrl: salon.yelpUrl
          }
        };
        return newPhotoObj;
      });
      return photoArray;
    }).reduce(function(previousArray, nextArray) {
      return previousArray.concat(nextArray);
    });
    return cleanedData;
  }
});

AppRegistry.registerComponent('StyleFinder', () => App);
