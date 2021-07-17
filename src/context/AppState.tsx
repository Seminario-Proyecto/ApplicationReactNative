import React, {useReducer} from "react";
import AppReducer, {ActionType} from "./AppReducer";
import AppContext from "./AppContext";
import {Types} from "./ContantTypes";
import { AppState, AsyncStorage } from "react-native";
import {IClients,IPedido,IRecibo} from "../screens/users/TopTab/ClientsRegulars"
import {ItemUser} from "../screens/users/TopTab/ClientsRegulars"
import axios from "axios"
import {IGoogleUser} from "./../screens/Login/Login"
// Es el conjunto de datos

interface ServerResponse {
    serverResponse:Array<IClients>
    //serverResponse:Array<IClients>
  }

 /* interface ServerResponse1 {
    serverResponse:Array<ItemUser>
    //serverResponse:Array<IClients>
  }
interface ServerResponseLogin {
    serverResponse: ItemUser | UserCreateError
}
interface ServerResponseLogin {
    serverResponse: ItemUser | UserCreateError
}
interface UserCreateError {
    driver: Boolean,
    name: string,
    index: number,
    code: number,
}*/



const DataState = (props: any) => 
{

    const initialState = {//variables
        searchbarVisible: false,//para el boton
        earchbarrVisible: false, //para mi otro  snak
        uriphoto: "",
        isLoadUriPhoto: false,
        itemuser: {},
        changeswitchValue: false,
        itemclient:{},
        SignIn: false,
        userToken: null,
        listclientsregulares:[],
        IsInTheTelephone: false,
        //serverErrorMessages:"",
        //userAuth: {}
        
    }
    const [state, dispatch] = useReducer(AppReducer, initialState);//esto siempre
    const changeSearchBarVisible = (value: Boolean) => {
        dispatch({type: Types.SEARCHBARVISIBLE, payload: value});
    }
    const changeSearchBarrVisible = (value: Boolean) => {
        dispatch({type: Types.SEARCHBARRVISIBLE, payload: value});
    }
    const changeUri = (value: string, IsInTheTelephone: Boolean) => {
        dispatch({type: Types.CHANGEURI, payload: value});
        dispatch({type: Types.ISINTHETELEPHONE, payload: IsInTheTelephone})
    }
    
    const photoloadclient = (value: boolean) => {
        dispatch({type: Types.PHOTOLOADCLIENT, payload: value});
    }

       /* const loginGoogle = async (user: IGoogleUser, callBack: Function) => 
 {
        var dataresult: any = await axios.post<ServerResponseLogin>("http://192.168.100.9:8000/api/users", {username: user.name, email: user.email, password: user.id});
        var result: any = dataresult.data;
        if (result.serverResponse.code != null) {
        //Login user 
        var loginr: any = await axios.post("http://192.168.100.9:8000/api/login", {email: user.email, password: user.id});
        if (loginr.data.serverResponse == "Credenciales incorrectas") {
          //  dispatch({type: Types.SETSERVERERRORMSN, payload: loginr.data.serverResponse});
            callBack(false);
        } else {
            dispatch({type: Types.SETAUTHUSER, payload: loginr.data.serverResponse});
            callBack(true);
        }
    
        }}*/

   /*const loadMainListClientsRegulares = async (idUs: string, token: any) =>{
        /*const {userToken}=this.context;
        const {_id} = userToken; 
        const {token} = userToken;
        const id: string = _id.toString();*/
       /* console.log("dentro del contexto "+token+" id: "+idUs)
        var direccion: string = "http://192.168.100.9:8000/client/client/tipo/Regular/"+idUs;
        console.log(direccion);
        var result: Array<IClients> = await axios.get<ServerResponse>(direccion, {
        headers: {
            "Authorization": token.toString() //esto manda el token para la verificación del rol
        }
        }).then((item) => {
        return item.data.serverResponse
        });
        if(result==undefined){
        result=[];
        }

        dispatch({type: Types.LOADCLIENTSREGULARES, payload: result})
    
    }*/
    
    
    return (  //envolver en papagina principal
        <AppContext.Provider value={{
        searchbarVisible: state.searchbarVisible, 
        changeSearchBarVisible, 
        searchbarrVisible: state.searchbarrVisible, 
        changeSearchBarrVisible, 
        uriphoto: state.uriphoto, 
        changeUri, 
        IsInTheTelephone: state.IsInTheTelephone,
        dispatch,
        itemuser: state.itemuser,
        itemclient:state.itemclient,
        SignIn: state.SignIn,
        userToken: state.userToken,
        listclientsregulares: state.listclientsregulares,
        isLoadUriPhoto: state.isLoadUriPhoto,
        photoloadclient,
        //userAuth: state.userAuth,
        //loginGoogle
        //serverErrorMessages: state.serverErrorMessages,
        /*loadMainListClientsRegulares */}}>
       {props.children}   
        </AppContext.Provider>//children a los  hijos
    )
    
}
export default DataState;
