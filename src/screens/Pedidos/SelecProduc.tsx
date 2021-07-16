import React, { Component } from "react";
import {View, Text, StyleSheet, ScrollView,FlatList, Dimensions,TouchableOpacity, Image,ImageBackground} from "react-native"; 
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

    const ui_array = [
      {id: 0},
      {id: 1},
      {id: 2},
      {id: 3},
    ];
    return (
      <ImageBackground style={styles.container} source={require("../../../images/fondo6.jpg")}>

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
            <View>

            <FlatList
                  data={ui_array}
                  keyExtractor={(item) => item.id}
                  scrollEnabled={true}
                  numColumns={4}
                  renderItem={({item}) => {
                  return (

                  <TouchableOpacity onPress={() => null} style={styless.card}>
                      <View style={styless.imageBox}>
                      <Image
                          source={require('../../../images/casar.jpeg')}
                          style={{ width: 100, height: 90}}
                        />
                      </View>
                      <View style={styless.cap2}>
                      <Text style={styless.title}>Casa Real Negra</Text>
                      <Text style={styless.subtitle}>1Ltr</Text>
                      </View>

                      <View style={styless.footer}>
                        <Text style={styless.price}>Bs. 140</Text>
                        <TouchableOpacity onPress={() => null} style={styless.button}>
                        <Image
                          source={require('../../../images/pluss.png')}
                          style={{ width: 40, height: 40}}
                        />
                        </TouchableOpacity>
                      </View>
                </TouchableOpacity>
                 );
                }}
              />



          </View>


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

  card: {
    width: widthScreen * 0.42,
    maxHeight: heightScreen * 0.30,
    borderWidth: 2.0,
    borderColor: "#39A2DB",
    borderRadius: 10.0,
    padding: 15.0,
    flexDirection: 'column',
    marginRight: 15.0,
    backgroundColor: '#053742',
  },
  imageBox: {
    height: heightScreen * 0.11,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    
    color: 'rgb(248, 249, 249 )',
    fontFamily: '$gilroyNormal600',
    fontSize: '1rem',
    
  },
  subtitle: {
    color: 'rgb(248, 249, 249 )',
    fontFamily: '$gilroyMedium',
    fontSize: '0.825rem',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightScreen * 0.01,
  },
  cap2: {
  
    marginTop:15
  },
  price: {
    color: 'rgb(248, 249, 249 )',
    fontFamily: '$gilroyNormal600',
    fontSize: '1.125rem',
  },
  button: {
    backgroundColor: '#00BCD4',
    borderRadius: 25.0,
    padding: 3.0,
  },





});

  

export default SelecProduc;