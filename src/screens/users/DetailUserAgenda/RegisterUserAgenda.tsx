import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet,TouchableHighlight, } from "react-native"; 
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import {Appbar, List, Avatar, FAB, Searchbar,TextInput, Modal, Portal, Button, Provider,} from "react-native-paper";
import AppContext from "../../../context/AppContext"
import {Types} from "../../../context/ContantTypes"; 
import Icons from "react-native-vector-icons/Feather"
import MyColors from "../../../color/MyColors";

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
const [visible, setVisible] = React.useState(false);
const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);
const containerStyle = {backgroundColor: 'white', padding: 20};
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
class RegisterUsersAgenda extends Component<MyProps, MyState> {
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
<Provider >
      <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text>Example Modal.  Click outside this area to dismiss.</Text>
      </Modal>
    </Portal>
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

          <View  style={styles.fechayhora}>

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
                              <Text style={{fontSize: 18, marginTop:20, fontFamily: "sans-serif-medium", marginLeft: 25, }}>Hora</Text>
                              <View style={styles.fechas}>

                                  <TextInput style={styles.fecha}
                                                          label="hora"
                                                          onChangeText={text => {  
                                                              
                                                          }}/>
                                  <TextInput style={styles.fecha}
                                                          label="min"
                                                          onChangeText={text => {  
                                                              
                                                          }}/>



                              </View>
                    
                      </View>
                      
                      <View   style={styles.set}>
                                   
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
      </View>


                  
          <View>
          <Text style={{fontSize: 18, marginTop:20, fontFamily: "sans-serif-medium", marginLeft: 25, }}>Reuniones ya Agendadas:</Text> 
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
            label="Agendar"
            icon="plus"
            onPress={() => {
                this.props.navigation.push("RegisterUsersPotenciales");
            }}
          />
        </View>
        </Provider>
    )
  }
}
const styles = StyleSheet.create({
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
  containerText2:{
    height: 50,
    width: 140,
    backgroundColor: MyColors.maincolor,
    alignItems:"center",
    
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
  set: {
    marginLeft:0,
    marginTop:70,
    
  
    
  },
  fechayhora: {
    flexDirection: "row",
  },
})
export default RegisterUsersAgenda;