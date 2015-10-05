'use strict';

var React = require('react-native');
var {
  StyleSheet
} = React;

var LikeDislikeTabStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  dislikeText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 60,
    color: '#FF0000',
    backgroundColor: 'darkslateblue',
    width: 75,
    height: 75,
    borderRadius: 37,
    marginRight: 50
  },

  likeText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 60,
    color: '#00FF00',
    backgroundColor: 'darkslateblue',
    width: 75,
    height: 75,
    borderRadius: 37
  }
});

module.exports = LikeDislikeTabStyles;
