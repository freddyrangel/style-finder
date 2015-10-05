'use strict';

var React = require('react-native');
var {
  StyleSheet
} = React;

var LikedRowStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20
  },

  text: {
    flex: 1,
    color: 'white',
    textAlign: 'center'
  }
});

module.exports = LikedRowStyles;
