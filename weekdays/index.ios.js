
//create the react c
const React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var Stylesheet = React.StyleSheet

var Weekdays = React.createClass({
  render : function () {
    return (
      <View style={styles.container}>
        <Text>Days Of the week</Text>
      </View>
    )
  }
})

AppRegistry.registerComponent('weekdays',function () {
  return Weekdays
})

//
var styles = Stylesheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }
})
