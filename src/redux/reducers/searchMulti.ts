import { CinemaReducer, Item } from "../../types";
import { types } from "../types";

type SearchState = {
    loading: boolean,
    itemsSearch: Item[]
    error: string
}

const intialState: SearchState = {
    loading: false,
    itemsSearch: [],
    error: ''
}

export const searchMultiReducer = (state = intialState, action: CinemaReducer) => {

    switch(action.type) {
        case types.searchInit :
            return {
                ...state,
                loading: true,
            }

        case types.searchOk :
            return {
                ...state,
                itemsSearch: action.payload,
                loading: false
            }
            
        case types.searchError :
            return {
                ...state,
                loading: false,
                error: "No se pudo el listado de cinema"
            }

        default : return state
    }

}