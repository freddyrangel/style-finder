var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Title = React.createClass({
  render: function() {
    var styles = this.props.styles;
    return (
      <Text style={styles.welcome}>{this.props.text}</Text>
    );
  }
});

module.exports = Title;
