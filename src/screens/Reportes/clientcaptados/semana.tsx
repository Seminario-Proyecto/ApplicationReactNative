import React, { Component } from "react";
import {View, Text, Image ,StyleSheet,Dimensions,ImageBackground} from "react-native"; 
import {} from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
      labels: ["Semana 1", "Semana 2"],
      legend: ["S1", "S2", "S3"],
      data: [
        [60, 60, 60],
        [30, 30, 60]
      ],
      barColors: ["#39A9CB", "#2940D3", "#232323"]
    };

    const chartConfig = {
      backgroundGradientFrom: "#022E57",
      backgroundGradientFromOpacity: 1,
      backgroundGradientTo: "#FFDDCC",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;


    const data1 = {
      labels: ["S1", "S2", "S3", "S4"],
      datasets: [
        {
          data: [20, 45, 28, 80],
          color: (opacity = 1) => `rgb(153, 21, 78, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Clientes captados durante la semana "] // optional
    };
    return (
      <KeyboardAwareScrollView style={{flex:1}}>
      <ImageBackground style={style.container} source={require("../../../../images/fondo6.jpg")}>
        <View style={style.container}>
           

        <LineChart
            data={data1}
            width={395}
            style={style.graphStyle1}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
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
        </KeyboardAwareScrollView>
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
    marginTop:80,
    marginLeft:10,
    height:220,

  
  },
  graphStyle1:{
    marginVertical: 8,
    borderRadius: 16,
    marginTop:10,
    marginLeft:10,
    height:220,

  
  }
})
  

export default semana