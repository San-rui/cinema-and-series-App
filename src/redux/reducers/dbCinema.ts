import { Item } from "../../types"
import { types } from "../types"

const initialState = {
    items: [],
    loading: false,
    error: '' 
}

type movieListReducer = {
    type: string ,
    payload: Item[],
}

export const CinemaFbReducer = (state=initialState, action: movieListReducer) =>{
    switch(action.type) {

        case types.movieListItemstart:
            return {
                ...state,
                loading: true,
            }

        case types.movieListItemSuccess:
            return {
                items: action.payload, 
                loading: false, 
            }

        case types.movieListItemError:
            return {
                error: { errorCode:400 },
                loading: false,
            }
        
        default :
            return state
    }

}