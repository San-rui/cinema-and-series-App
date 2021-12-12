import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../../api/firebase";

import { mapToArray } from "../../helpers"
import { User } from "../../types";
import { apiFirebase} from "../../utils";

import { store } from "../../redux/store"
import { okUser } from "../../redux/actions/user";

type Store={
    user:{ 
        data: User
    }
}

const useAuth = ()  => {
    
    const dispatch = useDispatch();
    const { data } = useSelector((state: Store) => state.user)


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
            await apiFirebase.patch(`/users/${user.id}.json`, { sessionToken: newToken });
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
                const response = await apiFirebase.get("/users.json");
            
                /* Tarea de backend */
                const users: User[] = mapToArray(response.data);
            
                const user = users.find(
                    (user) => user.email === email && user.password === password
                );
            
                if (user) {
                    // Definir un token
                    const token = await createUserToken(user);
            
                    if (token) {
                    setTokenStorage(token)
                    //setCurrentUser(user);
                    dispatch(okUser(user))
                    
                    }else{
                        //esto lo agregue con ceci
                        setHasUserLoggedIn(false)

                    }
                } else {
                    throw new Error("El usuario no existe");
                }
                /* / Tarea de backend */
                } catch (e) {
                console.log(e);
                }
        };

        const loginWithToken = async () => {
            let user;
            try {
                const response = await apiFirebase.get("/users.json");
            
                /* Tarea de backend */
                const users: User[] = mapToArray(response.data);
            
                if (tokenStorage) {
                    user = users.find((user) => user.sessionToken === tokenStorage);
                }
            
                if (user) {
                    dispatch(okUser(user))
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
            //setCurrentUser(undefined)
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

    return {  login, loginWithToken, logout, signUp, hasUserLoggedIn  }
}

export { useAuth }