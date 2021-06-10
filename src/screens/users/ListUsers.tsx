import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet} from "react-native"; 
import axios from "axios";
import {Appbar, List, Avatar, FAB} from "react-native-paper";
interface ItemUser{
  _id: string,
  username: string,
  email: string,
  registerdate: string,
  roles: Array<any>,
  pathavatar?: string,
  uriavatar?: string
}
interface ServerResponse {
  serverResponse:Array<ItemUser>
}
interface MyState {
  dataUsers: Array<ItemUser>
}
interface ItemData {
  item: ItemUser
}
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
class ListUsers extends Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: []
    }
  }
  async componentDidMount() {
    var result: Array<ItemUser> = await axios.get<ServerResponse>("http://192.168.0.106:8000/api/users").then((item) => {
      return item.data.serverResponse
    });
    this.props.navigation.setOptions({
        tabBarVisible: false
    });
    this.setState({
      dataUsers: result
    });
  }
  listItem(params: ItemData) {
      var item : ItemUser = params.item
      if (item.uriavatar == null) {
        return <List.Item
        title={item.username}
        description={item.email}
        left={props => <List.Icon {...props} icon="incognito" />}
        />
      } else {
        var uriImg: string = "http://192.168.0.106:8000" + item.uriavatar;
        return <List.Item
                  title={item.username}
                  description={item.email}
                  left={props => <Avatar.Image size={48} source={{uri : uriImg}} />}
        />
      }
  }
  render() {
    return (
        <View style={styles.container}>
          <Appbar.Header>
            <Appbar.Content title="Gestor de Usuarios" subtitle={'Gestión'} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
            <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
          </Appbar.Header>
          <View>
            <FlatList
              data={this.state.dataUsers}
              renderItem={({item}) => (
                <this.listItem item={item}/>
              )}
              keyExtractor={(item) => item._id}
            />
          </View>
          <FAB
            style={styles.fab}
            small={false}
            icon="plus"
            onPress={() => {
                this.props.navigation.push("RegisterUsers");
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
export default ListUsers;