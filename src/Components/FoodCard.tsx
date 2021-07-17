
import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';



const {width: widthScreen, height: heightScreen} = Dimensions.get('screen');

class FoodCard extends Component<any, any> {
render() {

  return (
    <View style={styles.conta}>
      <View>
              <TouchableOpacity onPress={() => null} style={styles.card}>
                <View style={styles.imageBox}>
                <Image
                    source={require('../../images/casar.jpeg')}
                    style={{ width: 100, height: 90}}
                  />
                </View>
                <View style={styles.cap2}>
                <Text style={styles.title}>Casa Real Negra</Text>
                <Text style={styles.subtitle}>1Ltr</Text>
                </View>

                <View style={styles.footer}>
                  <Text style={styles.price}>Bs. 140</Text>
                  <TouchableOpacity onPress={() => null} style={styles.button}>
                  <Image
                    source={require('../../images/pluss.png')}
                    style={{ width: 40, height: 40}}
                  />
                  </TouchableOpacity>
                  
                </View>
              </TouchableOpacity>
              
              
      </View>
    <View>

    <TouchableOpacity onPress={() => null} style={styles.card}>
      <View style={styles.imageBox}>
      <Image
          source={require('../../images/bebida2.jpeg')}
          style={{ width: 100, height: 90}}
        />
      </View>
      <View style={styles.cap2}>
      <Text style={styles.title}>Bacardi de Limon </Text>
      <Text style={styles.subtitle}>1Ltr</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>Bs. 280</Text>
        <TouchableOpacity onPress={() => null} style={styles.button}>
        <Image
          source={require('../../images/pluss.png')}
          style={{ width: 40, height: 40}}
        />
        </TouchableOpacity>
        
      </View>
    </TouchableOpacity>
    </View>


    <View>

    <TouchableOpacity onPress={() => null} style={styles.card}>
      <View style={styles.imageBox}>
      <Image
          source={require('../../images/bebida3.jpeg')}
          style={{ width: 100, height: 90}}
        />
      </View>
      <View style={styles.cap2}>
      <Text style={styles.title}>Bacardi de Limon </Text>
      <Text style={styles.subtitle}>1Ltr</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>Bs. 280</Text>
        <TouchableOpacity onPress={() => null} style={styles.button}>
        <Image
          source={require('../../images/pluss.png')}
          style={{ width: 40, height: 40}}
        />
        </TouchableOpacity>
        
      </View>
    </TouchableOpacity>
    </View>






    </View>
    
    
  );

}}
const styles = EStyleSheet.create({
  card: {
    width: widthScreen * 0.42,
    maxHeight: heightScreen * 0.28,
    borderWidth: 2.0,
    borderColor: "#39A2DB",
    borderRadius: 10.0,
    padding: 15.0,
    flexDirection: 'column',
    marginRight: 15.0,
    backgroundColor: '#053742',
  },
  conta: {
    flexDirection: "row",
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
  
    marginTop:11
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

export default FoodCard;


