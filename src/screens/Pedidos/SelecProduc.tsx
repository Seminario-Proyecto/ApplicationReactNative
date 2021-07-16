import React, { Component } from "react";
import {View, Text, StyleSheet, ScrollView,FlatList, Dimensions,TouchableOpacity, Image,ImageBackground} from "react-native"; 
import {} from "react-native"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import AppContext from "../../context/AppContext";
import EStyleSheet from 'react-native-extended-stylesheet';
import { StackNavigationProp } from '@react-navigation/stack';
import SearchBar from '../../Components/SearchBar';
import SectionTitle from '../../screens/Reportes/SectionTitle';
import FoodCard from '../../Components/FoodCard';
import axios from "axios";


import {Appbar, List,Avatar, Menu,FAB, Searchbar,  Paragraph, Dialog, Portal,Button, Colors } from "react-native-paper";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

export interface IProducts{
  _id: string
  name: string;
  uriimage: string;
  pathavathar: string;
  stock: number;
  price: number;
  ofert: number;
}

interface ServerResponse {
  serverResponse:Array<IProducts>
}

interface MyState{
  dataProducts: Array<IProducts>,
  completeList: Array<IProducts>,
}

const {width: widthScreen, height: heightScreen} = Dimensions.get('window');
interface MyProps {
  navigation: StackNavigationProp<any, any>
}

class SelecProduc extends Component<MyProps, MyState> {
  static contextType = AppContext;
  
  constructor(props: any) {
    super(props);
    this.state={
      dataProducts: [],
      completeList: [],
      
    }
   
  }

  async componentDidMount(){
    var direccion: string = "http://192.168.100.9:8000/pedido/producto";
    console.log(direccion);
    var result: Array<IProducts> = await axios.get<ServerResponse>(direccion, {
      /*headers: {
        "Authorization": token.toString() //esto manda el token para la verificación del rol
      }*/
    }).then((item) => {
      return item.data.serverResponse
    });
    if(result==undefined){
      result=[];
    }
    console.log("Hasta aqui llegue " +result  + "tambien aqui")
    this.setState({
      dataProducts: result,
      completeList: result,
    });
  }



  render() {
    var numCol: number = this.state.dataProducts.length
    return (
      <ImageBackground style={styles.container} source={require("../../../images/fondo6.jpg")}>

<ScrollView style={styles.container}>
      
      <View style={styless.localBox}>
          <View style={styless.container2}>
            <Text style={styless.title2}>Productos en Oferta</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate}}>
              <Text style={styless.link2}>Ver mas </Text>
            </TouchableOpacity>
          </View>
      </View>
            <ScrollView style={styless.horizontalScroll} horizontal={true}>
            <View>

            <FlatList //aqui pregunto si dataUsers tiene algun elemento, si lo tiene muestro la lista
                
                      data={this.state.dataProducts}
                      scrollEnabled={true}
                      numColumns={10}
                      renderItem={({item}) => {
                        return (
                          
                          <View  style={styless.card}>
                            
                            
                              <View style={{alignItems: "center"}}>
                              <Image
                                source={{uri :"http://192.168.100.9:8000"+item.uriimage}}
                                style={{ width: 100, height: 90}}
                              />
                              {/*<Avatar.Image size={100} style={styles.images} source={{uri :"http://192.168.100.9:8000"+item.uriimage}} />*/}
                              </View>
                              <View style={styless.cap2}>
                              <Text style={styless.title}>{item.name}</Text>
                              <Text style={styless.subtitle}>Stock disponible {item.stock}</Text>
                              </View>
        
                              <View style={styless.footer}>
                                <Text style={styless.price}>Bs {item.price}</Text>
                                <TouchableOpacity onPress={() => null} style={styless.button}>
                                <Image
                                  source={require('../../../images/pluss.png')}
                                  style={{ width: 40, height: 40}}
                                />
                                </TouchableOpacity>
                              </View>
                        </View>
                        );
                      }}
                      
                      keyExtractor={(item) => item._id}
                  /> 

                  



          </View>


                  
      </ScrollView>
      <View style={styless.localBox}>
          <View style={styless.container2}>
            <Text style={styless.title2}>Nuevos Productos</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate}}>
              <Text style={styless.link2}>Ver mas</Text>
            </TouchableOpacity>
          </View>
      </View>
      <ScrollView style={styless.horizontalScroll} horizontal={true}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <View style={styless.localBox}>


            <View style={styless.container2}>
            <Text style={styless.title2}>Productos mas Consumidos</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate}}>
              <Text style={styless.link2}>Ver mas </Text>
            </TouchableOpacity>
          </View>
        
       
      </View>
      <ScrollView style={styless.horizontalScroll} horizontal={true}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <View style={styless.scrollFooter} />
    </ScrollView>



      <FAB
            style={styles.fab}
            small={false}
            label="Agregar Bs "
            icon="plus"
            onPress={() => {
                this.props.navigation.push("RegisterP");
            }}
      />


  </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  images: {
    borderRadius: 10
  },
  containermap: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    width: 300,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:80,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    marginRight:100
  },
 });
 
const styless = EStyleSheet.create({
  localBox: {
    paddingHorizontal: 25.0,
  },
  container: {
    width: widthScreen,
    minHeight: heightScreen,
    paddingTop: 35.0,
    backgroundColor: '$whiteColour',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 26.48,
    height: 30.0,
  },
  locationBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontFamily: 'gilroyNormal600',
    fontSize: '1.125rem',
  },
  locationIcon: {
    marginRight: 5.0,
   
    
  },
  searchBox: {
    marginTop: 20.0,
  },
  banner: {
    marginTop: 20.0,
    width: widthScreen * 0.87,
    resizeMode: 'contain',
  },
  horizontalScroll: {
    paddingLeft: 20.0,
  },
  scrollFooter: {
    marginBottom: heightScreen * 0.15,
  },
  container2: {
    marginTop: 30.0,
    marginBottom: 20.0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title2: {
    fontFamily: '$gilroyNormal600',
    fontSize: '1.3rem',
    lineHeight: '1.3rem',
    color: '$blackColour',
  },
  link2: {
    fontFamily: '$gilroyNormal600',
    fontSize: '1rem',
    color: '#00BCD4',
  },

  card: {
    width: widthScreen * 0.42,
    maxHeight: heightScreen * 0.30,
    borderWidth: 2.0,
    borderColor: "#39A2DB",
    borderRadius: 10.0,
    padding: 15.0,
    flexDirection: 'column',
    marginRight: 15.0,
    backgroundColor: '#053742',
  },
  imageBox: {
    height: heightScreen * 0.11,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    
    color: 'rgb(248, 249, 249 )',
    fontFamily: '$gilroyNormal600',
    fontSize: '1rem',
    
  },
  subtitle: {
    color: 'rgb(248, 249, 249 )',
    fontFamily: '$gilroyMedium',
    fontSize: '0.825rem',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightScreen * 0.01,
  },
  cap2: {
  
    marginTop:15
  },
  price: {
    color: 'rgb(248, 249, 249 )',
    fontFamily: '$gilroyNormal600',
    fontSize: '1.125rem',
  },
  button: {
    backgroundColor: '#00BCD4',
    borderRadius: 25.0,
    padding: 3.0,
  },





});

  

export default SelecProduc;