'use strict';

var React  = require('react-native');
var styles = require('../styles/TabStyles.js');
var {
  TabBarIOS,
  View,
  Text
} = React;

var TabBar = React.createClass({
  render: function() {
    var selectedTab = this.props.selectedTab;
    return (
      <TabBarIOS tintColor="white" barTintColor="darkslateblue">
        <TabBarIOS.Item
          selected={selectedTab === 'browse'}
          title={'Browse'}
          onPress={this.props.changeTab}>
          <View></View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={'Liked'}
          selected={selectedTab === 'liked'}
          onPress={this.props.changeTab.bind(null, 'liked')}>
          <View></View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

  _renderContent: function(color, pageText) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{pageText}</Text>
      </View>
    );
  },


});

module.exports = TabBar;
