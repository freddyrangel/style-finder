'use strict';

var React         = require('react-native');
var uuid          = require('node-uuid');
var BrowseTabView = require('./components/BrowseTabView.js');
var TabBar        = require('./components/TabBar.js');
var BASE_URL      = 'https://ed2ulg2d5i.execute-api.us-west-2.amazonaws.com/prod';
var styles        = require('./styles/AppStyles.js')
var {
  AppRegistry,
  View
} = React;

var App = React.createClass({

  getInitialState: function() {
    return {
      data: [],
      currentImageIndex: 0,
      selectedTab: 'browse'
    };
  },

  render: function() {
    var tabView = this.renderRightTabView();
    return (
      <View style={styles.container}>
        {tabView}
        <TabBar selectedTab={this.state.selectedTab} changeTab={this.changeTab}/>
      </View>
    );
  },

  renderRightTabView: function() {
    var selectedTab = this.state.selectedTab;
    if (selectedTab === 'liked') {
    } else {
      return <BrowseTabView
        data={this.state.data}
        likePhoto={this.likePhoto}
        currentImageIndex={this.state.currentImageIndex}/>
    }
  },

  componentDidMount: function() {
    if (!this.state.jobId) {
      this.getJobId();
    }
  },

  changeTab: function(selectedTab) {
    this.setState({selectedTab: selectedTab});
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
            this.getJob(jobId);
          }.bind(that),
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
        this.setState({ data: this.cleanData(response) });
      }.bind(this),
      function(error) {
        console.warn('Something went wrong getting job:', error);
      }
    ).done();
  },

  cleanData: function(rawData) {
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
    var photos = this.state.data;
    photos.forEach(function(photo) {
      if (photo.uuid === uuid) { photo.liked = true; }
    });
    this.setState({
      photos: photos,
      currentImageIndex: this.incrementImageIndex()
    });
  },

  incrementImageIndex: function() {
    var currentImageIndex = this.state.currentImageIndex;
    if (currentImageIndex < this.state.data.length - 1) {currentImageIndex += 1;}
    return currentImageIndex;
  }
});

AppRegistry.registerComponent('StyleFinder', () => App);
