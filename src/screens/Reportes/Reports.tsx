import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native"; 
import {} from "react-native"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
class Reports extends Component {
  render() {
    return (
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: -19.58877845631177,
          longitude:  -65.75353445345742,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
          
        }}
      >
      </MapView>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    width: 300,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:80,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });
  

export default Reports;