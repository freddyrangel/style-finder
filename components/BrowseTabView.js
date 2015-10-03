'use strict';

var React     = require('react-native');
var Title     = require('./Title.js');
var PhotoList = require('./PhotoList.js');
var TabStyles = require('../styles/TabViewStyles.js');
var {
  View
} = React;

var BrowseTabView = React.createClass({

  getInitialState: function() {
    return {
      currentImageIndex: 0
    };
  },

  render: function() {
    var photos = this.props.photos;
    return (
      <View style={TabStyles.container}>
        <Title styles={TabStyles} text={'Browse'}/>
        <PhotoList
          photos={photos}
          likePhoto={this.likePhoto}
          dislikePhoto={this.dislikePhoto}
          currentImageIndex={this.state.currentImageIndex}/>
      </View>
    );
  },

  likePhoto: function(uuid) {
    this.props.likePhoto(uuid);
    this.setState({currentImageIndex: this.incrementImageIndex()});
  },

  dislikePhoto: function(uuid) {
    this.props.dislikePhoto(uuid);
    this.setState({currentImageIndex: this.incrementImageIndex()});
  },

  incrementImageIndex: function() {
    var currentImageIndex = this.state.currentImageIndex;
    if (currentImageIndex < this.props.photos.length - 1) {currentImageIndex += 1;}
    return currentImageIndex;
  }
});

module.exports = BrowseTabView;
