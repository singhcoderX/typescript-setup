import { combineReducers } from "redux";
import Home from "../components/Home/store/HomeSlice";

const createReducer: any = () =>
  combineReducers({
    Home,
  });
export default createReducer;
