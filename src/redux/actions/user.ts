import { User } from "../../types";
import { types } from "../types";

export const processUser = (user: User) =>{

    return async (dispatch: any) => {

        dispatch(startUser());
        try {
            dispatch(okUser(user));
        } catch (err) {
            dispatch(DeniedUser(err));
        }
    }
}

export const startUser = () => ({
    type: types.userInit,
    payload: [],
});

export const okUser = (data: User | undefined) => ({
    type: types.userOk,
    payload: data,
});

export const DeniedUser = (err:any) => ({
    type: types.usersError,
    error: {
        message: err,
    },
})