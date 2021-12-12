import { Item } from "../../types";
import { types } from "../types";

type CinemaState = {
    loading: boolean,
    items: Item[]
    error: string
}

const intialState: CinemaState = {
    loading: false,
    items: [],
    error: ''
}

type CinemaReducer = {
    type: string,
    payload: Item[]
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

