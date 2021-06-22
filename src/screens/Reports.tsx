import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native"; 
import {} from "react-native"
class Reports extends Component {
  render() {
    return (
        <View style={style.container}>
            <Text style={style.text}> 
                Reportes
            </Text>
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
  

export default Reports;