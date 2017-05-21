
//create the react c
const React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var Stylesheet = React.StyleSheet;
var DayItem = require('./src/day-item')
var moment = require('moment')
var R = require('ramda')

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday']

var Weekdays = React.createClass({
  days: function () {
    return DAYS.map(function (day) {
      return <DayItem day={day} ></DayItem>

    })
  },
  render : function () {
    return (
      <View style={styles.container}>
        <Text>Days Of the week</Text>
        {this.days()}

        <Text>
          {moment().format('ddd')}
        </Text>

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
