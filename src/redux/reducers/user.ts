import { types } from "../types"

const initialState = {}

export const userReducer = (state=initialState, action: any) =>{
    switch(action.type) {

        case types.userInit:
            return {
                ...state,
            }

        case types.userOk:
            return action.payload?{
                email: action.payload.email,
                role: action.payload.role,
                name: action.payload.name,
                idDB: action.payload.idDB,
                sessionToken: action.payload.sessionToken,
            }: state

        case types.usersError:
            return {
                data: { errorCode:400 },
            }
        
        default :
            return state
    }

}