import { ActionType } from "../ActionType"

let initialValue = {
    data: []
}

const AuthReducer = (state = initialValue, action) => {
    
    switch (action.type) {
        case ActionType.REGISTER:
            return ({
                    ...state,
                    data:[...state.data,action.payload]
                }
            )
        
        default:
            return state
    }
}
export default AuthReducer