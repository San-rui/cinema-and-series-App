import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { apiFirebase } from "../../utils/axios"
import { types } from "../types";

// export const processUser = () =>{

//     return async (dispatch: any) => {

//         dispatch(startUser());

//         dispatch(okUser("aca va el usuario"));

//         dispatch(DeniedUser(err));

//     }
// }

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