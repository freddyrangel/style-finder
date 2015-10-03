'use strict';

var React     = require('react-native');
var Title     = require('./Title.js');
var PhotoList = require('./PhotoList.js');
var TabStyles = require('../styles/TabViewStyles.js');
var {
  View
} = React;

var BrowseTabView = React.createClass({

  render: function() {
    var data = this.props.data;
    return (
      <View style={TabStyles.container}>
        <Title styles={TabStyles} text={'Browse'}/>
        <PhotoList
          data={this.props.data}
          likePhoto={this.props.likePhoto}
          currentImageIndex={this.props.currentImageIndex}/>
      </View>
    );
  }
});

module.exports = BrowseTabView;
