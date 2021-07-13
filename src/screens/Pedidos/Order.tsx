import React, { Component } from "react";
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import {View, Text,StyleSheet, Platform} from "react-native"; 
import {Appbar,Button, Paragraph, Dialog, Portal } from "react-native-paper"
import AppContext from "../../context/AppContext";
import RegisterPedido from "./RegisterPedido";
import ListPedi from "./ListPedi";
import Icons3 from "react-native-vector-icons/Foundation";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

var Stack = createStackNavigator();
class Order extends Component<any, any> {
  test: any
  static contextType = AppContext
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: []
    }
    
  }
  render() {
    const {searchbarVisible, changeSearchBarVisible} = this.context;
    const {searchbarrVisible, changeSearchBarrVisible} = this.context;
    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen name="listPedi" component={ListPedi} options={() => (
              {header: () => <Appbar.Header>
                <Appbar.Action icon="alpha-r-box" size={40} />
                <Appbar.Content title="ROPCKABYE" subtitle={'Modulo Pedidos'} />
                 <Appbar.Action icon="magnify" size={40} onPress={() => {
                   changeSearchBarVisible(!searchbarVisible);
                 }} />
                 
                 <Appbar.Action icon={MORE_ICON} onPress={() => {

                  changeSearchBarrVisible(!searchbarrVisible);
                 
                   
                  }} />
             </Appbar.Header >}
            )}/> 

            <Stack.Screen name="RegisterP" component={RegisterPedido} options={() => (
              {
                header: (navigate) => <Appbar.Header>
                 
                 
                  <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                 <Appbar.Content title="Buscar Cliente"  />
                   <Appbar.Action icon="magnify" size={30} onPress={() => {
                     changeSearchBarVisible(!searchbarVisible);
                   }} />
                   
                   <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
               </Appbar.Header >
              }
            )}/>
            
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
export default Order;