import * as React from 'react';
import { Modal, Portal, Text, Button, Provider, } from 'react-native-paper';
import { View,TouchableHighlight ,StyleSheet} from 'react-native';
import Icons from "react-native-vector-icons/Feather"
import MyColors from "../color/MyColors";
const modal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider >
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      

                            <View  >    
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
                  
    </Provider>
  );
};
const styles=StyleSheet.create({
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
     
  });




export default modal;