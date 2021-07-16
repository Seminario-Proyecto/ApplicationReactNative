import React, { Component } from "react";
import {View, Text, Image ,StyleSheet,Dimensions,ImageBackground} from "react-native"; 
import {} from "react-native"
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
class aldia extends Component {
  render() {



    const data = {
      labels: ["Lunes", "Miercoles"],
      legend: ["L1", "L2", "L3"],
      data: [
        [60, 60, 60],
        [30, 30, 60]
      ],
      barColors: ["#39A9CB", "#2940D3", "#232323"]
    };

    const chartConfig = {
      backgroundGradientFrom: "#0A1931",
      backgroundGradientFromOpacity: 1,
      backgroundGradientTo: "#185ADB",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;
    return (
      <ImageBackground style={style.container} source={require("../../../../images/fondo6.jpg")}>
        <View style={style.container}>
           

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
      backgroundColor: "#FFE194",
      backgroundGradientFrom: "#4C4C6D",
      backgroundGradientTo: "#B8DFD8",
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

      <StackedBarChart
        style={style.graphStyle}
        data={data}
        width={395}
        height={220}
        chartConfig={chartConfig}
      />

             
               
        </View>
        </ImageBackground>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
    marginRight:5,
   
  },
  text:{
    color : "#ffffff"
  },
  rep:{
    marginLeft:"60%"
  },
  graphStyle:{
    marginVertical: 8,
    borderRadius: 16,
 
    marginLeft:10,
    height:220
  }
})
  

export default aldia;