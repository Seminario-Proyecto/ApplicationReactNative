import React, {useReducer} from "react";
import dataReducer from "./dataReducer";
import DataContext from "./dataContext";
const DataState = (props: any) => {
    const initialState = {
        data: Boolean
    }
    const [state, dispatch] = useReducer(dataReducer, initialState);
    const testFunction = (value: boolean) => {
        dispatch({type: "CHANGE", payload: value});
    }
    return (
        <DataContext.Provider value={{data: state.data, testFunction}}>
            {props.children}
        </DataContext.Provider>
    );
}
export default DataState;