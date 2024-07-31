import { legacy_createStore } from "redux";
import reduxReducer from "./reduxReducer";

const reduxStore = legacy_createStore(reduxReducer);

export default reduxStore;