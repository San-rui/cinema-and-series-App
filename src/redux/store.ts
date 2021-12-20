import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk'

import { usersReducer } from './reducers/usersList';
import { userReducer } from './reducers/user';
import { cinemaReducer } from './reducers/cinema';
import { CinemaFbReducer } from './reducers/dbCinema';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    users: usersReducer,
    user: userReducer,
    cinema: cinemaReducer,
    cinemaFb: CinemaFbReducer 
})

export const store = createStore(reducers, 
    composeEnhancers(applyMiddleware(thunk))
);