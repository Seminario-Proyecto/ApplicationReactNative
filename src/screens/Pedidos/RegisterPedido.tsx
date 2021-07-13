import React, { Component } from "react";
import {View, Text, StyleSheet,Image} from "react-native"; 
import MyColors from "../../color/MyColors";

import {Switch,Button} from "react-native-paper"
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
                            Estado Deuda
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
                                    Productos
                    </Text>
                      <Button style={{height:60 }} icon="shoppingcart" mode="contained" onPress={() => console.log('Pressed')}>
                        Seleccionar Stock
                    </Button>
            </View>
            <View style={style.container4}>
                    <Text style={style.text}> 
                                    Metodo de Pago :
                    </Text>

                    <ButtonRadio></ButtonRadio>
            </View>
            <View style={style.container9}>
                <Image style={{width:100, height:200}} source={require('../../../images/pagarr.jpg')} />
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
container8:{
  marginTop:40,
  marginLeft:80
  
},
container9:{
 
  marginLeft:120
  
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