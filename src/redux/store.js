import { combineReducers, createStore, applyMiddleware } from "redux";
import testReducer from "./test-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    test: testReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;
window.store = store;