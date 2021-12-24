
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addUserAction, getUsersAction } from "../../redux/actions/usersList";
import { AddUserType, Store, User } from "../../types"

const useUsers = () => {

    const dispatch = useDispatch()

    const users = useSelector((state: Store<User>) => state.users);

    useEffect(() => {
        dispatch(getUsersAction());
    }, []);

    const addUser = async (datos: AddUserType) => {
        await dispatch(addUserAction(datos));
        getUsers();
    };

    const getUsers = async () => {
        dispatch(getUsersAction());
    };

    return { users, addUser };

}

export { useUsers}
