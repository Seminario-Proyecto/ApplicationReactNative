import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet} from "react-native"; 
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import {Appbar, List,Avatar, Menu,FAB, Searchbar,  Paragraph, Dialog, Portal,Button, Colors } from "react-native-paper";
import AppContext from "../../context/AppContext"
import {Types} from "../../context/ContantTypes"
import { KeyboardAwareScrollView  } from "react-native-keyboard-aware-scroll-view";
import { red100 } from "react-native-paper/lib/typescript/styles/colors";
import { BorderlessButton } from "react-native-gesture-handler";
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
  searrchKey: string,
  

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
class ListPedi extends Component<MyProps, MyState> {
  static contextType = AppContext;
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: [],
      searchKey : "",
      searrchKey : "",
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
    var direccion: string = "http://192.168.100.9:8000/client/client/tipo/Regular/"+id;
    console.log(direccion);
    var result: Array<IClients> = await axios.get<ServerResponse>(direccion, {
      
    }).then((item) => {
      return item.data.serverResponse
    });
    if(result==undefined){
      result=[];
    }
    console.log("Hasta aqui llegue " +result+ "tambien aqui")
    this.setState({
      dataUsers: result,
      completeList: result,
    });

  }
  
  listItem(item: IClients) {
    const {dispatch} = this.context;
    //var item : ItemUser = params.item
  
    if(item.uriphoto == null) {

      return <List.Item
      title={item.firtsname+" "+item.lastname}
      description={item.email}
      onPress={() => {
          dispatch({type: Types.CHANGEITEMCLIENT, payload: item});
          this.props.navigation.push("DetailUsers");
      }}
      left={props => <Avatar.Text size={48} label={item.firtsname.charAt(0)+item.lastname.charAt(0)} />}
      />
    } else {
      var uriImg: string = "http://192.168.100.9:8000" + item.uriphoto;
      return <List.Item
                title={item.firtsname+" "+item.lastname}
                description={item.email}
                onPress={() => {
                  dispatch({type: Types.CHANGEITEMCLIENT, payload: item});
                  this.props.navigation.push("DetailUsers");
              }}
                left={props => <Avatar.Image size={48} source={{uri : uriImg}} />}
      />
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
    var {searchbarrVisible} = this.context;
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
            
            this.state.dataUsers.length!=0 ? <FlatList //aqui pregunto si dataUsers tiene algun elemento, si lo tiene muestro la lista
                
                      data={this.state.dataUsers}
                      renderItem={({item}) => (
                        this.listItem(item)
                      )}
                      keyExtractor={(item) => item._id}
                  />   : <Text style={styles.textSinClients}>No hay Pedidos</Text>  //en caso de que no tenga muestro este mensaje
          

          }
          </View>
         
          <FAB
            style={styles.fab}
            small={false}
            label="Ordenar Pedido"
            icon="plus"
            onPress={() => {
                this.props.navigation.push("RegisterPedido");
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
  textSinClients:{
    marginTop:230,
    textAlign: "center",
    fontSize: 30,
    
  },
  coloriten:{
  marginLeft:110,
    width:"100%"
   
  }
})
export default ListPedi;