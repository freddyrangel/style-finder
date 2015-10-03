'use strict';

var React         = require('react-native');
var styles        = require('../styles/TabStyles.js');
var BrowseTabView = require('./BrowseTabView.js');
var {
  TabBarIOS,
  View,
  Text
} = React;

var TabBar = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'browse'
    }
  },
  render: function() {
    var selectedTab = this.state.selectedTab;
    return (
      <TabBarIOS tintColor="white" barTintColor="darkslateblue">
        <TabBarIOS.Item
          selected={selectedTab === 'browse'}
          title={'Browse'}
          onPress={this.changeTab.bind(null, 'browse')}>
          <BrowseTabView
            photos={this.props.photos}
            likePhoto={this.props.likePhoto}
            dislikePhoto={this.props.dislikePhoto}
            currentImageIndex={this.state.currentImageIndex}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={'Liked'}
          selected={selectedTab === 'liked'}
          onPress={this.changeTab.bind(null, 'liked')}>
          <View></View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

  changeTab: function(selectedTab) {
    this.setState({selectedTab: selectedTab});
  }
});

module.exports = TabBar;
