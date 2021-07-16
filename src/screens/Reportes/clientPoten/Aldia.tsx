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
class aldia extends Component {
  render() {


    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
     // backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgb(62, 219, 240, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;

    const data1 = {
      labels: ["Lunes", "Martes", "Jueves"], // optional
      data: [0.4, 0.6, 0.8]
    };
    return (
      <ImageBackground style={style.container} source={require("../../../../images/fondo6.jpg")}>
        <View style={style.container}>
            <Text style={style.text}> 
                Pedidos
            </Text>
            <View>
                                
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
                          backgroundColor: "#334257",
                          backgroundGradientFrom: "#548CA8",
                          backgroundGradientTo: "#444444",
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

          <ProgressChart
          style={style.graphStyle}
          data={data1}
          width={395}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
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
  

export default aldia;