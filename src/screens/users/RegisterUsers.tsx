import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native"; 
import {TextInput, Button} from "react-native-paper";
import axios, { AxiosResponse } from "axios";
interface ItemUser{
    username?: string,
    email?: string,
    password?: string,
    repassword?: string
  }
interface Mystate {
    username: string,
    email: string,
    password: string,
    repassword: string
}
class RegisterUsers extends Component<any, Mystate> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: "", email: "", password: "", repassword:""
        }
    }
    async checkandSendData() {
        console.log(this.state);
        if (this.state.password != this.state.repassword) {
            return;
        }
        console.log("SEND");
        var result: any = await axios.post<ItemUser, AxiosResponse<any>>("http://192.168.0.106:8000/api/users", this.state);
        console.log(result);
        this.props.navigation.push("list");
    }
  render() {
    return (
        <View style= {styles.container}>
            <TextInput style={styles.txtStyles}
            label="User Name"
            onChangeText={text => {  
                this.setState({
                    username: text
                })
            }}/>
            <TextInput style={styles.txtStyles}
            label="Email"
            onChangeText={text => {   
                this.setState({
                    email: text
                })
            }}/>
            <TextInput style={styles.txtStyles}
            label="Password"
            onChangeText={text => {   
                this.setState({
                    password: text
                })
            }}/>
            <TextInput style={styles.txtStyles}
            label="Re. Password"
            onChangeText={text => {   
                this.setState({
                    repassword: text
                })
            }}/>
            <Button style={styles.txtStyles} icon="gnome" mode="contained" onPress={() => {
                this.checkandSendData();
            }}>
                Create
            </Button>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    txtStyles: {
        marginTop: 10
    }
}   
);
export default RegisterUsers;