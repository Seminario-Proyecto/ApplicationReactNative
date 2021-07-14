import React, { Component } from "react";
import {View, Text, StyleSheet, ScrollView, Dimensions,TouchableOpacity, Image,ImageBackground} from "react-native"; 
import {} from "react-native"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import AppContext from "../../context/AppContext";

import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigationProp } from '@react-navigation/stack';


import SearchBar from '../../Components/SearchBar';
import SectionTitle from '../../screens/Reportes/SectionTitle';
import FoodCard from '../../Components/FoodCard';

import {Appbar, List,Avatar, Menu,FAB, Searchbar,  Paragraph, Dialog, Portal,Button, Colors } from "react-native-paper";
interface MyState{
  isEnable: boolean;
  open: boolean,
 
}

const {width: widthScreen, height: heightScreen} = Dimensions.get('window');
interface MyProps {
  navigation: StackNavigationProp<any, any>
}

class SelecProduc extends Component<MyProps, MyState> {
  static contextType = AppContext;
  
  constructor(props: any) {
    super(props);
    this.state={
      isEnable: false,
      open: false,
      
    }
   
  }
  render() {
    return (
      <ImageBackground style={styles.container} source={require("../../../images/fondoP.jpg")}>

<ScrollView style={styles.container}>
      
      <View style={styless.localBox}>
          <View style={styless.container2}>
            <Text style={styless.title2}>Productos en Oferta</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate}}>
              <Text style={styless.link2}>Ver mas </Text>
            </TouchableOpacity>
          </View>
      </View>
      <ScrollView style={styless.horizontalScroll} horizontal={true}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <View style={styless.localBox}>
          <View style={styless.container2}>
            <Text style={styless.title2}>Nuevos Productos</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate}}>
              <Text style={styless.link2}>Ver mas</Text>
            </TouchableOpacity>
          </View>
      </View>
      <ScrollView style={styless.horizontalScroll} horizontal={true}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <View style={styless.localBox}>


            <View style={styless.container2}>
            <Text style={styless.title2}>Productos mas Consumidos</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate}}>
              <Text style={styless.link2}>Ver mas </Text>
            </TouchableOpacity>
          </View>
        
       
      </View>
      <ScrollView style={styless.horizontalScroll} horizontal={true}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <View style={styless.scrollFooter} />
    </ScrollView>



      <FAB
            style={styles.fab}
            small={false}
            label="Agregar Bs "
            icon="plus"
            onPress={() => {
                this.props.navigation.push("RegisterP");
            }}
          />


  </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  
  containermap: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    width: 300,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:80,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    marginRight:100
  },
 });
 
const styless = EStyleSheet.create({
  localBox: {
    paddingHorizontal: 25.0,
  },
  container: {
    width: widthScreen,
    minHeight: heightScreen,
    paddingTop: 35.0,
    backgroundColor: '$whiteColour',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 26.48,
    height: 30.0,
  },
  locationBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontFamily: 'gilroyNormal600',
    fontSize: '1.125rem',
  },
  locationIcon: {
    marginRight: 5.0,
   
    
  },
  searchBox: {
    marginTop: 20.0,
  },
  banner: {
    marginTop: 20.0,
    width: widthScreen * 0.87,
    resizeMode: 'contain',
  },
  horizontalScroll: {
    paddingLeft: 20.0,
  },
  scrollFooter: {
    marginBottom: heightScreen * 0.15,
  },
  container2: {
    marginTop: 30.0,
    marginBottom: 20.0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title2: {
    fontFamily: '$gilroyNormal600',
    fontSize: '1.3rem',
    lineHeight: '1.3rem',
    color: '$blackColour',
  },
  link2: {
    fontFamily: '$gilroyNormal600',
    fontSize: '1rem',
    color: '#00BCD4',
  },
});

  

export default SelecProduc;