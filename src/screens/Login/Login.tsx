import React, { Component } from "react";
import {View, Text, StyleSheet, Dimensions, Image, ImageBackground,ColorPropType, Touchable} from "react-native"; 
import {TextInput, Button, Avatar, RadioButton} from "react-native-paper";
import {NavigationScreenProp} from "react-navigation";
import Icons from "react-native-vector-icons/AntDesign";

const background = require('../../../images/desvanecido.png');
const {width: widthScreen, height: heightScreen} = Dimensions.get('window');


//<Image style={styles.backgroundImage} source={background}/>

interface MyProps {
    navigation: NavigationScreenProp<any,any>
}  
class Login extends Component <MyProps, any> {
    constructor(props: MyProps){
        super(props);
    }
    
    IndexClients() {
        
        this.props.navigation.navigate("IndexClients");
          
    }
    

  render() {
    return (

        <View style= {styles.container}>
        
        <Image style={styles.backgroundImage} source={background}/>
            <View style={styles.footer}>
            <Text style={styles.bien} ></Text>
          
        
            
                <TextInput style={styles.txtStyles} 
                label="Usuario"
                onChangeText={text => {  
                    this.setState({
                        username: text
                    })
                }}/>
                <TextInput style={styles.txtStyles} 
                label="Password"
                secureTextEntry
                right={<TextInput.Icon name="eye" />}
                />

                <Button   style={styles.boton}  mode="contained" onPress={() =>{this.IndexClients()}
                    
                }>
                    Ingresar
                </Button>
                </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        flex:1,
        
    },
    backgroundImage: {
        width: 420,
        height:750,
        opacity: 1, 
        
    },
    footer: {
        height: 350,
        width: 350,
        marginTop:150,
        position: "absolute",
      },
    txtStyles: {
        backgroundColor: "#FFFFFF70",
        marginTop: heightScreen * 0.018,
        borderRadius:15,
        
        
    },
   
  
    boton: {
       
        marginTop: heightScreen * 0.040,
        borderRadius:60,
        
     
    },
    bien: {
        fontSize: 30,
        marginTop: heightScreen * 0.005,
        fontFamily: '$gilroyMedium',
        marginLeft:90,
        height: 80,
        color: "#555555",
        fontWeight:"bold"
      
        
     
    }, 
    usu: {
       
        marginTop: heightScreen * 0.05,
       
        fontFamily: '$gilroyMedium',
        fontSize: 15,
     
    },
    logo: {
        alignSelf: 'center',
        marginTop: heightScreen * 0.05,
        marginBottom: heightScreen * 0.05,
        
        
       
        
      },
  
}   
);
export default Login;