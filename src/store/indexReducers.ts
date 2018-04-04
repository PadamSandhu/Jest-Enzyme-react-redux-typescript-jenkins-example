import { combineReducers } from "redux";
import balance from "./reducers";
import bitcoin from "./bitcoinReducer";

export default combineReducers({ balance, bitcoin });