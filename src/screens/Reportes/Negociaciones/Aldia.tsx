import React, { Component } from "react";
import {View, Text, StyleSheet,Dimensions,ImageBackground} from "react-native"; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
      labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgb(24, 90, 219, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Reporte diario"] // optional

    };
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
     // backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;
    const data1 = [
      {
        name: "Pablo",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Luis",
        population: 2800000,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Pedro",
        population: 527612,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Maria",
        population: 8538000,
        color: "#FB743E",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Juan",
        population: 11920000,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      }
    ];
    return (
      <ImageBackground style={style.container} source={require("../../../../images/fondo9.jpg")}>
      <KeyboardAwareScrollView style={{flex:1}}>
        <View style={style.container}>
            <Text style={style.text}> 
                Pedidos
            </Text>
            <View style={style.container1}>
            <PieChart
              data={data1}
              width={screenWidth}
              height={250}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[10, 20]}
              absolute
            />
            </View>
            <View style={style.container2}>
            <LineChart
              style={style.graphStyle}
              data={data}
              width={395}
              height={200}
              chartConfig={chartConfig}
            />
            </View>
            
        </View>
        </KeyboardAwareScrollView>
        </ImageBackground>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
  },
  container1:{
    marginTop:5,
    height:220
    
  },
  container2:{
    marginTop:89
  },
  text:{
    color : "#ffffff"
  },
  graphStyle:{
    marginVertical: 8,
    borderRadius: 16,
    marginTop:2,
    height:220,
    marginLeft:8
  },
})
  

export default aldia;