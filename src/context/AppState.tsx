import React, {useReducer} from "react";
import AppReducer, {ActionType} from "./AppReducer";
import AppContext from "./AppContext";
import {Types} from "./ContantTypes";
import { AsyncStorage } from "react-native";
import {ItemUser} from "../screens/users/TopTab/ClientsRegulars"
// Es el conjunto de datos
const DataState = (props: any) => {
    const initialState = {
        searchbarVisible: false,
        uriphoto: "",
        itemuser: {},
        changeswitchValue: false,
        itemclient:{},
    }
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const changeSearchBarVisible = (value: Boolean) => {
        dispatch({type: Types.SEARCHBARVISIBLE, payload: value});
    }
    const changeUri = (value: string) => {
        dispatch({type: Types.CHANGEURI, payload: value});
    }

    
    
    return (
        <AppContext.Provider value={{
        searchbarVisible: state.searchbarVisible, 
        changeSearchBarVisible, 
        uriphoto: state.uriphoto, 
        changeUri, 
        dispatch,
        itemuser: state.itemuser,
        itemclient:state.itemclient,
         }}>
            {props.children}
        </AppContext.Provider>
    )
}
export default DataState;
