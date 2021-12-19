import { mapToArray } from "../../helpers";
import { AddUserType, User } from "../../types";
import { apiFirebase } from "../../utils/axios"
import { types } from "../types";

export const getUsersAction = () => {
    return async (dispatch: any) => {
        dispatch(getUsersStart());

        try {
            const response = await apiFirebase.get("/users.json");
        
            dispatch(getUsersSuccess(mapToArray(response.data)));
        } catch (err) {
        dispatch(getUsersError(err));
        }
    };
};

export const addUserAction = (user: AddUserType) => {
    return async (dispatch: any) => {
        dispatch(getUsersStart());

        try {
        await apiFirebase.post("/users.json", user);
        } catch (err) {
            dispatch(getUsersError(err));
        }
    };
};

const getUsersStart = () => ({
    type: types.addUserstart,
    payload: [],
});

const getUsersSuccess = (data: User[]) => ({
    type: types.addUserSuccess,
    payload: data,
});

const getUsersError = (err: any) => ({
    type: types.addUserError,
    payload: err.toString(),
});

