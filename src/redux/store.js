import { combineReducers, createStore } from "redux";
import testReducer from "./test-reducer";

let reducers = combineReducers({
    test: testReducer
})

let store = createStore(reducers)

export default store;
window.store = store;