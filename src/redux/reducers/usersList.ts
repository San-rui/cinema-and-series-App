import { types } from "../types"

type UserState ={

}

const initialState = {
    data:[],
    loading: false,
    error: ''

}


export const usersListReducer = (state=initialState, action: any) =>{
    switch(action.type) {

        case types.usersListInit:
            return {
                ...state,
                loading: true
            }

        case types.usersListhOk:
            return {
                data: action.payload,
                loading: false
            }

        case types.usersListError:
            return {
                ...state,
                loading: false,
                error: 'no se ejecuto correctamente'
            }
        
        default :
            return state
    }

}