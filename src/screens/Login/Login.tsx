

import React, { Component } from "react";
import {View, Text, StyleSheet, Dimensions, Image, ImageBackground,ColorPropType, Touchable, Alert} from "react-native"; 
import {TextInput, Button, Avatar, RadioButton} from "react-native-paper";
import {NavigationScreenProp} from "react-navigation";
import Icons from "react-native-vector-icons/AntDesign";
import axios, { AxiosResponse } from "axios";
import AppContext from "../../context/AppContext";
import { Types } from "../../context/ContantTypes";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firebase from  "./../../firebase"
const background = require('../../../images/desvanecido.png');

const {width: widthScreen, height: heightScreen} = Dimensions.get('window');


//<Image style={styles.backgroundImage} source={background}/>

interface DateUsers {
    _id: string,
    username: string,
    //email:string,
    password: string,
    token: string,
    tipo: string,
}
interface ServerResponse {
    serverResponse:Array<DateUsers>
}

interface ItemData {
    item: DateUsers
}
interface MyState {
    //username: string,
    email: string,
    password: string,
    //visible: boolean,
}
export interface IGoogleUser {
    photo: string
    email: string
    familyName?: string
    givenName: string
    name: string
    id: string
  }




interface MyProps {
    navigation: NavigationScreenProp<any,any>
}  
class Login extends Component <MyProps, MyState> {
    static contextType = AppContext;
    constructor(props: MyProps){
        super(props);
        this.state={

             password: "", email:""
             //,visible: true

        }
    }

    /*onGoogleButtonPress() {
            
        
        // Get the users ID token
        return new Promise(async (resolve, reject) => {
          console.log("Login");
          const {user } = await GoogleSignin.signIn();
          resolve(user);
        });
        
      }*/


     /* async  onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = firebase.getApp().auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return firebase.getApp().auth().signInWithCredential(googleCredential);
      }*/

    /*componentDidMount() {
        GoogleSignin.configure({
          webClientId: '46510480196-keceja0914bpqcko6a271qo2pna6jfi8.apps.googleusercontent.com',
        });
      }*/

      /*loginGoogle(){
          this.onGoogleButtonPress();
      }*/
    /*async loginGoogle() {
        var data: any = await this.onGoogleButtonPress();
        var userdata: IGoogleUser = data;
        console.log(userdata)
        var {loginGoogle, serverErrorMessages} = this.context;
        loginGoogle(userdata, (result: Boolean) => {
            if (result) {
                this.props.navigation.navigate("main");
            } else {
                Alert.alert("Error", serverErrorMessages);
            }
        });
        console.log(userdata);
    }
*/
onGoogleButtonPress() {
    // Get the users ID token
    return new Promise(async (resolve, reject) => {
      console.log("Login");
      const { idToken, user } = await GoogleSignin.signIn();
      resolve(user);
    });
    
  }
  componentDidMount() {
    GoogleSignin.configure({
      webClientId: '46510480196-keceja0914bpqcko6a271qo2pna6jfi8.apps.googleusercontent.com',
    });
  }
  async loginGoogle() {
    var data: any = await this.onGoogleButtonPress();
    var userdata: IGoogleUser = data;
    console.log(userdata)
    var {loginGoogle} = this.context;
    loginGoogle(userdata, (result: Boolean) => {
        if (result) {
            this.IndexClients()
           //this.props.navigation.navigate("IndexClients");
           console.log("Ver error ")
        } else {
            Alert.alert("Error");
        }
    });
    console.log(userdata);
  }

    
    IndexClients() {
        
        this.props.navigation.navigate("IndexClients");
          
    }

    IndexClientsVendedor() {
        this.props.navigation.navigate("IndexClientsVendedor");
    }

    /*
    async DataSend() {
        const {dispatch} = this.context;
        console.log(this.state);
        var result: any = await axios.post<DateUsers, AxiosResponse<any>>("http://192.168.100.9:8000/api/login", this.state)
        .then((response) => {
            return response.data;
        });
        if(result.serverResponse._id == undefined){
            Alert.alert("error")
        }else {
            dispatch({type: Types.SIGN_IN, payload: true})
            dispatch({type: Types.RESTORE_TOKEN , payload: result.serverResponse})
            var res: any = await axios.get<ServerResponse>("http://192.168.100.9:8000/api/users/"+result.serverResponse._id.toString()).then((response)=>{
                return response.data
            })
            dispatch({type: Types.CHANGEITEMUSER, payload: res})


            var tipoUsuario: string = this.context.userToken.tipo.toString();
            console.log(" aqui "+tipoUsuario)

            if (tipoUsuario.toLowerCase()=="vendedor"){
                this.IndexClientsVendedor();
            } else{
                this.IndexClients();
            }
            
        }










        console.log(result.serverResponse._id+" "+result.serverResponse.username+ " "+result.serverResponse.token)
        
    }*/
    /*validar() {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log(this.state.email.toString());
        if (!reg.test(this.state.email.toString())){
            console.log("entrando");
            this.setState.username
            var aux2 = (()=>{this.setState({email:""})}) ;
        }
        console.log(aux+" "+aux2)
        console.log(reg.test(this.state.email.toString()));
           
    }*/
    /*async loginGoogle() {
        var data: any = await this.onGoogleButtonPress();
        var userdata: IGoogleUser = data;
        console.log(userdata)
        var {loginGoogle, serverErrorMessages} = this.context;
        loginGoogle(userdata, (result: Boolean) => {
            if (result) {
                this.props.navigation.navigate("main");
            } else {
                Alert.alert("Error", serverErrorMessages);
            }
        });
        console.log(userdata);
      }*/

  render() {
    return (

        <View style= {styles.container}>
        
        <Image style={styles.backgroundImage} source={background}/>
            <View style={styles.footer}>
            <Text style={styles.bien} ></Text>
          
        
            
                <TextInput style={styles.txtStyles} 
                label="Username o Email"
                onChangeText={text => {  
                    this.setState({
                        email:text,
                       
                    })
                }}/>
                <TextInput style={styles.txtStyles} 
                label="Password"
                secureTextEntry

                //={this.state.visible}

                onChangeText={text => {  
                    this.setState({
                        password: text
                    })
                }}

            
                right={<TextInput.Icon name="eye" 
                
                //onPress= {()=>
                //this.setState({
                   // visible: !this.state.visible)}}
                   
                   />}

                />

                <Button   style={styles.boton}  mode="contained" onPress={() =>{
                    
                    //this.validar() //validamos si es un correo electronico lo que esta mandando, sino es un correo electronico se envia como "" 
                    //
                    //this.DataSend();
                    this.IndexClients()
                }
                    
                }>
                    Ingresar
                
                </Button>


                <Button icon="google" style={styles.marginTop}  mode="contained" onPress={() => {
                    this.loginGoogle();
                 }}>
                Ingresa con cuenta Google
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
      marginTop: {
        marginTop: 10,
        borderRadius:60,
      }
  
}   
);
export default Login;




