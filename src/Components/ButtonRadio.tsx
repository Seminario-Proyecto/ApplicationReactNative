import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const ButtonRadio = () => {
  const [value, setValue] = React.useState('first');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value} >
       <View style={styles.container}>
        <View>
          <Text>Mayorista</Text>
          <RadioButton value="first" />
        </View>
        <View>
          <Text>Empresario</Text>
          <RadioButton value="second" />
        </View>
      </View>
    </RadioButton.Group>
  );
};

const styles=StyleSheet.create({
  container:{
    flexDirection:"row"
  }
});
export default ButtonRadio;
