'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var PhotoViewer = React.createClass({
  render: function() {
    var photo = this.props.photo;
    return <Image source={{uri: photo.url}} style={{width: 200, height: 200}} />
  },
});

module.exports = PhotoViewer;
