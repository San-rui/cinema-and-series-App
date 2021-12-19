import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk'

import { usersReducer } from './reducers/usersList';
import { userReducer } from './reducers/user';
import { cinemaReducer } from './reducers/cinema';
import { searchMultiReducer } from './reducers/searchMulti';

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
    searchMulti: searchMultiReducer,
})

export const store = createStore(reducers, 
    composeEnhancers(applyMiddleware(thunk))
);