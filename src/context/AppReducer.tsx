import {Types} from "./ContantTypes";
export interface ActionType {
    type: string,
    payload: any
}
export default (state: any, action: ActionType) => {
    switch (action.type) {
        case Types.CHANGEITEMUSER: {
            return {
                ...state,
                itemuser: action.payload
            }
        }
        case Types.CHANGEURI: {
            return {
                ...state,
                uriphoto: action.payload
            }
        }
        case Types.SEARCHBARVISIBLE: {
            return {
                ...state,
                searchbarVisible: action.payload
            }
        }
        case Types.CHANGEITEMCLIENT: {
            return {
                ...state,
                itemclient: action.payload
            }
        }
        case Types.SIGN_IN: {
            return {
                ...state,
                SignIn:action.payload
            }
        }
        case Types.RESTORE_TOKEN:
            return {
              ...state,
              userToken: action.payload,
              
        };
        
        default: {
            return state;
        }
    }
}