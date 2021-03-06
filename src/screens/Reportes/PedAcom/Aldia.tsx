import React, { Component } from "react";
import {View, Text, StyleSheet,Dimensions,ImageBackground} from "react-native"; 
import {} from "react-native"
import {LineChart} from "react-native-chart-kit"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
class aldia extends Component {
  render() {
    return (
      
      <ImageBackground style={style.container} source={require("../../../../images/fondo6.jpg")}>
        <View style={style.container}>
                     <View>
                                
                                  <LineChart
                          data={{
                            labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
                            datasets: [
                              {
                                data: [
                                  Math.random() * 100,
                                  Math.random() * 100,
                                  Math.random() * 100,
                                  Math.random() * 100,
                                  Math.random() * 100,
                                  Math.random() * 100
                                ]
                              }
                            ]
                          }}
                          width={Dimensions.get("window").width} // from react-native
                          height={220}
                          yAxisLabel="$"
                          yAxisSuffix="k"
                          yAxisInterval={1} // optional, defaults to 1
                          chartConfig={{
                            backgroundColor: "#5F939A",
                            backgroundGradientFrom: "#3A6351",
                            backgroundGradientTo: "#A0937D",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 0) => `rgb(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                              borderRadius: 16
                            },
                            propsForDots: {
                              r: "6",
                              strokeWidth: "2",
                              stroke: "#2940D3"
                            }
                          }}
                          bezier
                          style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            marginLeft:10,
                            marginRight:20
                            
                          }}
                        />
                      </View>
                        <View style={style.containermap}>
                                    <MapView
                                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                                        style={style.map}
                                        region={{
                                        latitude: -19.58877845631177,
                                        longitude:  -65.75353445345742,
                                        latitudeDelta: 0.015,
                                        longitudeDelta: 0.0121,
                                        
                                        }}
                                    >
                                    </MapView>
                          </View>
        </View>
        </ImageBackground>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#053742",
  },
  text:{
    color : "#ffffff"
  },
  containermap: {
    ...StyleSheet.absoluteFillObject,
    height: 250,
    width: 385,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:240,
    marginLeft:15
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
  

export default aldia;