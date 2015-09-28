'use strict';

var React = require('react-native');
var PhotoViewer = require('./PhotoViewer.js');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var PhotoList = React.createClass({
  getInitialState: function() {
    return { selectedImage: 0 }
  },
  render: function() {
    var photoData = this.props.data;
    var photo = photoData[this.state.selectedImage];
    if (photoData.length < 1) {
      return <Text>Loading Data</Text>
    } else {
      return <PhotoViewer photo={photo} />
    }
  },
});

module.exports = PhotoList;
