/*import React ,{Component}from 'react';
import {View, Dimensions,TouchableOpacity,Image,Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Header from '../../../components/Header';
import SearchBar from '../../../components/SearchBar';

import ImageTest from '../../../../assets/images/product_categories/bakery.png';
import { StackNavigationProp } from '@react-navigation/stack';
const {width: widthScreen, height: heightScreen} = Dimensions.get('screen');
interface ExploreTabProps {
  navigation: any;
}




interface MyState{
  isEnable: boolean;
  open: boolean,
 
}


interface MyProps {
  navigation: StackNavigationProp<any, any>
}

class Reports extends Component<MyProps, MyState> {

  
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
   
  ];

  return (
    <ScrollView style={styles.container}>
      <Header title="Find Products" />
      <View style={styles.searchBarBox}>
        <SearchBar navigation={this.props.navigation.navigate} navigateTo="" />
      </View>
      <View style={styles.body}>
        <FlatList
          data={ui_array}
          keyExtractor={(item) => item.id}
          scrollEnabled={true}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => null} style={[
                styles.card,
                {backgroundColor: "#F00", borderColor: "#0F0"},
              ]}>
                <Image style={styles.image} source={ImageTest} />
                <Text style={styles.text}>{"Teste"}</Text>
           
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.scrollFooter} />
    </ScrollView>
  );
}}

const styles = EStyleSheet.create({
  container: {
    width: widthScreen,
    minHeight: heightScreen,
    backgroundColor: '$whiteColour',
  },
  searchBarBox: {
    paddingHorizontal: 25.0,
    marginBottom: 20.0,
  },
  body: {
    paddingHorizontal: 17.5,
  },
  scrollFooter: {
    marginBottom: heightScreen * 0.15,
  },
});

export default {component: Reports, name: 'Reports'};
*/
/*
import React, { Component } from "react";
import {Text, View, ScrollView, Dimensions, Image,} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigationProp } from '@react-navigation/stack';


import SearchBar from '../../Components/SearchBar';
import SectionTitle from './SectionTitle';
import FoodCard from '../../Components/FoodCard';

const {width: widthScreen, height: heightScreen} = Dimensions.get('window');
interface MyProps {
  navigation: StackNavigationProp<any, any>
}

class Reports  extends Component<any, MyProps> {
  constructor(props: any) {
    super(props);
   
  }
  render() {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image  
          source={require('../../../images/logo-colour.png')}
        
         />

        <View style={styles.locationBox}>

          <Image 
          source={require('../../../images/logo7.png')}
        
         />


  
          <Text style={styles.locationText}>Dhaka, madhelem</Text>
        </View>
      </View>
      <View style={[styles.localBox, styles.searchBox]}>
        <SearchBar navigation={this.props.navigation.navigate} navigateTo="search-page" />
      </View>
      <View style={styles.localBox}>
      <Image 
          source={require('../../../images/banner.png')}
        
        />

      
      </View>
      <View style={styles.localBox}>
        <SectionTitle
          navigation={this.props.navigation.navigate}
          title="Exclusive Offer"
          linkPage=""
        />
      </View>
      <ScrollView style={styles.horizontalScroll} horizontal={true}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <View style={styles.localBox}>
        <SectionTitle
          navigation={this.props.navigation.navigate}
          title="Best Selling"
          linkPage=""
        />
      </View>
      <ScrollView style={styles.horizontalScroll} horizontal={true}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <View style={styles.localBox}>
        <SectionTitle navigation={this.props.navigation.navigate} title="Groceries" linkPage="" />
      </View>
      <ScrollView style={styles.horizontalScroll} horizontal={true}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <View style={styles.scrollFooter} />
    </ScrollView>
  );

  }}

const styles = EStyleSheet.create({
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
});

export default Reports */

import React ,{Component} from 'react';
import {View, Dimensions,TouchableOpacity,Image,Text,ImageBackground } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import SearchBar from '../../Components/SearchBar';

import { StackNavigationProp } from '@react-navigation/stack';
const {width: widthScreen, height: heightScreen} = Dimensions.get('screen');
interface ExploreTabProps {
  navigation: any;
}




interface MyState{
  isEnable: boolean;
  open: boolean,
 
}


interface MyProps {
  navigation: StackNavigationProp<any, any>
}

class Reports extends Component<MyProps, MyState> {

  
  constructor(props: any) {
    super(props);
    this.state={
      isEnable: false,
      open: false,
      
    }
   
  }
  render() {

  return (
    <ImageBackground style={styles.container} source={require("../../../images/fondo6.jpg")}>
    
      
      <View style={styles.body}>
            <View style={[styles.localBox, styles.searchBox]}>
            <SearchBar navigation={this.props.navigation.navigate} navigateTo="search-page" />
             </View>
            <View  style= {styles.container2}>
            
              <View>
     
              <TouchableOpacity  onPress={() => {
                this.props.navigation.push("clicap");
            }}   
             style={[
                styles.card,
                {backgroundColor: "#053742", borderColor: "#00FFFF"},
              ]}>
                 <Image style={styles.image}
               source={require('../../../images/cli.png')}
        
                 />
               
                <Text style={styles.text}>{"Clientes Captados"}</Text>
           
              </TouchableOpacity>
              <TouchableOpacity 
              
              onPress={() => {
                this.props.navigation.push("clientPoten");
              }}
              style={[
                styles.card,
                {backgroundColor: "#053742", borderColor: "#00FFFF"},
              ]}>
                <Image style={styles.image}
               source={require('../../../images/po.png')}
        
                 />
               
                <Text style={styles.text}>{"Clientes Potenciales"}</Text>
           
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.push("producVendi")}} style={[
                styles.card,
                {backgroundColor: "#053742", borderColor: "#00FFFF"},
              ]}>
                 <Image style={styles.image}
               source={require('../../../images/ve.png')}
        
                 />
               
            
                <Text style={styles.text}>{"Productos Vendidos"}</Text>
           
              </TouchableOpacity>
              </View>
              <View>

              <TouchableOpacity onPress={() => {this.props.navigation.push("pedidoAcomodado")}} style={[
                styles.card,
                {backgroundColor: "#053742", borderColor: "#00FFFF"},
              ]}>

              <Image style={styles.image}
               source={require('../../../images/pe.png')}
        
                 />
               
              
                <Text style={styles.text}>{"Pedidos Acomodados"}</Text>
           
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.push("Negociaciones")}} style={[
                styles.card,
                {backgroundColor: "#053742", borderColor: "#00FFFF"},
              ]}>
                 <Image style={styles.image}
               source={require('../../../images/ne.png')}
        
                 />
               
                <Text style={styles.text}>{"Negociaciones"}</Text>
           
              </TouchableOpacity>



              </View>
              </View>
            
      </View>
      <View style={styles.scrollFooter} />
  
    </ImageBackground>
  );
}}

const styles = EStyleSheet.create({
  container: {
    width: widthScreen,
    minHeight: heightScreen,
    backgroundColor: '$whiteColour',
  },
  container2: {
    flexDirection:"row",
    marginTop:30
        
  },
  localBox: {
    paddingHorizontal: 25.0,
  },
  searchBox: {
    marginTop: 20.0,
  },
  searchBarBox: {
    paddingHorizontal: 25.0,
    marginBottom: 20.0,
  },
  body: {
    paddingHorizontal: 17.5,
  },
  scrollFooter: {
    marginBottom: heightScreen * 0.15,
  },
  card: {
    width: widthScreen * 0.42,
    height: heightScreen * 0.21,
    borderWidth: 4.0,
    marginHorizontal: 7.5,
    marginBottom: 15.0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 18.0,
    borderColor: "#39A2DB",
    padding: 15.0,
  },
  image: {
    height:90,
    width:100
  },
  text: {
    color: '$whiteColour',
    fontFamily: '$gilroyNormal600',
    fontSize: '1rem',
    letterSpacing: 0.1,
  },
});

export default Reports;




