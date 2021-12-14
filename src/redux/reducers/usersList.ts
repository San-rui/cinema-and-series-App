import { User } from "../../types"
import { types } from "../types"

type UserState = {
    loading: boolean,
    items: User[]
    error: string
}

const intialState: UserState = {
    loading: false,
    items: [],
    error: ''
}

export const usersReducer = (state = intialState, action: any) => {

    switch(action.type) {
        case types.addUserstart :
            return {
                ...state,
                loading: true,
            }
        case types.addUserSuccess:
            return {
                ...state,
                items: action.payload,//aca debería estar cargado,
                loading: false
            }
        case types.addUserError :
            return {
                ...state,
                loading: false,
                error: "No se pudo obtener usuarios"
            }

        default : return state
    }
}


