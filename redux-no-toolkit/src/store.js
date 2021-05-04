import { createStore, combineReducers } from "redux";
import homePage from "./containers/HomePage/reducers";
import userPage from "./containers/UserPage/reducer";
//createStore may be replaced configureStore toolkit

const reducers = combineReducers({ homePage, userPage });

export default createStore(reducers);
