'use strict';

var React = require('react-native');
var PhotoViewer = require('./PhotoViewer.js');
var {
  Text
} = React;

var PhotoList = React.createClass({
  render: function() {
    var photoData = this.props.photos;
    var photo = photoData[this.props.currentImageIndex];
    if (photoData.length < 1) {
      return <Text>Loading Data</Text>
    } else {
      return (
        <PhotoViewer photo={photo}
          likePhoto={this.props.likePhoto}
          dislikePhoto={this.props.dislikePhoto}/>
      );
    }
  }

});

module.exports = PhotoList;
