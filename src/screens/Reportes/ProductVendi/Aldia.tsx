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
      barColors : [ "#FFC947" , "#0A1931" ,  "#0A1931" ] 
    };

    const chartConfig = {
      backgroundGradientFrom: "#54436B",
      backgroundGradientFromOpacity: 1,
      backgroundGradientTo: "#ACFFAD",
      backgroundGradientToOpacity: 0,
      color: (opacity = 1) => `rgba(0,0, 0)`,
      strokeWidth: 3, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false// optional
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
    const chartConfig1 = {
      backgroundGradientFrom: "#284E78",
     backgroundGradientFromOpacity: 1,
      backgroundGradientTo: "185ADB",
      backgroundGradientToOpacity: 0.9,
      color: (opacity = 1) => `rgb(255, 255, 255, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.3,
      useShadowColorFromDataset: false // optional
    };

    

    return (
      <ImageBackground style={style.container} source={require("../../../../images/fondo6.jpg")}>
        <View style={style.container}>
           
          
            <BarChart
            style={style.graphStyle1}
            data={data}
            
            width={395}
            height={260}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />

         

          <ContributionGraph
            style={style.graphStyle}
            values={commitsData}
            endDate={new Date("2017-04-01")}
            numDays={105}
            width={395}
            height={220}
            chartConfig={chartConfig1}
          />
        </View>
        
        </ImageBackground>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
  },
  
  text:{
    color : "#ffffff"
  },
  graphStyle:{
    marginVertical: 8,
    borderRadius: 16,
    marginTop:220,
    height:200,
    marginLeft:8,
  
  },
  graphStyle1:{
    marginVertical: 8,
    borderRadius: 16,
    marginTop:5,
    height:50,
    marginLeft:8,
  
  },
  
});
  

export default Aldia;