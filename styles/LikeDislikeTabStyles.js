'use strict';

var React = require('react-native');
var {
  StyleSheet
} = React;

var LikeDislikeTabStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 100
  },
  dislike: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 125
  },
  like: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 60
  }
});

module.exports = LikeDislikeTabStyles;
