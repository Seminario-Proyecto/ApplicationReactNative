import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet,ImageBackground} from "react-native"; 
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import {Appbar, List,Avatar, Menu,FAB, Searchbar,  Paragraph, Dialog, Portal,Button, Colors } from "react-native-paper";
import AppContext from "../../context/AppContext"
import {Types} from "../../context/ContantTypes"
import { KeyboardAwareScrollView  } from "react-native-keyboard-aware-scroll-view";
import { red100 } from "react-native-paper/lib/typescript/styles/colors";
import { BorderlessButton } from "react-native-gesture-handler";
import {IRecibo,IClients,IReunion,IPedido,ISimpleProducts,IRoles,ItemUser} from "../users/TopTab/ClientsRegulars"
import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";





interface ServerResponse {
  serverResponse:Array<IClients>
  //serverResponse:Array<IClients>
}
interface MyState {
  dataPedido: Array<IClients>,
  completeList: Array<IClients>,
  searchKey: string,
  searrchKey: string,
  systemclients: Array<IClients>
  systempedidos: Array<IPedido>
}
interface ItemData {
  item: ItemUser
}
interface ClientData {
  itemC: IClients
}

interface MyProps {
    navigation: StackNavigationProp<any, any>
}
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
class ListPedi extends Component<MyProps, MyState> {
  static contextType = AppContext;
  constructor(props: any) {
    super(props);
    this.state = {
      dataPedido: [],
      searchKey : "",
      searrchKey : "",
      completeList: [],
      systemclients: [],
      systempedidos: [],

    }
  }
  async componentDidMount() {
    const {userToken}=this.context;
    const {_id} = userToken; 
    const {token} = userToken;
    const id: string = _id.toString();
    //console.log("hola"+_id+" fin");
    var direccion: string = "http://192.168.100.9:8000/client/client/tipo/Regular/"+id;
    console.log(direccion);
    var result: Array<IClients> = await axios.get<ServerResponse>(direccion, {
      headers: {
        "Authorization": token.toString() //esto manda el token para la verificación del rol
      }
    }).then((item) => {
      return item.data.serverResponse
    });
    if(result==undefined){
      result=[];
    }
    console.log("Hasta aqui llegue " +result[0]+" otro pedido "+result[1]+ "tambien aqui")
    console.log(result)
    var res = await result.filter(item=>{
      if(item.pedidos.length==0){
        return false
      }
      return true
    })
    this.setState({
      dataPedido: res,
      completeList: res,
    });

  }
  verificarpedido(item: IClients){
    if(item.pedidos.length==0){
      return "hola"
    } else{
    return item.pedidos.map(item=>{
      return item.FechaEntrega+ "  Hora Entrega: "+item.horaEntrega + "\n"
    })
  }
  }
  
  listItem(item: IClients) {
    console.log(item);
    const {dispatch} = this.context;
    //var item : ItemUser = params.item
      return <List.Item
      title={item.firtsname+" "+item.lastname}
      description={this.verificarpedido(item)}
      onPress={() => {
          dispatch({type: Types.CHANGEITEMCLIENT, payload: item});
          this.props.navigation.push("DetailUsers");
      }}
      left={props => <List.Icon {...props} icon="folder" />}
      />
    
}


 



  searchList(key: string) {
    this.setState({
      searchKey: key
    });
    var result: Array<IClients> = this.state.completeList.filter((item) => {
      var regx = new RegExp(key, "i");
      if (item.firtsname.match(regx) != null || item.lastname.match(regx)!=null) {
        return true;
      }
      return false;
    });

    if (result.length == 0) {
      // Buscar dentro del servidor
      //Consumir una API. y poder revisar ese resltado en la base de datos

    } else {
      this.setState({
        dataPedido: result
      }); 
    }
    
  }
  render() {
    var {searchbarVisible} = this.context;
    var {searchbarrVisible} = this.context;
    var res= []
    return (
      <ImageBackground style={styles.container} source={require("../../../images/fondo3.jpg")}>
        <View style={styles.container}>
          <View>
          {
            searchbarVisible && 
            <Searchbar
            placeholder="Buscar"
            value={this.state.searchKey}
            onChangeText={(msn) => {
              this.searchList(msn);
            }}
            />
          }
          </View>
          <View>
            {
                searchbarrVisible && 
                <View style={styles.coloriten}>
               
                <Menu.Item icon="folder" style={{backgroundColor:"#AFEEEE" }} onPress={() => {}} title="Ver todos"  />
                <Menu.Item icon="content-copy" style={{backgroundColor:"#AFEEEE" }} onPress={() => {}} title="Entregados"  />
                <Menu.Item icon="content-paste" style={{backgroundColor:"#AFEEEE" }} onPress={() => {}} title="No entregados" />
                </View>
            }

          </View>

          
          
          <View>
          { 
            
            this.state.dataPedido.length!=0 ? <FlatList //aqui pregunto si dataUsers tiene algun elemento, si lo tiene muestro la lista
                
                        data={this.state.dataPedido}
                        renderItem={({item}) => (
                          this.listItem(item)
                        )}
                        keyExtractor={(item) => item._id}
                    />  
            
                     : <Text style={styles.textSinClients}>No hay Pedidos</Text>  //en caso de que no tenga muestro este mensaje
          

          }
          </View>
         
          <FAB
            style={styles.fab}
            small={false}
            label="Ordenar Pedido"
            icon="plus"
            onPress={() => {
                this.props.navigation.push("RegisterP");
            }}
          />
        </View>
        </ImageBackground>
        
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  textSinClients:{
    marginTop:230,
    textAlign: "center",
    fontSize: 30,
    
  },
  coloriten:{
  marginLeft:110,
    width:"100%",
    position: "absolute",
    
   
  }
})
export default ListPedi;