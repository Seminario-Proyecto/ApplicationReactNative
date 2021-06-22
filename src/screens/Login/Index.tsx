import React, { Component } from "react";
import {View, Text, StyleSheet, Dimensions, Image, ImageBackground,ColorPropType, TouchableHighlight} from "react-native"; 

import {TextInput, Button, Avatar, RadioButton} from "react-native-paper";
const {width: widthScreen, height: heightScreen} = Dimensions.get('window');
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
//const backgroundImage = require('./images/2.jpg');
const background = require('../../../images/nuevo.png');
const logo = require('../../../images/logo.png');
import {NavigationScreenProp} from "react-navigation";
//<Image style={styles.backgroundImage} source={background}/>
  
  interface IParams {
    onTake: Function
}
interface IRoute{
    params: IParams
}
interface MyProps {
    navigation: NavigationScreenProp<any,any>
    route: IRoute
}
    
class Regist extends Component <MyProps, any> {
  constructor(props:MyProps){
    super(props);
    
  }
    
  click() {
        
    this.props.navigation.navigate("Prelogin");
  
  }
    
  render() {
    return (
       
        <View style={styles.container}>
            <Image style={styles.backgroundImage} source={background}/>
            <View style={styles.footer}>
                
                <Image style={styles.backgroundLogo} source={logo}/>

                <TouchableHighlight  onPress={()=>{
                    this.click();
              }}>
                 
                <View style={styles.containerText2}>
                    <Text style={styles.text2}>
                        Sign Up
                    </Text>
                  </View>
              </TouchableHighlight>


                <Text style={styles.textend}>
                    Potosí - Bolivia
                </Text>
            </View>  
            
           

            
        </View>

        
        
     
        
  
)}
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flex: 1,
        justifyContent: "center",  
    },
    backgroundImage: {
        width: 420,
        height:750,
       
        opacity: 1 
      },

      backgroundLogo:{
        width: 174,
        height:203,
        marginBottom:30,
        transform: [  {rotateX: '0.6rad'}],
      },
      footer: {
        height: 180,
        width: 250,
        alignItems:"center",
        position: "absolute",
        
        
      },
      text: {
        fontSize: 25,
        color: "#ffffff",
        textAlign: "center",
        fontFamily: 'lucida grande',
        fontWeight: "bold"
       
      },

      containerText2:{
        height: 65,
        width: 200,
        backgroundColor: "#2471A3",
        opacity: 0.75, 
        alignItems:"center",
        justifyContent: "center",
        borderRadius:8,
        elevation: 15,
        flexDirection: "row",
        
        
        
      },
      text2: {
        fontSize: 40,
        color: "#ffffff",
        fontWeight: "bold"
        
      },

      textend:{
          color: "#000000",
          fontSize: 20,
          marginTop:110,
          fontWeight: "bold"
      }
  
    }   
);
export default Regist;