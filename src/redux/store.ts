import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk'

import { usersListReducer } from './reducers/usersList';
import { userReducer } from './reducers/user';

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
    usersList: usersListReducer,
    user: userReducer,
})

export const store = createStore(reducers, 
    composeEnhancers(applyMiddleware(thunk))
);