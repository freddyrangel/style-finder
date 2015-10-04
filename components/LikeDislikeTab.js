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
        <View style={styles.dislike}>
          <Text style={styles.text} onPress={this.props.dislikePhoto}>-</Text>
        </View>
        <View style={styles.like}>
          <Text style={styles.text} onPress={this.props.likePhoto}>+</Text>
        </View>
      </View>
    );
  },
});

module.exports = LikeDislikeTab;
