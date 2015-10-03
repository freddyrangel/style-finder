'use strict';

var React = require('react-native');
var {
  StyleSheet
} = React;

var TabStyles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = TabStyles;
