import { CinemaState, CinemaReducer } from "../../types";
import { types } from "../types";

const intialState: CinemaState = {
    loading: false,
    items: [],
    error: ''
}

export const cinemaReducer = (state = intialState, action: CinemaReducer) => {

    switch(action.type) {
        case types.cinemaInit :
            return {
                ...state,
                loading: true,
            }
            
        case types.cinemaOk :
            return {
                ...state,
                items: action.payload,
                loading: false
            }
            
        case types.cinemaError :
            return {
                ...state,
                loading: false,
                error: "No se pudo el listado de cinema"
            }

        default : return state
    }

}

