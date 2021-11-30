import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { apiFirebase } from "../../utils/axios"
import { types } from "../types";

export const processUser = () =>{

    return async (dispatch: any) => {

        dispatch(startUser());

        try {
            const response = await apiFirebase.get('/users.json');
            dispatch(okUser(mapToArray(response.data)));
        } catch (err) {
            dispatch(DeniedUser(err));
        }
    }
}

const startUser = () => ({
    type: types.userInit,
    payload: [],
});

const okUser = (data: User[]) => ({
    type: types.userOk,
    payload: data,
});

const DeniedUser = (err:any) => ({
    type: types.usersError,
    error: {
        message: err,
    },
})