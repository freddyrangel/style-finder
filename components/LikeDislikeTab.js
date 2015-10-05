'use strict';

var React  = require('react-native');
var styles = require('../styles/LikeDislikeTabStyles.js');
var {
  Image,
  View,
  Text
} = React;

var LikeDislikeTab = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.dislikeText} onPress={this.props.dislikePhoto}>-</Text>
        <Text style={styles.likeText} onPress={this.props.likePhoto}>+</Text>
      </View>
    );
  },
});

module.exports = LikeDislikeTab;
