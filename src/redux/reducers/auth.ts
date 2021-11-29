import { types } from "../types"

const initialState = {
    data:[],
    loading: false

}


export const authReducer = (state=initialState, action: any) =>{
    switch(action.type) {

        case types.authInit:
            return {
                ...state,
                loading: true
            }

        case types.authOk:
            return {
                data:action.payload,
                loading: false
            }

        case types.authError:
            return {
                data: { errorCode:400 },
                loading: false
            }
        
        default :
            return state
    }

}