import React, { Component } from "react";
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import {View, Text,StyleSheet, Platform,Image} from "react-native"; 
import {Appbar} from "react-native-paper"
import ListUsers from "./ListUsers";
import RegisterUsers from "./RegisterUsers";
import DetailUsers from "./DetailUsers";
import TakePicture from "./TakePicture";
import AppContext from "../../context/AppContext";
import  DetailUsersPotenciales from "../users/DetailUserPotenciaeles/DetailUserPotenciales";
import RegisterUsersPotenciales from "../users/DetailUserPotenciaeles/RegisterUserPotenciales";
import RegisterUserRegulares from "../users/DetailUserRegulares/RegisterUSerRegulares"
import RegisterUsersR from "../users/DetailUserPotenciaeles/RegisterUserPotenciales";
import RegisterUsersAgenda from "../users/DetailUserAgenda/RegisterUserAgenda";
import  DetailUsersAgenda from "../users/DetailUserAgenda/DetailUserAgenda";
import ClientesRegulares from "./TopTab/ClientsRegulars"
import Icons3 from "react-native-vector-icons/Foundation";
import TakePicturePotenciales from "./DetailUserPotenciaeles/TakePicturePotenciales";
import TakePictureRegulares from "./DetailUserRegulares/TakePictureRegulares";
import AgendReunionPotential from "./DetailUserPotenciaeles/AgendReunionPotential"
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

var Stack = createStackNavigator();
class Clients extends Component<any, any> {
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
    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen name="list" component={ListUsers} options={() => (
              {header: () => <Appbar.Header>

                  <Appbar.Action icon="alpha-r-box" size={40} />
                

                <Appbar.Content title="ROCKABYE" subtitle={'Modulo Clientes'} />
                 <Appbar.Action icon="magnify" size={30} onPress={() => {
                   changeSearchBarVisible(!searchbarVisible);
                 }} />
                 
                 <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
             </Appbar.Header >}
            )}/> 
             <Stack.Screen name="RegisterUsersR" component={RegisterUserRegulares} options={() => (
              {header: (navigate) => <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                <Appbar.Content title="Registro de Clientes Regulares" />
             </Appbar.Header>}
            )}/>
            <Stack.Screen name="RegisterUsersPotenciales" component={RegisterUsersPotenciales} options={() => (
              {header: (navigate) => <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                <Appbar.Content title="Registro de Clientes Potenciales" />
             </Appbar.Header>}
            )}/>
           
             <Stack.Screen name="RegisterUsersAgenda" component={RegisterUsersAgenda} options={() => (
              {
                header: () => <Appbar.Header>
                  <Appbar.Action icon="alpha-r-box" size={40} />
                  <Appbar.Content title="Buscar Cliente"  />
                   <Appbar.Action icon="magnify" size={30} onPress={() => {
                     changeSearchBarVisible(!searchbarVisible);
                   }} />
                   
                   <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
               </Appbar.Header >
              }
            )}/>
            <Stack.Screen name="DetailUsers" component={DetailUsers} options={() => (
              {header: (navigate) => <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                <Appbar.Content title="Datos del Cliente" />
             </Appbar.Header>}
            )}/>
            <Stack.Screen name="DetailUsersPotenciales" component={DetailUsersPotenciales} options={() => (
              {header: (navigate) => <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                <Appbar.Content title="Datos del Clientes Potenciales" />
             </Appbar.Header>}
            )}/>
              <Stack.Screen name="DetailUsersAgenda" component={DetailUsersAgenda} options={() => (
              {header: (navigate) => <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                <Appbar.Content title="Detalle de agenda" />
             </Appbar.Header>}
            )}/>
            <Stack.Screen name="TakePicture" component={TakePicture}/>
            <Stack.Screen name="TakePicturePotenciales" component={TakePicturePotenciales}/>
            <Stack.Screen name="TakePictureRegulares" component={TakePictureRegulares}/>
            <Stack.Screen name="ClientesRegulares" component={ClientesRegulares}/>
            <Stack.Screen name="Agendar una Reunion" component={AgendReunionPotential}/>
            
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