


import React, { Component } from "react";
import {View, Text, StyleSheet, Alert, FlatList, TouchableHighlight} from "react-native";
import AppContext from "../../../context/AppContext";
import Icons from "react-native-vector-icons/Feather"
import MyColors from "../../../color/MyColors";
import {IRoles, ItemUser} from "../TopTab/ClientsRegulars"
import { Avatar, Button, Card, Title, Paragraph, FAB , Chip, Searchbar, List, Switch} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from "axios";
import {Types} from "../../../context/ContantTypes"; 
import { Value } from "react-native-reanimated";
import Switch1 from "../../../Components/Switch";
import Fabgr from "../../../Components/FabGroup";
import RadioButton  from "../../../Components/ButtonRadio1"



interface ServerResponsePutRoles {
  serverResponse: ItemUser
}

class DetailUsersAgenda extends Component<any, any> {
  static contextType = AppContext;
  
  constructor(props: any) {
    super(props);
   
  }
  async componentDidMount() {
    
  }
  

 
  render() {
    var itemuser: ItemUser = this.context.itemuser;
    return (
      <KeyboardAwareScrollView style={{flex:1}}>
          <View style={styles.container}>
              <View> 
                <Card >
                  <View style= {styles.Cabecera} >
                    
                      <View style={styles.contacto}>
                        <Text style={styles.textoCabecera1}>Reunion dentro de 3 horas: </Text>
                        
                        <Text style={styles.textoCabecera2}>{itemuser.username}</Text>
                     
                        <Text style={styles.textoCabecera1}>Reunion Agendada para el :
                        </Text>
                        <Text style={styles.textoCabecera2}>3 de Mayo a las  15:00pm</Text>
                        
                        <View style={styles.containerText4}>
                          <TouchableHighlight onPress={()=>{
                            //this.click();
                              }}>
                            
                            <View style={styles.containerText3}>
                                <View>
                                    <Icons name="book-open" size={20} color={MyColors.lastcolor}/>
                                </View >
                                  <Text style={styles.text2}>
                                      Reprogramar 
                                  </Text>
                              </View>
                          </TouchableHighlight>

                        

                          
                        </View>

                        
                        
                      </View>
                      
                  </View>
                  

                    <Card.Content style={{marginTop: 4}}>    
                        <Paragraph style={{fontSize: 18, marginTop:5, fontFamily: "sans-serif-medium", marginLeft: 25,}}>Dirección</Paragraph>      
                        <Card.Cover style={styles.Maps} source={{ uri: 'http://192.168.100.9:8000' + itemuser.uriavatar }} />    
                    </Card.Content>
                    <View style={styles.containeer4}>
                        <TouchableHighlight onPress={()=>{
                                //this.click();
                                }}>
                                
                                <View style={styles.containerText2}>
                                <View>
                                    <Icons name="phone-call" size={25} color={MyColors.lastcolor}/>
                                </View>
                                <Text style={styles.text2}>
                                    Llamar
                                </Text>
                                </View>
                        </TouchableHighlight>
                    </View>
                            
                    <Text style={{fontSize: 18, marginTop:20, fontFamily: "sans-serif-medium", marginLeft: 25, }}>Resultados de La Reunion: {itemuser.username}</Text>        
                    <RadioButton></RadioButton>
                        
                      <FAB
                            style={styles.fab}
                          small={false}
                          icon="gesture-tap-button"
                          label="Guardar"
                          onPress={() => {
                              this.props.navigation.push("RegisterUsers");
                          }}
                        />
               

                
                          
                        
                        
                            

                         
                  </Card>


                  </View>
                
                
            
          </View>

          

          

          
        </KeyboardAwareScrollView>
        
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1
  },
  fab: {
    position:'absolute',
    margin: 14,
    
    right: 0,
    bottom: -5,
  },
  cardViewContainer: {
    marginTop: 10
  },
  /*chipContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap:"wrap"
  },*/
  Cabecera:{
    
  },
  images:{
    width: 150,
    height: 170,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 20,
  },
  contacto:{
    marginTop: 20,
    marginLeft: 20,
  },
  textoCabecera1: {
      fontSize: 18,
      textAlign:"justify",
      fontFamily: "sans-serif-medium", 
      
  },
  textoCabecera2: {
    marginTop: 10,
    fontSize: 20,
    textAlign: "center"
  },
  textoCabecera3: {
    fontSize: 15,
    textAlign:"center",
    marginBottom:20,
  },
  containerText2:{
    height: 50,
    width: 160,
    backgroundColor: MyColors.maincolor,
    alignItems:"center",
    
    elevation: 15,
    
    flexDirection: "row",
    paddingLeft: 25,
    
  },
  containerText3:{
   
    backgroundColor: MyColors.maincolor,
    alignItems:"center",
    flex:1,
    elevation: 10,
    borderRadius:40,
    flexDirection: "row",
    paddingLeft: 90,
    width:350,
    marginTop:20,
 
    height: 30
    
  

    
  },
  containerText4:{
 
        flex:1
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    color: MyColors.lastcolor,
  },
  containeer4:{
    alignItems:"center",
    marginTop:10
  },
  segundaCabecera:{
    marginTop: 20,
    fontSize: 20,
    fontFamily: "sans-serif-medium",
    textAlign: "center",
  },
  TerceraCabecera:{
    marginTop: 10,
    fontSize: 20,
    fontFamily: "sans-serif-medium",
    textAlign: "center",
  },
  Maps:{
    borderRadius: 10,
  },
  enRuta:{
    marginTop: 10,
    flexDirection: "row"
  },
  suich:{
    marginRight: 40,
  },
  switch:{
    fontSize: 50,
  }


});




export default DetailUsersAgenda;
