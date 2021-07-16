import React, { Component } from "react";
import {View, Text, StyleSheet,ImageBackground,TouchableOpacity,Image } from "react-native"; 
import MyColors from "../../color/MyColors";
import {} from "react-native"
class Recivo extends Component<any, any>{

  constructor(props: any) {
    super(props);
   
   
  }
  render() {
    return (
        <ImageBackground style={style.container} source={require("../../../images/recibo.jpg")}>
        <View style={style.container}>
            <Text style={style.text}> 
                        Recibo
            </Text>

                    <Text style={style.text2}> 
                                KENNY FABRICIO 
                    </Text>
            <View style={style.contes} >
            <View>
                    <Text style={style.text1}> 
                                Fecha:
                    </Text>
                    <Text style={style.text1}> 
                                Detalle:  
                    </Text>
                    <Text style={style.text1}> 
                             
                    </Text>
                    <Text style={style.text1}> 
                             
                    </Text>
                    <Text style={style.text1}> 
                           
                    </Text>
            </View>
            <View>

                    <Text style={style.text1}> 
                                 14 de julio de 2021
                    </Text>
                    <Text style={style.text1}> 
                                Vino Kolve  1 x 27  = 27
                                 
                    </Text>
                    <Text style={style.text1}> 
                          
                                Casa Real   57 x 50 = 2850   
                    </Text>
                    <Text style={style.text1}> 
                             --------------------------
                    </Text>
                    <Text style={style.text1}> 
                          
                                          TOTAL =2877  
                    </Text>
            </View>
            </View>
            
            <Text style={style.text3}> 
                           Te enviamos  el recibo !
            </Text>

            <View style={style.contes2} >
                <View >
            <TouchableOpacity onPress={()=>{
                            this.props.navigation.push("SelecProduc")
                              }}>
                            
                            
                            <View>
                                <Image   source={require('../../../images/gmail.png')}  />
                               
                            </View>
                              
                              
            </TouchableOpacity>
            </View>
            <View style={style.contes4}>
            <TouchableOpacity onPress={()=>{
                            this.props.navigation.push("SelecProduc")
                              }}>
                            
                            
                            <View>
                                <Image   source={require('../../../images/wass.png')}  />
                               
                            </View>
                              
                              
            </TouchableOpacity>
            </View>
            </View>
            </View>
        
        </ImageBackground>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
  },
  contes:{
    flexDirection: "row",
    marginLeft:"10%"
  },
  contes2:{
    flexDirection: "row",
    marginLeft:"30%",
    marginTop:20
  },
  contes4:{
    flexDirection: "row",
    marginLeft:"20%"
  },
  text:{
    color : MyColors.maincolor,
    marginLeft:"40%",
    marginTop:"10%",
    fontSize: 30,
    
    fontFamily: '$gilroyMedium',
   
    height: 80,
  
    fontWeight:"bold"
    

    
  },
  text1:{
    color : MyColors.maincolor,
  
    marginTop:"1%",
    fontSize: 18,
    
    fontFamily: '$gilroyMedium',
   
  
  
    fontWeight:"bold"
    

    
  },text2:{
    color : MyColors.maincolor,
    marginLeft:"30%",
    marginTop:"1%",
    fontSize: 18,
    
    fontFamily: '$gilroyMedium',
   
    height: 30,
  
    fontWeight:"bold",
    alignItems:"center"
    

    
  },
  text3:{
    color : MyColors.maincolor,
    marginLeft:"25%",
    marginTop:"10%",
    fontSize: 18,
    
    fontFamily: '$gilroyMedium',
   
    height: 30,
  
    fontWeight:"bold",
    alignItems:"center"
    


  }

  
})
  

export default Recivo;