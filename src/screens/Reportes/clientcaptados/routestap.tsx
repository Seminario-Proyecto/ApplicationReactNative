import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native"; 
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Aldia from "./Aldia";
import semana from "./semana";
import Almes from "./Almes";

const TopTab = createMaterialTopTabNavigator();

class routestap extends Component<any, any> {
 
  render() {
    
    return (
          
          <TopTab.Navigator  >
        
              <TopTab.Screen name="Aldia" component={Aldia}/>
              <TopTab.Screen name="semana" component={semana}/>
              <TopTab.Screen name="Almes" component={Almes}/>
         
          </TopTab.Navigator>
          
        
          )
}}

export default routestap;
