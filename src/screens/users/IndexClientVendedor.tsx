import React, { Component } from "react";
import { NavigationContainer , DarkTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Clients from "./Clients";
import IndexOrder from "../Pedidos/Order"
import Reports from "../Reportes/Reports";
import Icons from "react-native-vector-icons/AntDesign";
import Icons2 from "react-native-vector-icons/Entypo";
import Icons3 from "react-native-vector-icons/Foundation";
import MyColors from "../../color/MyColors";
const Tab = createBottomTabNavigator();
class IndexClients extends Component {
  render() {
    return (
      <NavigationContainer  theme={DarkTheme} independent={true}>
        <Tab.Navigator
        screenOptions={({route}) => ({
          
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Usuarios': {
                if (focused) {
                  return <Icons2 name="users" size={23} color={MyColors.secondary} />;
                } else {
                  return <Icons2 name="users" size={23} color={MyColors.lastcolor} />;
                }
              }
              case 'Pedidos': {
                if (focused) {
                  return <Icons name="export" size={23} color={MyColors.secondary}/>;
                } else {
                  return <Icons name="export" size={23} color={MyColors.lastcolor} />;
                }
              }
              
            }
          },
        })}
        >
          <Tab.Screen name="Usuarios" component={Clients} />
          <Tab.Screen name="Pedidos" component={IndexOrder} />
          
        </Tab.Navigator>
      </NavigationContainer>)
  }
}
export default IndexClients;