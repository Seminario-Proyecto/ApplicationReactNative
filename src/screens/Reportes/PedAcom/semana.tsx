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
      labels: ["S1", "S2", "S3", "S3", "S4"],
      datasets: [
        {
          data: [20, 45, 28, 80],
          color: (opacity = 1) => `rgb(0, 0, 0, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Reportes Semanal "] // optional
    };
    const chartConfig = {
      backgroundGradientFrom: "#A5E1AD",
     backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#39A9CB",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgb(0, 0, 0, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.9,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;
    const data1 = {
      labels: ["S1", "S2"],
      legend: ["S1", "S2", "S3"],
      data: [
        [60, 60, 60],
        [30, 30, 60]
      ],
      barColors: ["#EEB76B", "#ECD662", "#FFC93C"]
    };
         
    return (
        <View style={style.container}>
            <Text style={style.text}> 
                      <LineChart
            data={data}
            width={395}
            height={220}
            chartConfig={chartConfig}
          />

              <StackedBarChart
              style={style.graphStyle}
              data={data1}
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
  },
  graphStyle:{
    marginVertical: 8,
    borderRadius: 16,
 
    marginLeft:10,
    height:220
  }
})
  

export default semana;