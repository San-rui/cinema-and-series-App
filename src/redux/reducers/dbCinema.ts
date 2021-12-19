import { types } from "../types"

const initialState = {}

export const CinemaFbReducer = (state=initialState, action: any) =>{
    switch(action.type) {

        case types.addItemstart:
            return {
                ...state,
            }

        case types.addItemSuccess:
            return {
                email: action.payload.email,
                role: action.payload.role,
                name: action.payload.name,
                id: action.payload.idDB,
                sessionToken: action.payload.sessionToken,
            }

        case types.addItemError:
            return {
                data: { errorCode:400 },
            }
        
        default :
            return state
    }

}