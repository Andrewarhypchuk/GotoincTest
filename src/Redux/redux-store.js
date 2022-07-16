import {combineReducers, createStore} from "redux";
import baseReducer from "./base-reducer";

let reducers =  combineReducers({
         base:baseReducer
    }
)

let store = createStore(reducers);
window.store = store;
export default store;