import React, { Component } from "react";
import {createStackNavigator, CardStyleInterpolators} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import {View, Text,StyleSheet, Platform} from "react-native"; 
import {StackRouter} from "@react-navigation/native";
import Login from "../Login/Login";
import IndexClients from "../users/IndexClients";

import { NavigationEvents } from "react-navigation";
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
var Stack = createStackNavigator();


class Prelogin extends Component<any, any> {
  constructor(props: any) {
    super(props);
    
  }
  render() {
    return (
     
          <NavigationContainer independent={true} >
              <Stack.Navigator screenOptions={{ headerShown: false , 
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}>
                  <Stack.Screen name="Login" component={Login}/>
                  <Stack.Screen name="IndexClients" component={IndexClients}/>
              </Stack.Navigator>
          </NavigationContainer>
        
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
export default Prelogin;