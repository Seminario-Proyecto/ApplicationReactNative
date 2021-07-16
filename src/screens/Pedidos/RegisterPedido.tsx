import React, { Component } from "react";
import {View, Text, StyleSheet,Image,ImageBackground,TouchableOpacity, TouchableHighlight } from "react-native"; 
import MyColors from "../../color/MyColors";
import { StackNavigationProp } from '@react-navigation/stack';
import {Switch,Button} from "react-native-paper"
import ButtonRadio from "../../Components/ButtonRadio";
import AppContext from "../../context/AppContext";
import Icons from "react-native-vector-icons/Feather"
interface MyState{
  isEnable: boolean;
  open: boolean,
 
}
class  RegisterPedido extends Component<any, MyState>{
  static contextType = AppContext;
  
  constructor(props: any) {
    super(props);
    this.state={
      isEnable: false,
      open: false,
      
    }
   
  }
     
    
    changevalueSwitch(enable: boolean){
      this.setState({
        isEnable: !enable,
    })
    }
  
  render() {
    var enable: boolean = this.state.isEnable; 
    return (
      <ImageBackground style={style.container} source={require("../../../images/fondo8.jpg")}>
        <View style={style.container}>
            <View style={style.container2}>

                    <View >
                        <Text style={style.text} > 
                            Hoy  8  de julio 

                        </Text>
                        <Text style={style.text}> 
                            Pagado o a deuda
                        </Text>

                    </View>

                    <View style={style.container8}>
                    <Text > 
                           Ordenar pedido
                        </Text>
                      <Switch
                            trackColor={{ false: MyColors.thirth, true: "#81b0ff" }} //colores cuando se apaga
                            thumbColor={enable ? MyColors.secondary : MyColors.thirth} //colores cuando se prende
                            //ios_backgroundColor="#3e3e3e"
                            value={enable}
                            
                            onValueChange={()=>{
                                this.changevalueSwitch(enable);
                            }}
                            
                          />

                    </View>
                                  

                    
            </View>
            <View style={style.container4}>
                    <Text style={style.text}> 
                                    Productos:
                    </Text>
                      
                    <TouchableOpacity onPress={()=>{
                            this.props.navigation.push("SelecProduc")
                              }}>
                            
                            <View style={style.containerText2}>
                            <View>
                                <Image  source={require('../../../images/produc.png')} />
                               
                            </View>
                              <Text style={style.text2}>
                                  Seleccionar Stock
                              </Text>
                              </View>
                          </TouchableOpacity>




            </View>
            <View style={style.container4}>
                    <View>
                        <Text style={style.text}> 
                                        Metodo de Pago :
                        </Text>
                    </View>
                    <View style={style.container9}>
                      <Image  source={require('../../../images/tarjeta.png')} />
                    </View>
                    

                    
            </View>
          
            <ButtonRadio></ButtonRadio>
            <TouchableOpacity onPress={()=>{
                            this.props.navigation.push("Recibo")
                              }}>
                            
                            <View style={style.containerText21}>
                            <View>
                                <Image  source={require('../../../images/crearp.png')} />
                               
                            </View>
                              <Text style={style.text2}>
                                  Crear Pedido
                              </Text>
                              </View>
            </TouchableOpacity>

        </View>
        </ImageBackground>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
  },
  container2:{
    height: 70,
    width: 200,
    //backgroundColor: MyColors.thirth,
  
    
    //elevation: 15,
    flexDirection: "row",
    paddingLeft: 1,
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    color: MyColors.lastcolor,
  },
  container3:{
    
    marginTop:30,
   
    

},
container5:{
    
  marginTop:50,
  marginLeft:80,
  

  

},
containerText2:{
  height: 60,
  width: 260,
  backgroundColor: MyColors.secondary,
  alignItems:"center",
  marginLeft:20,
  //elevation: 15,
  borderBottomRightRadius:20,
  
  borderTopRightRadius:20,
  
  flexDirection: "row",
  
  
},
containerText21:{
  height: 60,
  width: 220,
  backgroundColor: MyColors.maincolor,
  alignItems:"center",
  marginLeft:100,
  //elevation: 15,

borderTopRightRadius:20,
  borderTopLeftRadius:20,
  marginTop:140,
  
  flexDirection: "row",
  
  
},
container4:{
  marginTop:30,
  flexDirection: "row",
},
container8:{
  marginTop:40,
  marginLeft:80
  
},
container9:{
 
  marginLeft:20,
  marginTop:0
  
},
  text:{
    fontSize:18,
    
    fontWeight: "bold",
  marginLeft:20,
  marginTop:20
  },
  textStyle:{  
  
},
containero:{
  alignContent:"center",
  marginLeft:10,
  padding:20
  
}


})
  

export default RegisterPedido;