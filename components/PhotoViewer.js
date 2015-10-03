'use strict';

var React = require('react-native');
var LikeDislikeTab = require('./LikeDislikeTab.js');
var {
  View,
  Image
} = React;

var PhotoViewer = React.createClass({
  render: function() {
    var photo = this.props.photo;
    return (
      <View>
        <Image source={{uri: photo.url}} style={{width: 200, height: 200}} />
        <LikeDislikeTab
          photo={photo}
          likePhoto={this.props.likePhoto.bind(null, photo.uuid)}
          dislikePhoto={this.props.dislikePhoto.bind(null, photo.uuid)}/>
      </View>
    );
  },
});

module.exports = PhotoViewer;
