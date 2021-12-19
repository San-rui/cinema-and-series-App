import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../../api/firebase";

import { mapToArray } from "../../helpers"
import { User, UserStore } from "../../types";
import { apiFirebase} from "../../utils";

import { okUser, processUser } from "../../redux/actions/user";
import { useUsers } from "..";

type Store={
    user:UserStore
}

const useAuth = ()  => {
    
    const dispatch = useDispatch();

    const userLogged =useSelector((store:Store)=>store.user)

    const {users} =useUsers() 

    const [ tokenStorage, setTokenStorage] = useState <string | undefined>(
        localStorage.getItem('user-token') || undefined)

    const [hasUserLoggedIn, setHasUserLoggedIn] = useState<boolean>();
    const { push }= useHistory();

    useEffect ( () => {
        loginWithToken()
    },[])

    const createUserToken = async (user: User): Promise<string | null> => {
        try {
            const newToken = Math.random().toString(36).substr(2);
            await apiFirebase.patch(`/users/${user.idDB}.json`, { sessionToken: newToken });
            return newToken;
            } catch (err) {
            return null;
            }
    };

    useEffect ( () => {
        if(tokenStorage) localStorage.setItem('user-token', tokenStorage)
    },[tokenStorage])

    const login = async (email: string, password: string) => {
        try {
            
            const user = users.items?.find(
                (user) => user.email === email && user.password === password
            );
            console.log(user)
        
            if (user) {
                
                const token = await createUserToken(user);
        
                if (token) {
                setTokenStorage(token)
                dispatch(processUser({...user, sessionToken: token}))
                
                }else{
                    setHasUserLoggedIn(false)

                }
            } else {
                throw new Error("El usuario no existe");
            }

            } catch (e) {
            console.log(e);
            }
    };

        const loginWithToken = async () => {
            let user;
            try {

                if (tokenStorage) {
                    user = users.items?.find((user) => user.sessionToken === tokenStorage);
                }
            
                if (user) {
                    dispatch(processUser(user))
                    setHasUserLoggedIn(true);
                } else {
                    setHasUserLoggedIn(false);
                }
            } catch (e) {
              // console.log(e);
            }
        };

        const logout = () => {
            localStorage.removeItem('user-token')
            push('/login')
            dispatch(okUser(undefined))
        };

        const signUp = async(data: Omit<User, 'id'>) => {
            try {
                await signup(data);
                push('/login')
                
            } catch (err) {
                console.log(err);
                }
        };

    return { isUserLogged: !!(localStorage.getItem('user-token')),  login, loginWithToken, logout, signUp, hasUserLoggedIn }
}

export { useAuth }