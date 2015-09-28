'use strict';

var React     = require('react-native');
var Title     = require('./Title.js');
var PhotoList = require('./PhotoList.js');
var styles    = require('../styles/TabStyles.js');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var BrowseTab = React.createClass({

  render: function() {
    var data = this.props.data;
    return (
      <View style={styles.container}>
        <Title styles={styles} text={'Browse'}/>
        <PhotoList data={this.props.data} />
      </View>
    );
  }
});

module.exports = BrowseTab;
