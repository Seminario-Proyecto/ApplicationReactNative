import React, { Component } from "react";
import {createStackNavigator, CardStyleInterpolators} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import {View, Text,StyleSheet, Platform} from "react-native"; 
import {StackRouter} from "@react-navigation/native";
import Index from "./src/screens/Login/Index";
import PreLogin from "./src/screens/Login/Prelogin";
import DataState from "./src/context/AppState"
import { NavigationEvents } from "react-navigation";
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
var Stack = createStackNavigator();
class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    
  }
  render() {
    return (
      <DataState>
          <NavigationContainer independent={true} >
              <Stack.Navigator screenOptions={{ headerShown: false , 
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}>
                  <Stack.Screen name="Index" component={Index}/>
                  <Stack.Screen name="Prelogin" component={PreLogin}/>
              </Stack.Navigator>
          </NavigationContainer>
        </DataState>
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
export default App;
/* probando */ 






































/*import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Clients from "./src/screens/users/Clients";
import Order from "./src/screens/Order";
import Reports from "./src/screens/Reports";
import Icons from "react-native-vector-icons/AntDesign";
import MyColors from "./src/color/MyColors"
import DataState from "./src/context/AppState";
const Tab = createBottomTabNavigator();
class App extends Component {
  render() {
    return (
      <DataState>
        <NavigationContainer>
          <Tab.Navigator
          screenOptions={({route}) => ({
            
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              switch (route.name) {
                case 'Usuarios': {
                  if (focused) {
                    return <Icons name="smile-circle" size={23} color={MyColors.secondary} />;
                  } else {
                    return <Icons name="smile-circle" size={23} color={MyColors.thirth} />;
                  }
                }
                case 'Pedidos': {
                  if (focused) {
                    return <Icons name="export" size={23} color={MyColors.secondary}/>;
                  } else {
                    return <Icons name="export" size={23} color={MyColors.thirth} />;
                  }
                }
                case 'Reportes': {
                  if (focused) {
                    return (
                      <Icons name="table" size={23} color={MyColors.secondary} />
                    );
                  } else {
                    return (
                      <Icons name="table" size={23} color={MyColors.thirth} />
                    );
                  }
                }
              }
            },
          })}
          >
            <Tab.Screen name="Usuarios" component={Clients} />
            <Tab.Screen name="Pedidos" component={Order} />
            <Tab.Screen name="Reportes" component={Reports} />
          </Tab.Navigator>
        </NavigationContainer>
      </DataState>)
  }
}
export default App;*/