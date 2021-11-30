import { types } from "../types"

const initialState = {
    email:'',
    accessToken:'',
    password: '',
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
                accessToken: action.payload.accessToken,
                password: action.payload.password,
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