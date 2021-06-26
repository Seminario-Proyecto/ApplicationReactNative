import * as React from 'react';
import { Modal, Portal, Text, Button, Provider, TextInput } from 'react-native-paper';
import { View,TouchableHighlight ,StyleSheet, PointPropType} from 'react-native';
import Icons from "react-native-vector-icons/Feather"
import MyColors from "../color/MyColors";
const modal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const atras = () => setVisible(false);
  return (
    <Provider >
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View>
                        <Text style={{fontSize: 18, marginTop:20, fontFamily: "sans-serif-medium", marginLeft: 25, }}>Fecha (DD/MM/YYYY): </Text>        
                        
                              <View style={styles.fechas}>
                            
                                  <TextInput style={styles.fecha}
                                                      label="Dia"
                                                      onChangeText={text => {  
                                                          
                                                      }}/>

                                  <TextInput  style={styles.fecha}
                                                      label="Mes"
                                                      onChangeText={text => {  
                                                          
                                                      }}/>
                                  <TextInput style={styles.fecha}
                                                      label="Año"
                                                      onChangeText={text => {  
                                                          
                                                      }}/>
                              </View>
                              <Text style={{fontSize: 18, marginTop:5, fontFamily: "sans-serif-medium", marginLeft: 25, }}>Hora</Text>
                              <View style={styles.fechas}>

                                  <TextInput style={styles.fecha}
                                                          label="hora"
                                                          onChangeText={text => {  
                                                              
                                                          }}/>
                                  <TextInput style={styles.fecha}
                                                          label="min"
                                                          onChangeText={text => {  
                                                              
                                                          }}/>
                                    <View style={styles.atras}>
                                    <TouchableHighlight style={{borderRadius:20,
        }} onPress={
                                            atras
                                            }>
                                            
                                            <View style={styles.containerText2}>
                                            <View>
                                                <Icons name="watch" size={20} color={MyColors.lastcolor}/>
                                            </View>
                                            <Text style={styles.text2}>
                                                aceptar
                                            </Text>
                                            </View>
                                    </TouchableHighlight>
                                    </View>
                                    



                              </View>

                              
                    
                      </View>
        </Modal>
      </Portal>
      

                            <View  style={styles.set}>    
                                    <TouchableHighlight onPress={
                                            showModal
                                            }>
                                            
                                            <View style={styles.containerText2}>
                                            <View>
                                                <Icons name="watch" size={25} color={MyColors.lastcolor}/>
                                            </View>
                                            <Text style={styles.text2}>
                                                set
                                            </Text>
                                            </View>
                                    </TouchableHighlight>
                            </View> 
                  
    </Provider>
  );
};
const styles=StyleSheet.create({
    containerText2:{
        height: 40,
        width: 140,
        backgroundColor: MyColors.maincolor,
        alignItems:"center",
        borderRadius:10,
        elevation: 15,
        marginTop:0,
        flexDirection: "row",
        paddingLeft: 25,
        
      },
      text2: {
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 10,
        color: MyColors.lastcolor,
      },
      container: {
        flex: 1
      },
      fecha: {
        width:60,
        marginLeft:5
        
      },
      fechas: {
        flexDirection: "row",
        padding:20,
        marginTop:0,
        height:70
        
      },
      fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
    
      set: {
        marginLeft:15,
        marginTop:70,
        
      
        
      },
      fechayhora: {
        flexDirection: "row",
      },
      atras: {
        marginLeft:70,
        
        
      },
  });




export default modal;