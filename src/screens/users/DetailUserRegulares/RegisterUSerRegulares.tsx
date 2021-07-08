import React, { Component ,useState} from "react";
import {View, Text, StyleSheet,Switch,ImageBackground} from "react-native"; 
import {TextInput, Button, Avatar,Paragraph,Card,RadioButton} from "react-native-paper";
import {StackNavigationProp} from "@react-navigation/stack";
import axios, { AxiosResponse } from "axios";
import AppContext from "../../../context/AppContext";
import Switch1 from "../../../Components/Switch";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyColors from "../../../color/MyColors";


import { black } from "react-native-paper/lib/typescript/styles/colors";
interface ItemClient{
  _id: string;
  firtsname: string;
  lastname: string;
  email: string;
  telephone: string;
  descriptionphone?: string;
  uriphoto?: string; //aqui entrara la uri donde nos llevara a la imagen
  pathphoto?: string;
  state: string;
  probability: number;
  zona: string;
  street: string;
  tipo: string; //Regular o Potencial
  mayorista: string;
  registerdate: Date;
  idUser: string;

  isLoad:boolean;
  }
interface Mystate {
  _id: string;
  firtsname: string;
  lastname: string;
  email: string;
  telephone: string;
  descriptionphone?: string;
  uriphoto?: string; //aqui entrara la uri donde nos llevara a la imagen
  pathphoto?: string;
  state: string;
  probability: number;
  zona: string;
  street: string;
  tipo: string; //Regular o Potencial
  mayorista: string;
  idUser: string;

  isLoad:boolean;
}
interface MyProps {
    navigation: StackNavigationProp<any, any>
}
interface ServerResponsePutRoles {
    serverResponse: ItemClient
  }
  
class RegisterUsersPotenciales extends Component<MyProps, Mystate> {
    static contextType = AppContext;
    constructor(props: any) {
        super(props);
        this.state = {
           _id:"",firtsname:"",lastname:"",email:"",telephone:"",descriptionphone:"", state:"En Ruta",probability:0,zona:"",street:"",tipo:"Regular",mayorista:"off",idUser:"".toString(),isLoad:false
        }
    }
    async checkandSendData() {
        var navigation:StackNavigationProp<any, any> = this.props.navigation;
        console.log(this.state);
        this.setState({
            idUser: this.context.userToken._id
        })
        console.log(this.state.idUser+" aquiiiiiiiiiiiiiii");
        var result: any = await axios.post<ItemClient, AxiosResponse<any>>("http://192.168.100.9:8000/client/client", this.state)
        .then((response) => {
            return response.data;
        });
        console.log(result);
        if (this.state.isLoad) {
            var data = new FormData();
            data.append("avatar", {
            name: "avatar.jpg", 
            uri: this.state.uriphoto, 
            type: "image/jpg"});
            console.log("http://192.168.100.9:8000/client/clientSendPhoto/" + result.serverResponse._id)
            fetch("http://192.168.100.9:8000/client/clientSendPhoto/" + result.serverResponse._id, {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data"
                    //Authorization: this.context.userToken.token
                },
                body: data
            }).then((result) => {
                result.json();
            }).then((result) => {
                console.log(result);
                navigation.push("ClientesRegulares");
            });
            /*var result_img = await axios.post("http://192.168.0.106:8000/api/uploadportrait/" + result.serverResponse._id, data,{
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((response) => {
                return response.data;
            });
            navigation.push("list");
            //console.log(result_img);
            */
        } else {
            navigation.push("ClientesRegulares");
        }
        
        
    }
    
    changevalueRadio(values: string){
        console.log(values);
        this.setState({
            mayorista : values
        })
    }


    onTakePicture(path: string) {
        //console.log(path);
        this.setState({
            uriphoto: path,
            isLoad: true
        })
    }
   nuevo(max:boolean) {
        
            return false;
    }
    showAvatar() {
        if (this.context.uriphoto != "") {
            return <Avatar.Image size={150} source={{uri: this.context.uriphoto}} />
        } else {
            return <Avatar.Image size={150} source={require('../../../../assets/img/batman.png')} />
            
        }
    }
    Counter() {
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState);
       
      }
  render() {
    var value =this.state.mayorista
    
    return (
        <ImageBackground style={styles.container} source={require("../../../../images/fondoP.jpg")}>
        <KeyboardAwareScrollView style={{flex:1}}>
       
            <View style={styles.container2}>
                    <View style={styles.text}>
                            <TextInput style={styles.datos}
                            label="Nombres"
                            onChangeText={text => {  
                                this.setState({
                                    firtsname: text
                                })
                            }}/>
                            <TextInput style={styles.datos}
                            label="Apellidos"
                            onChangeText={text => {   
                                this.setState({
                                    lastname: text
                                })
                            }}/>
                            <TextInput style={styles.datos}
                            label="Contacto "
                            onChangeText={text => {   
                                this.setState({
                                    telephone: text
                                })
                            }}/>
                            <TextInput style={styles.datos}
                            label="Correo electronico "
                            onChangeText={text => {   
                                this.setState({
                                    email: text
                                })
                            }}/>
                    </View>

                    
                    
                    <View >
                        <Button style={styles.buton} icon="camera" mode="contained" onPress={() => {
                            //this.checkandSendData();
                            this.props.navigation.push("TakePictureRegulares", {onTake: (params: string) => {
                                this.onTakePicture(params);
                            }});
                        }}>
                            Tomar Foto
                        </Button>
                    
                        
                        
                       
                        <View style={styles.stylescommit} >

                                {this.showAvatar()} 
                        
                        </View>
                        <View style={styles.stylescommit}>
                        <Text style={styles.datosin} >Estado del cliente      off/on </Text>
                        <Text style={styles.datosin}>Potencial:                  <Switch1></Switch1></Text>
                            
                        <Text style={styles.datosin}>Probabilidad de negosiacion:</Text>
                        <Text style={styles.datosin}>80%</Text>
                        </View>
                       
                       
                    </View>

            </View>
            <View   style= {styles.container} >
                    
                        <Text style={styles.datosin}>Direcccion:</Text> 
                        <View style= {styles.maps}>

                            

                            {this.showAvatar()} 

                        </View>
                        <TextInput style={styles.datos}
                            label="zona"
                            onChangeText={text => {   
                            this.setState({
                                zona: text
                            })
                        }}/>

                    <TextInput style={styles.datos}
                            label="street"
                            onChangeText={text => {   
                            this.setState({
                                street: text
                            })
                        }}/>
                        
                        <Text style={{fontSize: 17, marginTop:20,fontWeight:"bold" }}>Tipo de Cliente </Text>
                      
                        <RadioButton.Group onValueChange={newvalue=>{
                                this.changevalueRadio(newvalue);
                                }} value={value} >
                                <View style={styles.buttoncontainer}>
                                <View style={styles.buttoncontainer2}>
                                <Text>Mayorista</Text>
                                <RadioButton value="Mayorista" />
                                </View>
                                <View style={styles.buttoncontainer2}>
                                <Text>Supermercado</Text>
                                <RadioButton value="Supermercado" />
                                </View>
                                <View style={styles.buttoncontainer2}>
                                <Text>Off</Text>
                                <RadioButton value="Off" />
                                </View>
                
                            </View>
                        </RadioButton.Group>
               
                     
                                
                        <Button style={styles.buton}  mode="contained" onPress={() => {
                            this.checkandSendData();
                        }}>
                            
            
                            Create
                        </Button>
            </View>
        
        </KeyboardAwareScrollView>
        </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        margin:3,
        backgroundColor:'rgb(255,255,255)',
        flex:1
            
        
    
        
    },
    container2: {
        flexDirection:"row"
        
        
    },
    stylescommit: {
        marginTop:15,
        alignItems: "center",
       
        
    },
    text: {
        width:200,
        padding: 5
        
        
    },
    datos: {
        
        marginTop: 10
        
        
    },
    datosin: {
       fontWeight:"bold"
       
        
    },
    buton: {
        marginTop: 20,
        borderRadius:70
        
    },
    maps: {
        marginTop: 40,
        marginRight:2,
        alignItems: "center",
        
        
    },
    Maps:{
        borderRadius: 10,
      },
    buttoncontainer:{
        flexDirection:"row",
        padding:4
        
        
      },
      buttoncontainer2:{
        alignContent:"center",
        marginLeft:10,
        padding:20
        
      }
    
}   
);
export default RegisterUsersPotenciales;