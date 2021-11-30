import { types } from "../types"

const initialState = {
    data:[],
    loading: false

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
                data: { errorCode:400 },
                loading: false
            }
        
        default :
            return state
    }

}