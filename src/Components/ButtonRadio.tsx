import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const ButtonRadio = () => {
  const [value, setValue] = React.useState('first');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
       <View style={styles.container}>
        <View style={styles.container2}>
          <Text>CREDITO</Text>
          <RadioButton value="first" />
        </View>
        <View style={styles.container2}>
          <Text>CONTADO</Text>
          <RadioButton value="second" />
        </View>
       
      </View>
      
      
    </RadioButton.Group>
  );
};

const styles=StyleSheet.create({
  container:{
    flexDirection:"row",
    padding:4
    
    
  },
  container2:{
    alignContent:"center",
    marginLeft:60,
    padding:20
    
  }
});
export default ButtonRadio;
