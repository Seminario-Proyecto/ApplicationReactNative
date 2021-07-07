import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native"; 
import MyColors from "../../color/MyColors";
import {Switch,Button,RadioButton } from "react-native-paper"
import ButtonRadio from "../../Components/ButtonRadio";



class  RegisterPedido extends Component {
    state = {  
        switchValue: true  
    };  
    
  
  render() {
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
                    <View >  
                        <Text style={style.textStyle}>Switch Example</Text>  
                        <Text style={style.textStyle}>{this.state.switchValue ? 'on' :'off'}</Text>  
                        <Switch  
                            value={this.state.switchValue}  
                            onValueChange ={(switchValue)=>this.setState({switchValue})}/>  
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
  
},
container4:{
  marginTop:30
},
  text:{
    fontSize:20,
    color:"#000080",
    fontFamily:"Times New Roman",
    paddingLeft:5,
    paddingRight:30,
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