import React, { Component } from "react";

import {} from "react-native"
import {View, Text, StyleSheet,Dimensions,ImageBackground} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

class semana extends Component {
  render() {


    const data = {
      labels: ["S1", "S2", "S3", "S4"],
      datasets: [
        {
          data: [20, 45, 28, 80],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Reporte Semanal"] // optional
    };
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 1,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;

    const data1 = {
      labels: ["Swim", "Bike", "Run"], // optional
      data: [0.4, 0.6, 0.8]
    };
         
    return (
        <View style={style.container}>
            <Text style={style.text}> 
                      <LineChart
            style={style.graphStyle}
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
    marginTop:5,
 
    marginLeft:8

  },
  text:{
    color : "#ffffff"
  }, 
  graphStyle:{
    marginVertical: 8,
    borderRadius: 16,
    marginTop:5,
    height:220,
    marginLeft:8
  },
})
  

export default semana;