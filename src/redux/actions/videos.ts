import { Video } from "../../types";
import { apiCinema } from "../../utils/axios"
import { types } from "../types";

export const processVideos = (id:number) =>{

    return async (dispatch: any) => {

        dispatch(startCinemaList());

        try {
            
            const response = await apiCinema.get( `/movie/${id}/videos`);
            dispatch(okCinemaList(response.data.results));
            
        } catch (err) {
            dispatch(deniedCinemaList(err));
        }
    }
}

const startCinemaList = () => ({
    type: types.getVideosStart,
    payload: [],
});

const okCinemaList = (data: Video[]) => ({
    type: types.getVideosSuccess,
    payload: data,
});

const deniedCinemaList = (err:any) => ({
    type: types.getVideosError,
    error: {
        message: err,
    },
})