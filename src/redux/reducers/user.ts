import { types } from "../types"

const initialState = {

}


export const userReducer = (state=initialState, action: any) =>{
    switch(action.type) {

        case types.userInit:
            return {
                ...state,
            }

        case types.userOk:
            return {
                email: action.payload.email,
                sessionToken: action.payload.sessionToken,
            }

        case types.usersError:
            return {
                data: { errorCode:400 },
            }
        
        default :
            return state
    }

}