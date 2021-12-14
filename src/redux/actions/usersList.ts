import { mapToArray } from "../../helpers";
import { AddUserType, User } from "../../types";
import { apiFirebase } from "../../utils/axios"
import { types } from "../types";

export const processUsersList = () =>{

    return async (dispatch: any) => {

        dispatch(startUsersList());

        try {
            const response = await apiFirebase.get('/users.json');
            dispatch(okUsersList(mapToArray(response.data)));
        } catch (err) {
            dispatch(DeniedUsersList(err));
        }
    }

}



const startUsersList = () => ({
    type: types.usersListInit,
    payload: [],
});

const okUsersList = (data: User[]) => ({
    type: types.usersListhOk,
    payload: data,
});

const DeniedUsersList = (err:any) => ({
    type: types.usersListError,
    error: {
        message: err,
    },
})

