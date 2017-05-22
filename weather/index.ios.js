
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView
} from 'react-native';


var weather = React.createClass({
  getInitialState: function () {
    return {
      pin: {
        latitude:0,
        longitude:0
      }
    }
  },
  onRegionChangeComplete: function (region) {
    this.setState({
      pin: {
        latitude:region.latitude,
        longitude:region.longitude
      }
    })
  },
  render: function () {

    var pins =[{
      latitude: 37,
      longitude: -95
    }]
    return (
      <MapView style={styles.map} annotations={[this.state.pin]} onRegionChangeComplete={this.onRegionChangeComplete}></MapView>
    )
  }
})

const styles = StyleSheet.create({
  map: {
    flex: 1,
  }
});

AppRegistry.registerComponent('weather', () => weather);
