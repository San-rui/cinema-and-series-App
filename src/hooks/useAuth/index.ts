import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { User } from "../../types";
import { apiFirebase} from "../../utils";

import { okUser, processUser } from "../../redux/actions/user";
import { useUsers } from "..";

type StoreUser={
    user:User
}

const useAuth = ()  => {
    
    const [hasUserLoggedIn, setHasUserLoggedIn] = useState<boolean>();
    const currentUser =useSelector((store:StoreUser)=>store.user);

    const dispatch = useDispatch();
    const { users } =useUsers() ;
    const { push }= useHistory();

    const [ tokenStorage, setTokenStorage] = useState <string | undefined>(
        localStorage.getItem('user-token') || undefined)

    useEffect ( () => {
        loginWithToken()
        
    },[users])

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

    return { isUserLogged: !!(localStorage.getItem('user-token')),  
            login, 
            loginWithToken, 
            logout, 
            hasUserLoggedIn, 
            currentUser  
    }
}

export { useAuth }