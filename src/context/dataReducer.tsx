export default (state: any, action: any) => {
    switch (action.type) {
        case "CHANGE": {
            return {
                ...state,
                data: action.payload
            }
            break;
        }
        default: {return state}
    }
}