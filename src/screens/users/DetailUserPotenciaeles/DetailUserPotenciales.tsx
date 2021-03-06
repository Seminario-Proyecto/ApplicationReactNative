import React, { Component } from "react";
import {View, Text, StyleSheet, Alert, FlatList, TouchableHighlight, Linking,ImageBackground} from "react-native";
import AppContext from "../../../context/AppContext";
import Icons from "react-native-vector-icons/Feather"
import MyColors from "../../../color/MyColors";
import {IRoles, ItemUser, IClients} from "../TopTab/ClientsRegulars"
import { Avatar, Button, Card, Title, Paragraph, FAB , Chip, Searchbar, List, Switch,Portal, Provider as ProviderFAB} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from "axios";
import {Types} from "../../../context/ContantTypes"; 
import { Value } from "react-native-reanimated";
import Switch1 from "../../../Components/Switch";
import Fabgr from "../../../Components/FabGroup";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {StackNavigationProp} from "@react-navigation/stack";


interface MyState{
  isEnable: boolean;
  open: boolean,
  
}


interface ServerResponsePutRoles {
  serverResponse: IClients
}

interface MyProps {
  navigation: StackNavigationProp<any, any>
}

class DetailUsersPotenciales extends Component<MyProps, MyState> {
  static contextType = AppContext;
  
  constructor(props: any) {
    super(props);
    this.state={
      isEnable: false,
      open: false,
      
    }
  }
  async componentDidMount() {
    
  }
  call(phone: string){
    const number=  'tel:$'+phone
    Linking.openURL(number);
  }

  image(itemclient: IClients){
    if(itemclient.uriphoto != null && itemclient.uriphoto!="") {
      console.log(itemclient.uriphoto);
      return <Card.Cover style= {styles.images} source={{ uri: 'http://192.168.100.9:8000' + itemclient.uriphoto }} />
    } else {
     return <Avatar.Text size={178} label={itemclient.firtsname.charAt(0)+itemclient.lastname.charAt(0)} />
    }

  }
  click(){
    this.props.navigation.navigate("Agendar una Reunion")
  }

  stateFabGroup(open: boolean){
    this.setState({
      open: !open,
  })
  }

  render() {
    var itemclient: IClients = this.context.itemclient;
    var opens: boolean = this.state.open;
    return (
      <View style={{flex:1}}>
      <KeyboardAwareScrollView >

          <View style={styles.container}>
              <View> 
                  <Card >
                  <View style= {styles.Cabecera} >
                  {this.image(itemclient)}
                      <View style={styles.contacto}>
                        <Text style={styles.textoCabecera1}>Contacto: {itemclient.telephone}</Text>
                        <Text style={styles.textoCabecera2}>Email</Text>
                        <Text style={styles.textoCabecera3}>{itemclient.email}</Text>
                         
                        <TouchableHighlight onPress={()=>{
                            this.call(itemclient.telephone.toString())
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
                      
                  </View>
                    <Card.Content>
                      {/*<Title>{itemuser.username}</Title>*/}
                      {/*<Paragraph style={styles.segundaCabecera}>Probabilidad de captar cliente: 90 %</Paragraph>*/}
                      <Paragraph style={styles.segundaCabecera}>Prob. de captaral cliente: {itemclient.probability} %</Paragraph>
                      <Paragraph style={styles.segundaCabecera}>{itemclient.firtsname}</Paragraph>
                    </Card.Content>

                    <Card.Content style={{marginTop: 4}}>    
                        <Paragraph style={{fontSize: 15, marginLeft: 5}}>Direcci??n</Paragraph>
                        <View style={styles.containermap}>
                            <MapView
                                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                                style={styles.map}
                                region={{
                                latitude: -19.58877845631177,
                                longitude:  -65.75353445345742,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                                
                                }}
                            >
                            </MapView>
                          </View>
  
                    </Card.Content>
                            
                    <Card.Content style={styles.enRuta}>    
                        <Paragraph style={{fontSize: 17, marginLeft: 10, marginRight: 220, }}>En Ruta</Paragraph>  
                        <Switch1></Switch1>
                    </Card.Content > 

                      
               

                  <View style={styles.containerText4}>
                          <TouchableHighlight onPress={()=>{
                            this.click();
                              }}>
                            
                            <View style={styles.containerText3}>
                                <View>
                                    <Icons name="book-open" size={20} color={MyColors.lastcolor}/>
                                </View>
                                  <Text style={styles.text2}>
                                      Agendar una nueva reunion 
                                  </Text>
                              </View>
                          </TouchableHighlight>

                        

                          
                          </View>

                          <View>
                        <Text style={{fontSize: 18, marginTop:20, fontFamily: "sans-serif-medium", marginLeft: 25, }}>Agenda de Negociacion para cliente: {itemclient.firtsname}</Text>        
                          <List.Item
                           title="Agenda de Negociacion para el Cliente america "
                           description="Reunion para el 15 de octubre del 2021"
                            left={props => <List.Icon {...props} icon="book-open" />}
                            />
                             <List.Item
                           title="Agenda de Negociacion para el Cliente america"
                           description="Reunion para el 31 de diciembre del 2021"
                            left={props => <List.Icon {...props} icon="book-open" />}
                            />
                      </View>
                            

                         
                  </Card>


                  </View>
                
                
            
          </View>

        </KeyboardAwareScrollView>

                  <ProviderFAB>
                  <Portal>
                    <FAB.Group
                    
                    visible={true}
                    
                      style={{ }}
                      open={opens}
                      icon={opens ? 'calendar-today' : 'folder'}
                      actions={[
                        {
                          icon: 'account-edit',
                          label: 'Cambiar a Cliente Regular ',
                          onPress: () => {
                            Alert.alert("??Desea cambiar el tipo de cliente a Regular?", "??Cambiar a Cliente Regular a " + itemclient.firtsname+ "?", [
                              {text: "Confirmar", onPress: async () => {
                                const {dispatch} = this.context;
                                var tipo = "Regular"
                                var result = await axios.put("http://192.168.100.9:8000/client/client/" + itemclient._id,{tipo: tipo}).then((item) => {
                                  return item.data.serverResponse;
                                });
                                  dispatch({type: Types.CHANGEITEMCLIENT, payload: result});
                                this.props.navigation.pop();
                              }},
                              {text: "Cancelar", onPress: () => {

                              }}
                            ])
                          }
                        },
                        
                        {
                          icon: 'account-edit',
                          label: 'Eliminar',
                          onPress:  () => {
                            Alert.alert("Borrar Cliente", "??Desea Borrar al Cliente " + itemclient.firtsname+ "?", [
                              {text: "Confirmar", onPress: async () => {
                                var auxiliar = await axios.put("http://192.168.100.9:8000/api/removeclient/" + this.context.userToken._id,{idCli: itemclient._id});
                                var result = await axios.delete("http://192.168.100.9:8000/client/client/" + itemclient._id).then((item) => {
                                  return item.data.serverResponse;
                                });
                                  
                                this.props.navigation.pop();
                              }},
                              {text: "Cancelar", onPress: () => {

                              }}
                            ])
                          }
                        },
                        {
                            icon: 'account-edit',
                            label: 'Editar',
                            onPress: () => this.props.navigation.navigate("UpdateClientsPotentials"),
                            small: false
                          },
                          
                      ]}
                      onStateChange={()=>{
                        this.stateFabGroup(opens)
                      }}
                      onPress={() => {
                        if (!opens) {
                          this.setState({
                            open: true,
                        })
                        }
                      }}
                    />
                  </Portal>
                  </ProviderFAB>

</View>

        
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
  chipContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap:"wrap"
  },
  Cabecera:{
    flexDirection: "row",
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
      textAlign:"justify"
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
    paddingLeft: 25,
    width:350,
    marginTop:20,
    marginLeft:10,
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
    marginTop: 270,
    flexDirection: "row"
  },
  suich:{
    marginRight: 40,
  },
  switch:{
    fontSize: 50,
  },
  containermap: {
  
    ...StyleSheet.absoluteFillObject,
    height: 250,
    width: 380,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:30,
    marginLeft:2,
    marginRight:2
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

});




export default DetailUsersPotenciales;







/*interface MyState {
  systemroles: Array<IRoles>
}
interface ServerResponse {
  serverResponse:Array<IRoles>
}
interface ServerResponsePutRoles {
  serverResponse: ItemUser
}
class DetailUsers extends Component<any, MyState> {
  static contextType = AppContext;
  constructor(props: any) {
    super(props);
    this.state = {
      systemroles: []
    }
  }
  async componentDidMount() {
    var result: Array<IRoles> = await axios.get<ServerResponse>("http://192.168.100.9:8000/api/roles").then((item) => {
      return item.data.serverResponse
    });
    this.setState({
      systemroles: result
    });
  }
  renderRoles(itemuser: ItemUser) {
    const {dispatch} = this.context;
    if (itemuser.roles.length == 0) {
      return <View>
        <Text>
          El usuario {itemuser.username} , no tiene roles asignados
        </Text>
      </View>
    }
    return (<View style={styles.chipContainer}>
        {
          itemuser.roles.map(item => {
            return <Chip icon="information" onPress={async () => {
              var result: ItemUser = await axios.put<ServerResponsePutRoles>("http://192.168.100.9:8000/api/removerol/" + this.context.itemuser._id, {idRol: item._id}).then((item) => {
                return item.data.serverResponse;
              });
              dispatch({type: Types.CHANGEITEMUSER, payload: result});
            }}>{item.name} {item.method}</Chip>
          })
        }
    </View>);
  }
  listItem(item: IRoles) {
    const {dispatch} = this.context;
    
    //var item : ItemUser = params.item
      return <List.Item
      title={item.name}
      description={item.method}
      onPress={async () => {
        var result: ItemUser = await axios.put<ServerResponsePutRoles>("http://192.168.100.9:8000/api/addrol/" + this.context.itemuser._id, {idRol: item._id}).then((item) => {
          return item.data.serverResponse;
        });
          dispatch({type: Types.CHANGEITEMUSER, payload: result});
      }}
      left={props => <List.Icon {...props} icon="incognito" />}
      />
}
  render() {
    var itemuser: ItemUser = this.context.itemuser;
    return (
      
        <View style={styles.container}>
            <View>
              <Card>
                <Card.Cover source={{ uri: 'http://192.168.100.9:8000' + itemuser.uriavatar }} />
                  <Card.Content>
                    <Title>{itemuser.username}</Title>
                    <Paragraph>El nombre de usuario es{itemuser.email} </Paragraph>
                  </Card.Content>
                  <Card.Actions>
                    <Button icon="account-edit" onPress={() => {

                    }}>Edit</Button>
                    <Button icon="delete" onPress={() => {
                      Alert.alert("Borrar usuario", "Desea Borrar Al usuario " + itemuser.username, [
                        {text: "Confirmar", onPress: () => {

                        }},
                        {text: "Cancelar", onPress: () => {

                        }}
                      ])
                    }}>Borrar</Button>
                  </Card.Actions>
                </Card>
            </View>
            <View style={styles.cardViewContainer}>
              <Card>
                <Card.Content>
                    <Title>Roles</Title>
                      {this.renderRoles(itemuser)}
                </Card.Content>
                  
                </Card>
            </View>

            <View style={styles.cardViewContainer}>
              <Card>
                <Card.Content>
                    <Title>Roles del Sistema</Title>
                    <View>
                    <Searchbar
                      placeholder="Search"
                      onChangeText= {() => {

                      }}
                      value=""
                    />
                    </View>
                    <View>
                    <FlatList
                        data={this.state.systemroles}
                        renderItem={({item}) => (
                          this.listItem(item)
                        )}
                        keyExtractor={(item) => item._id}
                      />
                      
                    </View>
                </Card.Content>
                  
                </Card>
            </View>
        </View>
        </KeyboardAwareScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1
  },
  cardViewContainer: {
    marginTop: 10
  },
  chipContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap:"wrap"
  }
});
export default DetailUsers;*/