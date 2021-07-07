import React, { Component } from "react";
import {View, Text, StyleSheet, Alert, FlatList, TouchableHighlight} from "react-native";
import AppContext from "../../context/AppContext";
import Icons from "react-native-vector-icons/Feather"
import MyColors from "../../color/MyColors";
import {IRoles, ItemUser, IClients, IPedido, IRecibo, ISimpleProducts} from "./TopTab/ClientsRegulars"
import { Avatar, Button, Card, Title, Paragraph , Chip, Searchbar, List, Switch, FAB, Portal, Provider as ProviderFAB, DefaultTheme, withTheme} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from "axios";
import {Types} from "../../context/ContantTypes"; 
import { Value } from "react-native-reanimated";
import Fabgr from "../../Components/FabGroup";
import { DarkTheme } from "@react-navigation/native";
import Switch1 from "../../Components/Switch";



interface MyState{
  isEnable: boolean;
  open: boolean,
  systemPedido: Array<IPedido>,
}
interface ServerResponse {
  serverResponse: Array<IPedido>
}

class DetailUsers extends Component<any, MyState> {
  static contextType = AppContext;
  
  constructor(props: any) {
    super(props);
    this.state={
      isEnable: false,
      open: false,
      systemPedido: [],
    }
   
  }
  async componentDidMount() {
    var direccion: string = "http://192.168.100.9:8000/pedido/pedidos/"+this.context.itemclient._id;
    var result: Array<IPedido> = await axios.get<ServerResponse>(direccion).then((item) => {
      return item.data.serverResponse
    });
    if(result==undefined){
      result=[];
    }
    console.log("Hasta aqui llegue " +result+ "tambien aqui")
    this.setState({
      systemPedido: result,
      
    });
  }

  async ListaPedidos(itemclient: IClients){
    
    /*if(result == undefined){
      return <Text>No hay pedidos</Text>
    }
    return (
      result.map(item=>{
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
      })
    )*/
    
  }
  
  image(itemclient: IClients){
      if(itemclient.uriphoto != null) {
        console.log(itemclient.uriphoto);
        return <Card.Cover style= {styles.images} source={{ uri: 'http://192.168.100.9:8000' + itemclient.uriphoto }} />
      } else {
       return <Avatar.Text size={178} label={itemclient.firtsname.charAt(0)+itemclient.lastname.charAt(0)} />
      }

  }
  changevalueSwitch(enable: boolean){
    this.setState({
      isEnable: !enable,
  })
  }

  stateFabGroup(open: boolean){
    this.setState({
      open: !open,
  })
  }

  enruta(itemclient: IClients){
    console.log(itemclient.state.toString())
    if(itemclient.state.toString() == "En ruta"){ ///aqui debemos cambiar este atributo debe tener falso(que indica que no esta en ruta) y true (que significa que esta en ruta)
      return <Paragraph style={{fontSize: 17, marginLeft: 10, marginRight: 220, }}>En Ruta</Paragraph>  
    } else {
      return <Paragraph style={{fontSize: 17, marginLeft: 10, marginRight: 220, }}>No en Ruta</Paragraph>  
    }
  }


  ExistsPedidos(){
    
  }
 
  render() {
    var itemclient: IClients = this.context.itemclient;
    var enable: boolean = this.state.isEnable;
    var opens: boolean = this.state.open;
    var itempedido: Array<IPedido> = this.state.systemPedido;
    return (
      <View style={{flex:1}}>
      <KeyboardAwareScrollView >
          <View style={styles.container}>
              <View> 
                <Card >
                  <View style= {styles.Cabecera} >
                    {this.image(itemclient)}
                      <View style={styles.contacto}>
                        <Text style={styles.textoCabecera1}>Contacto: {itemclient.firtsname}</Text>
                        <Text style={styles.textoCabecera2}>Email</Text>
                        <Text style={styles.textoCabecera3}>{itemclient.email}</Text>
                        
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
                      
                  </View>
                  <View>
                  <Card.Content>
                      {/*<Title>{itemuser.username}</Title>*/}
                      {/*<Paragraph style={styles.segundaCabecera}>Probabilidad de captar cliente: 90 %</Paragraph>*/}
                      <Paragraph style={styles.segundaCabecera}>{itemclient.firtsname+" "+itemclient.lastname}</Paragraph>
                    </Card.Content>

                    <Card.Content style={{marginTop: 4}}>    
                        <Paragraph style={{fontSize: 15, marginLeft: 5}}>Dirección</Paragraph>      
                        {this.image(itemclient)}
                        {/*<Card.Cover style={styles.Maps} source={{ uri: 'http://192.168.100.9:8000' + itemuser.uriavatar }} />  */}  
                    </Card.Content>
                    
                    <Card.Content style={styles.enRuta}>    
                        {this.enruta(itemclient)}
                        <Switch
                          trackColor={{ false: MyColors.thirth, true: "#81b0ff" }} //colores cuando se apaga
                          thumbColor={enable ? MyColors.secondary : MyColors.thirth} //colores cuando se prende
                          //ios_backgroundColor="#3e3e3e"
                          value={enable}
                          
                          onValueChange={()=>{
                                this.changevalueSwitch(enable);
                          }}
                          
                        />
                       
                    </Card.Content>  
                    </View>
  
                  </Card>
                  <Text style={{fontSize: 18, fontFamily: "sans-serif-medium", marginLeft: 25, }}>Ultimos Pedidos</Text>        
                      <View>
                       {
                         this.state.systemPedido.map(item =>{
                          return (
                  
                              <List.Item
                                title={item.state}
                                titleStyle={{alignContent:"center"}}
                                descriptionNumberOfLines={8}
                                description={item.products.map(item=>{
                                  return item.name + " x " + item.cantidad + "\n"
                                }) }
                                onPress={()=>{
                                  
                                }}
                                right={props=> <Text style={{}}>{item.Recibo.map(item=>{
                                  return "Bs." + item.total 
                                })}</Text> } 
                                left={props => <List.Icon {...props} icon="folder" />}
                              />
                          )
                          
                         })
                       }
                         
                      </View>
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
                          label: 'Eliminar',
                          onPress: () => console.log('Pressed eliminar'),
                        },
                        {
                            icon: 'account-edit',
                            label: 'Editar',
                            onPress: () => console.log('Pressed editar'),
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
    height: 65,
    width: 160,
    backgroundColor: MyColors.maincolor,
    alignItems:"center",
    borderRadius:20,
    elevation: 15,
    
    flexDirection: "row",
    paddingLeft: 25,
    
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




export default DetailUsers;







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
      <KeyboardAwareScrollView style={{flex:1}}>
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