import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet,ImageBackground} from "react-native"; 
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import {Appbar, List, Avatar, FAB, Searchbar} from "react-native-paper";
import AppContext from "../../../context/AppContext"
import {Types} from "../../../context/ContantTypes"; 
import { KeyboardAwareScrollView  } from "react-native-keyboard-aware-scroll-view";
export interface IRoles {
  _id: string,
  name: string,
  urn:  string,
  method: string
}
export interface IReunion {
  fecha: string;
  hora: string;
  resultado: string;
}
export interface ISimpleProducts{
  id: string;
  name: string;
  cantidad: number;
  priceUnitary: number;
  priceTotal: number;
  registerdate: Date;
}
export interface IRecibo{
  nameclient: string;
  namevendedor: string;
  total: number;
  registerdateRecibo: Date;
}
export interface IPedido {
  state: string;
  products: Array<ISimpleProducts>;
  registerdate: Date;
  ordenarP: string;
  methodpay: string;
  cuentaBancaria?: string;
  total: number;
  Recibo: Array<IRecibo>;
}
export interface IClients {
  _id: string;
  firtsname: string;
  lastname: string;
  email: string;
  telephone: string;
  descriptionphone?: string;
  uriphoto?: string; //aqui entrara la uri donde nos llevara a la imagen
  pathphoto?: string;
  state: string;
  probability: number;
  zona: string;
  street: string;
  tipo: string; //Regular o Potencial
  registerdate: Date;
  idUser: string,
  //pedidos?: Array<IPedido>;
 // reunion?: Array<IReunion>;
}
export interface ItemUser{
  _id: string,
  username: string,
  email: string,
  registerdate: string,
  roles: Array<IRoles>,
  clients: Array<IClients>
  pathavatar?: string,
  uriavatar?: string
}
interface ServerResponse {
  serverResponse:Array<IClients>
  //serverResponse:Array<IClients>
}
interface MyState {
  dataUsers: Array<IClients>,
  completeList: Array<IClients>,
  searchKey: string,
  systemclients: Array<IClients>
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
class ClientsPotencials extends Component<MyProps, MyState> {
  static contextType = AppContext;
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: [],
      searchKey : "",
      completeList: [],
      systemclients: []

    }
  }
  async componentDidMount() {
    const {userToken}=this.context;
    const {_id} = userToken; 
    const {token} = userToken;
    const id: string = _id.toString();
    //console.log("hola"+_id+" fin");
    var direccion: string = "http://192.168.100.9:8000/client/client/tipo/Potencial/"+id;
    console.log(direccion);
    var result: Array<IClients> = await axios.get<ServerResponse>(direccion,{
      headers: {
        "Authorization": token.toString() //esto manda el token para la verificación del rol
      }
    }).then((item) => {
      return item.data.serverResponse
    });
    console.log("Hasta aqui llegue " +result+ "tambien aqui")
    this.setState({
      dataUsers: result,
      completeList: result,
    });

  }
  listItem(item: IClients) {
      const {dispatch} = this.context;
      //var item : ItemUser = params.item
      if(item!= undefined){
        var probabilitys= "Probabilidad de captar al cliente: "+ item.probability + "%"
        if(item.uriphoto == null || item.uriphoto=="") {

          return <List.Item
          title={item.firtsname+" "+item.lastname}
          description={probabilitys}
          onPress={() => {
              dispatch({type: Types.CHANGEITEMCLIENT, payload: item});
              this.props.navigation.push("DetailUsersPotenciales");
          }}
          left={props => <Avatar.Text size={48} label={item.firtsname.charAt(0)+item.lastname.charAt(0)} />}
          />
        } else {
          var uriImg: string = "http://192.168.100.9:8000" + item.uriphoto;
          return <List.Item
                    title={item.firtsname+" "+item.lastname}
                    description={probabilitys}
                    onPress={() => {
                      dispatch({type: Types.CHANGEITEMCLIENT, payload: item});
                      this.props.navigation.push("DetailUsersPotenciales");
                  }}
                    left={props => <Avatar.Image size={48} source={{uri : uriImg}} />}
          />
        }  
      } else {
        return <View></View>
      }
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
      //<Text>No hay resultados</Text>
      // Buscar dentro del servidor
      //Consumir una API. y poder revisar ese resltado en la base de datos

    } else {
      this.setState({
        dataUsers: result
      }); 
    }
    
  }
  render() {
    var {searchbarVisible} = this.context;
    return (
          
      <ImageBackground style={styles.container} source={require("../../../../images/fondo7.jpg")}>
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
        
          <View >
          { 
             <FlatList
                      
                      data={this.state.dataUsers}
                      renderItem={({item}) => (
                        this.listItem(item)
                      )}
                      keyExtractor={(item) => item._id}
                  />   
          

          }
          </View>
         
          
          <FAB
            style={styles.fab}
            small={false}
            icon="plus"
            onPress={() => {
                this.props.navigation.push("RegisterUsersPotenciales");
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
  text: {
         fontSize: 120,
        
        fontFamily: '$gilroyMedium',
      
        color: "#555555",
        fontWeight:"bold"
      
  },
})
export default ClientsPotencials;










































/*import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet} from "react-native"; 
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import {Appbar, List, Avatar, FAB, Searchbar} from "react-native-paper";
import AppContext from "../../../context/AppContext"
import {Types} from "../../../context/ContantTypes"; 
export interface IRoles {
  _id: string,
  name: string,
  urn:  string,
  method: string
}


export interface ItemUser{
  


  _id: string,
  firtsname: string;
  lastname: string;
  email: string;
  telephone: string;
  descriptionphone?: string;
  uriphoto?: string; //aqui entrara la uri donde nos llevara a la imagen
  pathphoto?: string;
  state: string;
  probability: number;
  zona: string;
  street: string;
  tipo: string; //Regular o Potencial
  registerdate: Date;
  //edidos?: Array<IPedidos>;
  //reunion?: Array<IReunion>;


}
interface ServerResponse {
  serverResponse:Array<ItemUser>
}
interface MyState {
  dataUsers: Array<ItemUser>,
  completeList: Array<ItemUser>,
  searchKey: string
}
interface ItemData {
  item: ItemUser
}
interface MyProps {
    navigation: StackNavigationProp<any, any>
}
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
class ClientsPotenciales extends Component<MyProps, MyState> {
  static contextType = AppContext;
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: [],
      searchKey : "",
      completeList: []
    }
  }
  async componentDidMount() {
    console.log(this.context);
    var result: Array<ItemUser> = await axios.get<ServerResponse>("http://192.168.100.9:8000/client/client/tipo/Potencial").then((item) => {
      return item.data.serverResponse
    });
    this.setState({
      dataUsers: result,
      completeList: result,
    });
  }
  listItem(item: ItemUser) {
      const {dispatch} = this.context;
      //var item : ItemUser = params.item
      if (item.uriphoto == null) {
        return <List.Item
        title={item.firtsname+" "+ item.lastname} 
        description={item.email}
        onPress={() => {
            dispatch({type: Types.CHANGEITEMCLIENT, payload: item});
            this.props.navigation.push("DetailUsersPotenciales");
        }}
        left={props => <List.Icon {...props} icon="incognito" />}
        />
      } else {
        var uriImg: string = "http://192.168.100.9:8000" + item.uriphoto;
        return <List.Item
                  title={item.firtsname+" "+ item.lastname}
                  description={item.email}
                  onPress={() => {
                    dispatch({type: Types.CHANGEITEMCLIENT, payload: item});
                    this.props.navigation.push("DetailUsersPotenciales");
                }}
                  left={props => <Avatar.Image size={48} source={{uri : uriImg}} />}
        />
      }
  }
  searchList(key: string) {
    this.setState({
      searchKey: key
    });
    var result: Array<ItemUser> = this.state.completeList.filter((item) => {
      var regx = new RegExp(key, "i");
      if (item.firtsname.match(regx) != null) {
        return true;
      }
      return false;
    });
    if (result.length == 0) {
      // Buscar dentro del servidor
      //Consumir una API. y poder revisar ese resltado en la base de datos

    } else {
      this.setState({
        dataUsers: result
      }); 
    }
    
  }
  render() {
    var {searchbarVisible} = this.context;
    return (
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
            <FlatList
              data={this.state.dataUsers}
              renderItem={({item}) => (
                this.listItem(item)
              )}
              keyExtractor={(item) => item._id}
            />
          </View>
          <FAB
            style={styles.fab}
            small={false}
            icon="plus"
            onPress={() => {
                this.props.navigation.push("RegisterUsersPotenciales");
            }}
          />
        </View>
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
})
export default ClientsPotenciales;*/