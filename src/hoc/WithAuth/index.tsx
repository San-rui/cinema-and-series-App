import {FC} from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { Loading } from '../../components/Loading';


const publicRoutes = ["/login", "/sign-up"];

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {
    const Authenticated: FC = (): JSX.Element | null => {
    const { push, location } = useHistory();
    
    const { hasUserLoggedIn } = useAuth();
    
    if (hasUserLoggedIn === undefined) return <Loading />;

    if (hasUserLoggedIn && publicRoutes.includes(location.pathname)) push("/");

    if (hasUserLoggedIn === false && !publicRoutes.includes(location.pathname))
        push("/login");

    return <Component />;
    };

    return Authenticated;
};

export { WithAuth }