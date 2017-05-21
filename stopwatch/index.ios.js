import React from 'React'

import {
  Component,
  View,
  Text,
  AppRegistry,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

var formatTime = require('minutes-seconds-milliseconds')

var StopWatch = React.createClass({
  getInitialState: function() {
    return {timeElapsed: undefined, started: false, startTime: undefined,laps:[]}
  },
  startStopButton: function() {

    var style = this.state.started ? styles.stopButton : styles.startButton
    return (
      <TouchableHighlight underlayColor="red" onPress={this.handleStartPress} style={[styles.button, style]}>
        <Text>{this.state.started ? "Stop" : " Start "}</Text>
      </TouchableHighlight>
    )

  },
  LapButton: function() {
    return (
      <TouchableHighlight underlayColor="green" onPress={this.handleLapPress} style={[styles.button]}>
        <Text>Lap</Text>
      </TouchableHighlight>
    )
  },
  handleStartPress: function() {

    if (this.state.started) {
      clearInterval(this.interval);
      this.setState({
        started:false
      })
    return }
    var startTime = new Date();
    this.setState({
      startTime: new Date()
    })
    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        started:true
      })
    },0)
  },
  handleLapPress : function () {
    var lap = this.state.timeElapsed;
     this.setState({
      startTime :new Date(),
      laps: this.state.laps.concat([lap])
    })

  },
  border: function(color) {
    return {borderColor: color, borderWidth: 4}
  },
  laps: function () {
    return this.state.laps.map(function (t,i) {
      return <View style={styles.lap}>
        <Text style={styles.lapText}>
          Lap # {i}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(t)}
        </Text>
      </View>
    })
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.header]}>
          <View style={[styles.timeWrapper]}>
            <Text style={styles.timer}>{formatTime(this.state.timeElapsed)}</Text>
          </View>

          <View style={[ styles.buttonWrapper]}>
            {this.startStopButton()}
            {this.LapButton()}
          </View>
        </View>
        <View style={[styles.footer]}>
        {this.laps()}
        </View>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timeWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  timer:{
    fontSize:60,

  },
  button:{
    borderWidth:2,
    height:100,
    width:100,
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center'
  },
  startButton:{
    borderColor:'green'
  },
  stopButton:{
    borderColor: 'red'
  },
  lap:{
    justifyContent: 'space-around',
    flexDirection: "row"
  },
  lapText:{
    fontSize:30
  }
})

AppRegistry.registerComponent('stopwatch', () => {
  return StopWatch;
})
