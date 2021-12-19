import { Item } from "../../types";
import { apiCinema } from "../../utils/axios"
import { types } from "../types";

export const processSearchMulti = (pageNumber:number, search:string) =>{

    return async (dispatch: any) => {

        dispatch(startSearchMulti());

        try {
            const response = await apiCinema.get(`/search/multi?query=${search}&page=${pageNumber}`);
            dispatch(okSearchMulti(response.data.results));
            console.log("la resp", response.data.results)
        } catch (err) {
            dispatch(deniedSearchMulti(err));
        }
    }
}

const startSearchMulti = () => ({
    type: types.searchInit,
    payload: [],
});

const okSearchMulti = (data: Item[]) => ({
    type: types.searchOk,
    payload: data,
});

const deniedSearchMulti = (err:any) => ({
    type: types.searchError,
    error: {
        message: err,
    },
})