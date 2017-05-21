import React from 'React'

import {Component, View, Text, AppRegistry,StyleSheet, TouchableHighlight} from 'react-native'

var StopWatch = React.createClass({
  startStopButton: function() {
    return (
      <TouchableHighlight underlayColor="red"  onPress={this.handleStartPress}>
        <Text>Start</Text>
      </TouchableHighlight>
    )

  },
  LapButton: function() {
    return (
      <View>
        <Text>Lap</Text>
      </View>
    )
  },
  handleStartPress: function () {
    console.log('hi')
  },
  border: function (color) {
    return {
      borderColor: color,
      borderWidth:4

    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, this.border('yellow')]}>
          <View style={[this.border('red'), styles.timeWrapper]}>
            <Text>0</Text>
          </View>

          <View style={[this.border('green'),styles.buttonWrapper]}>
            {this.startStopButton()}
            {this.LapButton()}
          </View>
        </View>
        <View style={[styles.footer,this.border('blue')]}>
          <Text>I am a list</Text>
        </View>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'stretch',
  },
  header:{
    flex:1,
  },
  footer:{
    flex:1
  },
  timeWrapper:{
    flex:5,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonWrapper:{
    flex:3,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems:'center'

  }
})

AppRegistry.registerComponent('stopwatch', () => {
  return StopWatch;
})
