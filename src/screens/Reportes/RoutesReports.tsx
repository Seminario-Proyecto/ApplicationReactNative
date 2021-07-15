import React, { Component } from "react";
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import {View, Text,StyleSheet, Platform} from "react-native"; 
import {Appbar,Button, Paragraph, Dialog, Portal } from "react-native-paper"
import AppContext from "../../context/AppContext";
import Reports from "./Reports";
//import RoutesTap from "/RoutesTap;
import Icons3 from "react-native-vector-icons/Foundation";
import clicap from "./clientcaptados/routestap";
import clientPoten from "./clientPoten/routesclientP";
import producVendi from "./ProductVendi/routesVen";
import pedidoAcomodado from "./PedAcom/routesPediAco";
import Negociaciones from "./Negociaciones/routesNoti";
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

var Stack = createStackNavigator();
class RoutesReports extends Component<any, any> {
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
            <Stack.Screen name="Reports" component={Reports} options={() => (
              {header: () => 
                  <View></View>
               
             }
            )}/> 
              <Stack.Screen name="clicap" component={clicap} options={() => (
              {header: (navigate) => <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                <Appbar.Content title="Clientes Captados" />
             </Appbar.Header>}
            )}/>
           <Stack.Screen name="clientPoten" component={clientPoten} options={() => (
              {header: (navigate) => <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                <Appbar.Content title="Clientes Potenciales" />
             </Appbar.Header>}
            )}/>

            <Stack.Screen name="producVendi" component={producVendi} options={() => (
              {header: (navigate) => <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                <Appbar.Content title="Productos vendidos" />
             </Appbar.Header>}
            )}/>
            <Stack.Screen name="pedidoAcomodado" component={pedidoAcomodado} options={() => (
              {header: (navigate) => <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                <Appbar.Content title="Pedidos Acomodados" />
             </Appbar.Header>}
            )}/>
             <Stack.Screen name="Negociaciones" component={Negociaciones} options={() => (
              {header: (navigate) => <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                <Appbar.Content title="Negociaciones" />
             </Appbar.Header>}
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
export default RoutesReports ;