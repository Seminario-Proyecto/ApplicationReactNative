import React, { Component } from "react";
import {View, Text, StyleSheet,Dimensions,ImageBackground} from "react-native"; 
import {} from "react-native"
import {LineChart} from "react-native-chart-kit"
class aldia extends Component {
  render() {
    return (
      <ImageBackground style={style.container} source={require("../../../../images/fondo6.jpg")}>
        <View style={style.container}>
            <Text style={style.text}> 
                Pedidos
            </Text>

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
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
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
        </ImageBackground>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
  },
  text:{
    color : "#ffffff"
  }
})
  

export default aldia;