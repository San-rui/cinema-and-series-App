
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { addUserAction, getUsersAction, deleteUserAction } from "../../redux/actions/usersList";
import { AddUserType, Store, User } from "../../types"

const useUsers = () => {

    const dispatch = useDispatch();
    const { push }= useHistory();

    const users = useSelector((state: Store<User>) => state.users);

    useEffect(() => {
        dispatch(getUsersAction());
    }, []);

    const addUser = async (data: AddUserType) => {
        await dispatch(addUserAction(data));
        getUsers();
        push('/login')
    };

    const getUsers = async () => {
        dispatch(getUsersAction());
    };

    const removeUserfromList = (id: string) =>{
        dispatch(deleteUserAction(id))
        console.log('hook', id)
    }

    return { users, addUser, removeUserfromList };

}

export { useUsers}
