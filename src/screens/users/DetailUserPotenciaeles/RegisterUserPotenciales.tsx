import React, { Component ,useState} from "react";
import {View, Text, StyleSheet,Switch} from "react-native"; 
import {TextInput, Button, Avatar} from "react-native-paper";
import {StackNavigationProp} from "@react-navigation/stack";
import axios, { AxiosResponse } from "axios";
import AppContext from "../../../context/AppContext";
import Switch1 from "../../../Components/Switch";

interface ItemUser{
    username?: string,
    email?: string,
    password?: string,
    repassword?: string
  }
interface Mystate {
    username: string,
    email: string,
    password: string,
    repassword: string,
    isload: boolean,
    pathImg?: string
}
interface MyProps {
    navigation: StackNavigationProp<any, any>
}
class RegisterUsersPotenciales extends Component<MyProps, Mystate> {
    static contextType = AppContext;
    constructor(props: any) {
        super(props);
        this.state = {
            isload: false,
            username: "", email: "", password: "", repassword:""
        }
    }
    async checkandSendData() {
        var navigation:StackNavigationProp<any, any> = this.props.navigation;
        console.log(this.state);
        if (this.state.password != this.state.repassword) {
            return;
        }
        var result: any = await axios.post<ItemUser, AxiosResponse<any>>("http://192.168.100.9:8000/api/users", this.state)
        .then((response) => {
            return response.data;
        });
        console.log(result);
        if (this.state.isload) {
            var data = new FormData();
            data.append("avatar", {
            name: "avatar.jpg", 
            uri: this.state.pathImg, 
            type: "image/jpg"});
            console.log("http://192.168.100.9:8000/api/uploadportrait/" + result.serverResponse._id)
            fetch("http://192.168.100.9:8000/api/uploadportrait/" + result.serverResponse._id, {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                body: data
            }).then((result) => {
                result.json();
            }).then((result) => {
                console.log(result);
                navigation.push("list");
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
        }
        
    }
    onTakePicture(path: string) {
        //console.log(path);
        this.setState({
            pathImg: path,
            isload: true
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
    return (
        <View style= {styles.container}>
            <View style={styles.container2}>
                    <View style={styles.text}>
                            <TextInput style={styles.datos}
                            label="Nombres"
                            onChangeText={text => {  
                                this.setState({
                                    username: text
                                })
                            }}/>
                            <TextInput style={styles.datos}
                            label="Apellidos"
                            onChangeText={text => {   
                                this.setState({
                                    email: text
                                })
                            }}/>
                            <TextInput style={styles.datos}
                            label="Contacto "
                            onChangeText={text => {   
                                this.setState({
                                    password: text
                                })
                            }}/>
                            <TextInput style={styles.datos}
                            label="Correo electronico "
                            onChangeText={text => {   
                                this.setState({
                                    repassword: text
                                })
                            }}/>
                    </View>

                    
                    
                    <View >
                        <Button style={styles.buton} icon="camera" mode="contained" onPress={() => {
                            //this.checkandSendData();
                            this.props.navigation.push("TakePicturePotenciales", {onTake: (params: string) => {
                                this.onTakePicture(params);
                            }});
                        }}>
                            Tomar Foto
                        </Button>
                    
                       
                        <View style={styles.stylescommit}>
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
                                
                        <Button style={styles.buton}  mode="contained" onPress={() => {
                            this.checkandSendData();
                        }}>
            
                            Create
                        </Button>
            </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        margin:3,
    
        
    },
    container2: {
        flexDirection:"row"
        
        
    },
    stylescommit: {
        marginTop:10
        
        
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
    
}   
);
export default RegisterUsersPotenciales;