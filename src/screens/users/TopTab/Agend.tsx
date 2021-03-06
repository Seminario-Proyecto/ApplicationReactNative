import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet,ImageBackground} from "react-native"; 
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
  username: string,
  email: string,
  registerdate: string,
  roles: Array<IRoles>,
  pathavatar?: string,
  uriavatar?: string
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
class Agenda extends Component<MyProps, MyState> {
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
    var result: Array<ItemUser> = await axios.get<ServerResponse>("http://192.168.100.9:8000/api/users").then((item) => {
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
      if (item.uriavatar == null) {
        return <List.Item
        title={item.username}
        description={item.email}
        onPress={() => {
            dispatch({type: Types.CHANGEITEMUSER, payload: item});
            this.props.navigation.push("DetailUsersAgenda");
        }}
        left={props => <List.Icon {...props} icon="incognito" />}
        />
      } else {
        var uriImg: string = "http://192.168.100.9:8000" + item.uriavatar;
        return <List.Item
                
                  title={item.username}
                  description={item.email}
                  onPress={() => {
                    dispatch({type: Types.CHANGEITEMUSER, payload: item});
                    this.props.navigation.push("DetailUsersAgenda");
                }}
                  left={props => <Avatar.Image size={60} source={{uri : uriImg}} />}
        />
      }
  }
  searchList(key: string) {
    this.setState({
      searchKey: key
    });
    var result: Array<ItemUser> = this.state.completeList.filter((item) => {
      var regx = new RegExp(key, "i");
      if (item.username.match(regx) != null) {
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

      <ImageBackground style={styles.container} source={require("../../../../images/fon77.jpg")}>
        
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
              renderItem={({item}) => {
                return(this.listItem(item)
                
              )}}
              keyExtractor={(item) => item._id}
              
            />
          </View>
          <FAB
            style={styles.fab}
            small={false}
            label="Agendar Nueva Reunion"
            icon="plus"
            onPress={() => {
                this.props.navigation.push("RegisterUsersAgenda");
            }}
          />
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
export default Agenda;