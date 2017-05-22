
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView
} from 'react-native';


var Api = require('./src/api.js');

var weather = React.createClass({
  getInitialState: function () {
    return {
      pin: {
        latitude:0,
        longitude:0
      },
      city: undefined,
      temp: undefined,
      description: undefined
    }
  },
  onRegionChangeComplete: function (region) {
    Api(region.latitude,region.longitude).then((data) => {
        console.log(data)
        this.setState(data)
    });
    this.setState({
      pin: {
        latitude:region.latitude,
        longitude:region.longitude
      }
    })
  },
  render: function() {
    return <View style={styles.container}>
                <MapView
                  style={styles.map}
                  annotations = {[this.state.pin]}
                  onRegionChangeComplete = {this.onRegionChangeComplete}
                  style = {styles.map} />

                  <View style={styles.textWrapper}>
                    <Text style={styles.text}>{this.state.city}</Text>
                    <Text style={styles.text}>{this.state.temp}</Text>
                    <Text style={styles.text}>{this.state.description}</Text>
                  </View>
            </View>
  },
})

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF'
    },

    map: {
        flex: 2,
        marginTop: 30
    },

    textWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
      fontSize:20
    }


});
AppRegistry.registerComponent('weather', () => weather);
