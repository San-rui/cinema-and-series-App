
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addUserAction, getUsersAction } from "../../redux/actions/usersList";
import { AddUserType, Store, User } from "../../types"

type StoreUser={
    user:User
}

const useUsers = () => {

    const dispatch = useDispatch()

    const users = useSelector((state: Store<User>) => state.users);
    const currentUser =useSelector((store:StoreUser)=>store.user);

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

    const getUser = (id: string) => {

    };

    return { users, addUser, currentUser };

}

export { useUsers}
