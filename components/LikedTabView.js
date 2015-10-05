'use strict';

var React     = require('react-native');
var TabStyles = require('../styles/TabViewStyles.js');
var LikedRowStyles = require('../styles/LikedRowStyles.js');
var Title     = require('./Title.js');
var {
  ListView,
  Image,
  View,
  Text
} = React;

var LikedTabView = React.createClass({
  render: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: function(r1, r2) {
        return r1 !== r2
      }
    });
    var dataSource = ds.cloneWithRows(this.filterPhotos());
    return (
      <View style={LikedRowStyles.container}>
        <Title styles={TabStyles} text={'Liked'}/>
        <ListView 
          dataSource={dataSource}
          renderRow={this.renderRowData}/>
      </View>
    );
  },

  renderRowData: function(rowData) {
    return (
      <View style={LikedRowStyles.row}>
        <Image source={{uri: rowData.url}} style={{width: 100, height: 100}}/>
        <Text style={LikedRowStyles.text}>{rowData.salonData.name}</Text>
      </View>
    );
  },

  filterPhotos: function() {
    var photos = this.props.photos;
    return photos.filter(function(photo) {
      return photo.liked === true;
    });
  }
});

module.exports = LikedTabView;
