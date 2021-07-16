import React, { Component ,useState} from "react";
import {View, Text, StyleSheet,Switch,ImageBackground, Alert} from "react-native"; 
import {TextInput, Button, Avatar,Paragraph,Card,RadioButton} from "react-native-paper";
import {StackNavigationProp} from "@react-navigation/stack";
import axios, { AxiosResponse } from "axios";
import AppContext from "../../../context/AppContext";
import Switch1 from "../../../Components/Switch";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {ItemUser} from "../RegisterUsers"
import MyColors from "../../../color/MyColors";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Slider from '@react-native-community/slider';
import { black } from "react-native-paper/lib/typescript/styles/colors";
interface ServerResponsePutUser {
    serverResponse: ItemUser
  }

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
  
class UpdateClientsRegulars extends Component<MyProps, Mystate> {
    static contextType = AppContext;
    constructor(props: any) {
        super(props);
        this.state = {
           firtsname:"",lastname:"",email:"",telephone:"", state:"En Ruta",probability:100,zona:"",street:"",tipo:"Regular",mayorista:"off",idUser:"",isLoad:false, uriphoto:"", pathphoto:""
        }
    }
    componentDidMount(){
        var {changeUri} = this.context

        this.setState({
            firtsname: this.context.itemclient.firtsname,
            lastname: this.context.itemclient.lastname,
            email:this.context.itemclient.email,
            telephone: this.context.itemclient.telephone, 
            state: this.context.itemclient.state,
            probability: this.context.itemclient.probability,
            zona: this.context.itemclient.zona,
            street: this.context.itemclient.street,
            tipo:this.context.itemclient.tipo,
            mayorista:this.context.itemclient.mayorista,
            idUser:this.context.itemclient.idUser,
         

        })



        if(this.context.itemclient.uriphoto!="" && this.context.itemclient.uriphoto!=undefined) {
            changeUri("http://192.168.100.9:8000"+this.context.itemclient.uriphoto, false)
        } else {
            changeUri("",false)
        }
        
    }
    async checkandSendData() {
        var navigation:StackNavigationProp<any, any> = this.props.navigation;
        var {isLoadUriPhoto, uriphoto, IsInTheTelephone}=this.context
        //console.log(this.state);
        var auxiliar: string = this.context.userToken._id.toString()
        await this.setState({
            idUser: auxiliar
        })
        //console.log(this.state.idUser+" aquiiiiiiiiiiiiiii");
        var dataSend = {
            firtsname: this.state.firtsname,
            lastname: this.state.lastname,
            email: this.state.email,
            telephone: this.state.telephone,
            state: this.state.state,
            probability: this.state.probability,
            zona: this.state.zona,
            street: this.state.street ,
            tipo : this.state.tipo,
            mayorista: this.state.mayorista,
            idUser: this.state.idUser,
          
        }
        var result: any = await axios.put<ItemClient, AxiosResponse<any>>("http://192.168.100.9:8000/client/client/"+this.context.itemclient._id, dataSend)
        .then((response) => {
            return response.data;
        });
        console.log(result);
        if(!result.serverResponse.nModified){
             Alert.alert("No se pudo enviar datos, fallo algo")   
        } else{
        if (IsInTheTelephone) {
            console.log("entre hasta aqui")
            var data = new FormData();
            data.append("avatar", {
            name: "avatar.jpg", 
            uri: uriphoto, 
            type: "image/jpg"});
            console.log("http://192.168.100.9:8000/client/clientSendPhoto/" + this.context.itemclient._id)
            fetch("http://192.168.100.9:8000/client/clientSendPhoto/" + this.context.itemclient._id, {
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

                //navigation.push("ClientesRegulares");
                //this.modificarClienteEnUsuario();
                navigation.pop();
            });
            
        } else {
            //navigation.push("ClientesRegulares");
            //this.modificarClienteEnUsuario();
            navigation.pop();
        }
        

    }
        
    }

    async modificarClienteEnUsuario() {
        var result2: any = await axios.put<ItemClient, AxiosResponse<any>>("http://192.168.100.9:8000/api/removeclient/"+this.context.userToken._id, {idCli: this.context.itemclient._id})
        var result3: any = await axios.put<ItemClient, AxiosResponse<any>>("http://192.168.100.9:8000/api/addclient/"+this.context.userToken._id, {idCli: this.context.itemclient._id})
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
        if (this.context.uriphoto != "" && this.context.uriphoto !=undefined) {
            return <Avatar.Image size={150} source={{uri: this.context.uriphoto}} />
        } else {
            return <Avatar.Image size={150} source={require('../../../../assets/img/batman.png')} />
            
        }
    }
    Counter() {
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState);
       
      }

    async changevalueSlider(enable: number){
       await     this.setState({
          probability: enable,
      })
      console.log(this.state.probability+" slider")
    }
  render() {
    
    var value =this.state.mayorista
    var sliderInitial=this.state.probability
    
    
    console.log(this.context.userToken._id)
    return (
        <ImageBackground style={styles.container} source={require("../../../../images/fondo6.jpg")}>
        <KeyboardAwareScrollView style={{flex:1}}>
       
            <View style={styles.container2}>
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
                        <Text style={styles.datosin}>Regular              <Switch1></Switch1></Text>
                            
                        <Button style={styles.button2}  mode="contained" onPress={() => {
                            this.checkandSendData();
                        }}>
                            
            
                            Update
                        </Button>
                        </View>
                       
                       
                    </View>
                    <View style={styles.text}>
                            <TextInput style={styles.datos}
                            label="first name"
                            value={this.state.firtsname}
                            onChangeText={text => {  
                                this.setState({
                                    firtsname: text
                                })
                            }}/>
                            <TextInput style={styles.datos}
                            label="last name"
                            value={this.state.lastname}
                            onChangeText={text => {   
                                this.setState({
                                    lastname: text
                                })
                            }}/>
                            <TextInput style={styles.datos}
                            label="telephone"
                            value={this.state.telephone}
                            onChangeText={text => {   
                                this.setState({
                                    telephone: text
                                })
                            }}/>
                            <TextInput style={styles.datos}
                            label="email"
                            value={this.state.email}
                            onChangeText={text => {   
                                this.setState({
                                    email: text
                                })
                            }}/>

                        <TextInput style={styles.datos}
                            label="Zona"
                            value={this.state.zona}
                            onChangeText={text => {   
                            this.setState({
                                zona: text
                            })
                        }}/>

                        <TextInput style={styles.datos}
                            label="street"
                            value={this.state.street}
                            onChangeText={text => {   
                            this.setState({
                                street: text
                            })
                        }}/>
                        
                       
                    </View>

            </View>
            <View>

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
                    </View>
            <View >
                    
                       
                    <View >
                            
                        
                    </View>
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
    contcon: {
        
        marginTop: 250
        
        
    },
    datosin: {
       fontWeight:"bold"
       
        
    },
    buton: {
        marginTop: 20,
        borderRadius:70,
        
    },
    button2: {
        marginTop: 20,
        borderRadius:30,
        height:100,
        width: 150,
        justifyContent: "center",
        
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
        
      },
      containermap: {
        ...StyleSheet.absoluteFillObject,
        height: 250,
        width: 380,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop:20,
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
    
    
}   
);
export default UpdateClientsRegulars;