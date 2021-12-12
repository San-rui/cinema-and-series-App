import { types } from "../types"

const initialState = {
    email:'',
    sessionToken:'',
    loading: false
}


export const userReducer = (state=initialState, action: any) =>{
    switch(action.type) {

        case types.userInit:
            return {
                ...state,
                loading: true
            }

        case types.userOk:
            return {
                email: action.payload.email,
                sessionToken: action.payload.accessToken,
                loading: false
            }

        case types.usersError:
            return {
                data: { errorCode:400 },
                loading: false
            }
        
        default :
            return state
    }

}