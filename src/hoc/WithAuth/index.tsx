import {FC} from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { Loading } from '../../components/Loading';

const publicRoutes = ["/login", "/sign-up"];
const userRoutes=["/details", "/movies", "/series", "/"]

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {

    const Authenticated: FC = (): JSX.Element | null => {

        const { push, location } = useHistory();
        
        const {  isUserLogged, currentUser } = useAuth();
        
        if ( isUserLogged === undefined ) return <Loading />;

        if ( isUserLogged && publicRoutes.includes(location.pathname)) push("/");

        if ( isUserLogged === false && !publicRoutes.includes(location.pathname))
            push("/login");

        if(  currentUser.role === 'user' && !userRoutes.includes(location.pathname))
        push("/movies");

        return <Component />;
    };

    return Authenticated;
};

export { WithAuth }