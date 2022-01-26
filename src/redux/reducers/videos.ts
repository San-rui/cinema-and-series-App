import { CinemaReducer, VideosState } from "../../types";
import { types } from "../types";

const intialState: VideosState = {
    loading: false,
    videos: [],
    error: ''
}

export const VideosReducer = (state = intialState, action: CinemaReducer) => {

    switch(action.type) {
        case types.getVideosStart :
            return {
                ...state,
                loading: true,
            }
            
        case types.getVideosSuccess:
            return {
                ...state,
                videos: action.payload,
                loading: false
            }
            
        case types.getVideosError :
            return {
                ...state,
                loading: false,
                error: "No se pudo el listado de cinema"
            }

        default : return state
    }

}