'use strict';

var React         = require('react-native');
var BrowseTabView = require('./BrowseTabView.js');
var LikedTabView  = require('./LikedTabView.js')
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
          <LikedTabView
            photos={this.props.photos}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

  changeTab: function(selectedTab) {
    this.setState({selectedTab: selectedTab});
  }
});

module.exports = TabBar;
