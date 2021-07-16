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
          color: (opacity = 1) => `rgb(24, 90, 219, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: [" S: Reportes Semanal"] // optional
    };
    const chartConfig = {
      backgroundGradientFrom: "#57837B",
     backgroundGradientFromOpacity: 1,
      backgroundGradientTo: "#C9D8B6",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgb(0, 0, 0, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.9,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;
    const data1 = {
      labels: ["S1", "S4"],
      legend: ["L1", "L2", "L3"],
      data: [
        [60, 60, 60],
        [30, 30, 60]
      ],
      barColors: ["#EEB76B", "#ECD662", "#F1ECC3"]
      
    };
         
    return (
        <View style={style.container}>
           
                      <LineChart
                       style={style.graphStyle1}
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
    marginTop:30,
 
    height:220
  },
  graphStyle1:{
    marginVertical: 8,
    borderRadius: 16,
 
    
    height:220
  }
})
  

export default semana;