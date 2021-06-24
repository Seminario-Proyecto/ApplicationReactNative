import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native"; 
import {} from "react-native"
class DetailUsersPotenciales extends Component {
  render() {
    return (
        <View style={style.container}>
            <Text style={style.text}> 
                Pedidos
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
  

export default DetailUsersPotenciales;