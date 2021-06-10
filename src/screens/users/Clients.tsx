import React, { Component } from "react";
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import {View, StyleSheet} from "react-native"; 
import ListUsers from "./ListUsers";
import RegisterUsers from "./RegisterUsers";
var Stack = createStackNavigator();
class Clients extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: []
    }
  }
  render() {
    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen name="list" component={ListUsers}/> 
            <Stack.Screen name="RegisterUsers" component={RegisterUsers}/>
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
export default Clients;