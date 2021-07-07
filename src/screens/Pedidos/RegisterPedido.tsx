import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native"; 
import MyColors from "../../color/MyColors";
import {Switch,Button,RadioButton } from "react-native-paper"
import ButtonRadio from "../../Components/ButtonRadio";


interface MyState{
  isEnable : boolean;
}



class  RegisterPedido extends Component<any,MyState> {
    constructor(props: any){
      super (props);
      this.state={
        isEnable: false
      }
    }
    
    
    changevalueSwitch(enable: boolean){
      this.setState({
        isEnable: !enable,
    })
    }
  
  render() {
    var enable = this.state.isEnable;
    return (
        <View style={style.container}>
            <View style={style.container2}>
                    <View >
                        <Text style={style.text} > 
                            hoy 10  de mayo 
                        </Text>
                        <Text style={style.text}> 
                            Pagado o a deuda
                        </Text>

                    </View>
                    <View>
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
  
container4:{
  marginTop:30
},
  text:{
    fontSize:20,
    color:"#000080",
    fontFamily:"Times New Roman",
    paddingLeft:5,
    
    textShadowColor:"#585858",
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
    marginVertical:4
    
  },
  textStyle:{  
    margin: 4,  
    fontSize: 14,  
    fontWeight: 'bold',  
    textAlign: 'center',  
    color: '#344953'  
}  
})
  

export default RegisterPedido;