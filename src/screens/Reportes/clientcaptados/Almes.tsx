import React, { Component } from "react";

import {} from "react-native"
import {View, Text, StyleSheet,Dimensions,ImageBackground} from "react-native";
import {LineChart} from "react-native-chart-kit"


class Almes extends Component {
  render() {


    const data = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgb(0, 0, 0, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Reportes Al mes "] // optional
    };
    const chartConfig = {
      backgroundGradientFrom: "#F9DFDC",
     backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#0A81AB",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgb(0, 0, 0, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.3,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;
         
    return (
        <View style={style.container}>
            <Text style={style.text}> 
                      <LineChart
            data={data}
            width={395}
            height={220}
            chartConfig={chartConfig}
          />
           
            </Text>
        </View>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
    marginLeft:10,
    marginRight:10,
    marginTop:10
  },
  text:{
    color : "#ffffff"
  }
})
  

export default Almes;