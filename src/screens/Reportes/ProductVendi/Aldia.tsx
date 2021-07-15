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
      labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43]
        }
      ]
    };

    const chartConfig = {
      backgroundGradientFrom: "#252850",
      //backgroundGradientFromOpacity: 0.8,
      //backgroundGradientTo: "rgb(255, 64, 71)",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 0.1) => `rgba(26, 255, 146)`,
      strokeWidth: 1, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };

    const screenWidth = Dimensions.get("window").width;

    return (
        <View style={style.container}>
            <Text style={style.text}> 
                Pedidos
            </Text>
          <View style={style.container2}>
            <BarChart
            style={style.graphStyle}
            data={data}
            width={screenWidth}
            height={260}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
          </View>
        </View>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
  },
  container2:{
   marginLeft:20,
   marginRight:20
  },
  text:{
    color : "#ffffff"
  },
  graphStyle:{

  }
})
  

export default aldia;