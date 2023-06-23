import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const composeEnchancer = window.__REDUX_DEVTOOLS_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnchancer(applyMiddleware(thunkMiddleware))
);


export default store;