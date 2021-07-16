import React, { Component } from "react";
import {View, Text, StyleSheet,Dimensions,ImageBackground} from "react-native"; 
import {} from "react-native"
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
class Aldia extends Component {
  render() {

    
    const data = {
      labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43]
        }
      ],
      barColors : [ "# dfe4ea" ,  "# ced6e0" ,  "# a4b0be" ] 
    };

    const chartConfig = {
      //backgroundGradientFrom: "#053742",
      //backgroundGradientFromOpacity: 0.8,
      backgroundGradientTo: "#39A2DB",
      //backgroundGradientToOpacity: 2,
      color: (opacity = 0.1) => `rgba(26, 255, 146)`,
      strokeWidth: 1, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };

    const screenWidth = Dimensions.get("window").width;
    

    return (
      <ImageBackground style={style.container} source={require("../../../../images/fondo6.jpg")}>
        <View style={style.container}>
            <Text style={style.text}> 
                Pedidos
            </Text>
          <View style={style.container2}>
            <BarChart
            style={style.graphStyle}
            data={data}
            
            width={399}
            height={260}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={20}
          />
          </View>
        </View>
        </ImageBackground>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
  },
  container2:{
   marginLeft:5,

  },
  text:{
    color : "#ffffff"
  },
  graphStyle:{
  
    
  }
});
  

export default Aldia;