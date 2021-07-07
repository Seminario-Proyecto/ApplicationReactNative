import React, {useReducer} from "react";
import AppReducer, {ActionType} from "./AppReducer";
import AppContext from "./AppContext";
import {Types} from "./ContantTypes";
import { AsyncStorage } from "react-native";
import {ItemUser} from "../screens/users/TopTab/ClientsRegulars"
// Es el conjunto de datos
const DataState = (props: any) => {
    const initialState = {//variables
        searchbarVisible: false,//para el boton
        earchbarrVisible: false, //para mi otro  snak
        uriphoto: "",
        itemuser: {},
        changeswitchValue: false,
        itemclient:{},
        SignIn: false,
        userToken: null,
    }
    const [state, dispatch] = useReducer(AppReducer, initialState);//esto siempre
    const changeSearchBarVisible = (value: Boolean) => {
        dispatch({type: Types.SEARCHBARVISIBLE, payload: value});
    }
    const changeSearchBarrVisible = (value: Boolean) => {
        dispatch({type: Types.SEARCHBARRVISIBLE, payload: value});
    }
    const changeUri = (value: string) => {
        dispatch({type: Types.CHANGEURI, payload: value});
    }


    
    
    return (  //envolver en papagina principal
        <AppContext.Provider value={{
        searchbarVisible: state.searchbarVisible, 
        changeSearchBarVisible, 
        searchbarrVisible: state.searchbarrVisible, 
        changeSearchBarrVisible, 
        uriphoto: state.uriphoto, 
        changeUri, 
        dispatch,
        itemuser: state.itemuser,
        itemclient:state.itemclient,
        SignIn: state.SignIn,
        userToken: state.userToken }}>
       {props.children}   
        </AppContext.Provider>//children a los  hijos
    )
}
export default DataState;
