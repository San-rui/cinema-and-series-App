import { mapToArray } from "../../helpers";
import { Item } from "../../types";
import { apiFirebase } from "../../utils/axios"
import { types } from "../types";

//----------ADD ITEM TO FIREBASE------------

export const AddItemMovieAction = (data:any) => {
    return async (dispatch: any) => {
        dispatch(startMovieList ());
        try {
            await apiFirebase.post('/movieList.json', data);
            const response = await apiFirebase.get('/movieList.json');
            dispatch(okMovieList(mapToArray(response.data)));
        } catch (err) {
        dispatch(deniedMovieList (err));
        }
    };
};


const startMovieList= () => ({
    type: types.movieListItemstart,
    payload: [],
});

const okMovieList  = (data:Item[]) => ({
    type: types.movieListItemSuccess,
    payload: data,
});

const deniedMovieList = (err: any) => ({
    type: types.movieListItemError,
    payload: err.toString(),
});

//----------DELETE ITEM FROM FIREBASE------------

export const deleteMovieListItem = (itemID:string | undefined) => { 

    return async (dispatch:any)=>{

        dispatch(startMovieList())

        try {
            await apiFirebase.delete(`/movieList/${itemID}.json`);
            const response = await apiFirebase.get('/movieList.json');
            
            dispatch(okMovieList (mapToArray(response.data)));
        } catch (err) {
            dispatch(deniedMovieList(err));
        }
    };
    
};

export const getMovieAction = () => {
    return async (dispatch: any) => {
        dispatch(startMovieList());

        try {
            const response = await apiFirebase.get('/movieList.json');
        
            dispatch(okMovieList (mapToArray(response.data)));
        } catch (err) {
        dispatch(deniedMovieList(err));
        }
    };
};

