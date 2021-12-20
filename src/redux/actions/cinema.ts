
import { Item } from "../../types";
import { apiCinema } from "../../utils/axios"
import { types } from "../types";

export const processCinemaList = (pageNumber:number, search:string) =>{

    return async (dispatch: any) => {

        dispatch(startCinemaList());

        try {
            if(search){
                const response = await apiCinema.get(`/search/multi?query=${search}&page=${pageNumber}`);
                dispatch(okCinemaList(response.data.results));
            }else{
                const response = await apiCinema.get(`/movie/top_rated?page=${pageNumber}`);
                dispatch(okCinemaList(response.data.results));
            }
            
        } catch (err) {
            dispatch(deniedCinemaList(err));
        }
    }

}

const startCinemaList = () => ({
    type: types.cinemaInit,
    payload: [],
});

const okCinemaList = (data: Item[]) => ({
    type: types.cinemaOk,
    payload: data,
});

const deniedCinemaList = (err:any) => ({
    type: types.cinemaError,
    error: {
        message: err,
    },
})