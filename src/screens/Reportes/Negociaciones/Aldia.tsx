import React, { Component } from "react";
import {View, Text, StyleSheet,Dimensions} from "react-native"; 
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
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Rainy Days"] // optional

    };
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;
    return (
        <View style={style.container}>
            <Text style={style.text}> 
                Pedidos
            </Text>
            <LineChart
              data={data}
              width={screenWidth}
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
  },
  text:{
    color : "#ffffff"
  }
})
  

export default aldia;