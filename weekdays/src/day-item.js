var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet

var dayItem = React.createClass({
  render: function (day) {
    return (
      <Text style ={styles.day} > {this.props.day}</Text>
    )
  }
})

//create

//style

var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: "#000"
  }
})
//make this compo elsewhere

module.exports = dayItem
