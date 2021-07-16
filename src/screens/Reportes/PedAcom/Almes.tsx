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

class Almes extends Component {
  render() {


    const data = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(82, 0, 116, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Reporte al mes "] // optional
    };
    const chartConfig = {
      backgroundGradientFrom: "#7868E6",
     // backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#E4FBFF",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(4, 0, 154, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;

    const data1 = {
      labels: ["Enero", "Mayo", "Junio"], // optional
      data: [0.4, 0.6, 0.8]
    };
         
    return (
        <View style={style.container}>
            <ProgressChart
          style={style.graphStyle}
          data={data1}
          width={395}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />





            <LineChart
            data={data}
            width={395}
            height={220}
            chartConfig={chartConfig}
            style={style.graphStyle1}
          />

        

           
            
        </View>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
    marginLeft:10,
    marginTop:10
  },
  text:{
    color : "#ffffff"
  },
  graphStyle:{
    marginVertical: 8,
    borderRadius: 16,
    marginTop:5,
    height:220
  },
  graphStyle1:{
    marginVertical: 8,
    borderRadius: 16,
    marginTop:5,
    height:220
  }
})
  

export default Almes;