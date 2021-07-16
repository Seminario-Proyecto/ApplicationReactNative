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
          color: (opacity = 1) => `rgb(0, 0, 0, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Reportes Al mes "] // optional
    };
    const chartConfig = {
      backgroundGradientFrom: "#284E78",
     backgroundGradientFromOpacity: 6,
      backgroundGradientTo: "#5D8233",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgb(255, 255, 255, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.3,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;


    const commitsData = [
      { date: "2021-01-02", count: 1 },
      { date: "2017-01-03", count: 2 },
      { date: "2017-01-04", count: 3 },
      { date: "2017-01-05", count: 4 },
      { date: "2017-01-06", count: 5 },
      { date: "2017-01-30", count: 2 },
      { date: "2017-01-31", count: 3 },
      { date: "2017-03-01", count: 2 },
      { date: "2017-04-02", count: 4 },
      { date: "2017-03-05", count: 2 },
      { date: "2017-02-30", count: 4 }
    ];
         
    return (
      
        <View style={style.container}>
             
            

          <ContributionGraph
            style={style.graphStyle}
            values={commitsData}
            endDate={new Date("2017-04-01")}
            numDays={105}
            width={395}
            height={220}
            chartConfig={chartConfig}
          />

          <LineChart
           style={style.graphStyle}
            data={data}
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
    marginTop:10
   
   
  
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
  

export default Almes;