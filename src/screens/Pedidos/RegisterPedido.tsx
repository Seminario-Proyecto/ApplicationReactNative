import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native"; 
import MyColors from "../../color/MyColors";
import {StackNavigationProp} from "@react-navigation/stack";
import {Switch,Button,RadioButton } from "react-native-paper"
import ButtonRadio from "../../Components/ButtonRadio";
import AppContext from "../../context/AppContext";
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
        <View style={style.container}>
            <View style={style.container2}>
                    <View style={style.container3}>
                        <Text style={style.text}> 
                            hoy 10  de mayo 
                        </Text>
                        <Text style={style.text}> 
                            Pagado o a deuda
                        </Text>

                    </View>
                    
                    <View  style={style.container5}>
                   
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
                                    Productos
                    </Text>
                      <Button style={{height:60 }} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                        Seleccionar Stock
                    </Button>
            </View>
            <View style={style.container4}>
                    <Text style={style.text}> 
                                    Metodo de Pago :
                    </Text>
            </View>

        </View>
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
  
    
    elevation: 15,
    flexDirection: "row",
    paddingLeft: 1,
  },
  container3:{
    
    marginTop:30,
   
    

},
container5:{
    
  marginTop:50,
  marginLeft:80,
  

  

},
container4:{
  marginTop:30
},
  text:{
    fontSize:15,
   
    
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