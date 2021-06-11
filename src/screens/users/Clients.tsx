import React, { Component } from "react";
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import {View, Text,StyleSheet, Platform} from "react-native"; 
import {Appbar} from "react-native-paper"
import ListUsers from "./ListUsers";
import RegisterUsers from "./RegisterUsers";
import DetailUsers from "./DetailUsers";
import DataContext from "../../context/dataContext";
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
var Stack = createStackNavigator();
class Clients extends Component<any, any> {
  test: any
  static contextType = DataContext
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: []
    }
    
  }
  render() {
    const {data, testFunction} = this.context;
    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen name="list" component={ListUsers} options={() => ({
              header:() => <Appbar.Header>
              <Appbar.BackAction onPress={() => {}} />
              <Appbar.Content title="Gestor de Usuarios" subtitle={'Gestión'} />
              <Appbar.Action icon="magnify" onPress={() => {
                console.log(data);
                testFunction(!data);
              }} />
              <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
            </Appbar.Header>
            })}/> 
            <Stack.Screen name="RegisterUsers" component={RegisterUsers}/>
            <Stack.Screen name="DetailUsers" component={DetailUsers}/>
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