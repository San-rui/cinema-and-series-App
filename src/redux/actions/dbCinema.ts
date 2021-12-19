import { mapToArray } from "../../helpers";
import { apiFirebase } from "../../utils/axios"
import { types } from "../types";

export const AddItemMovieAction = (data:any) => {
    return async (dispatch: any) => {
        dispatch(AddItemStart ());
        try {
            const response = await apiFirebase.post('/movieList.json', data);
        
            dispatch(AddItemSuccess(mapToArray(response.data)));
        } catch (err) {
        dispatch(AddItemError (err));
        }
    };
};


const AddItemStart = () => ({
    type: types.addUserstart,
    payload: [],
});

const AddItemSuccess = (data:any) => ({
    type: types.addUserSuccess,
    payload: data,
});

const AddItemError = (err: any) => ({
    type: types.addUserError,
    payload: err.toString(),
});