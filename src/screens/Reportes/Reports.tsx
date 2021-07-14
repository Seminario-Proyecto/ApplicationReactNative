
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

export default Reports 