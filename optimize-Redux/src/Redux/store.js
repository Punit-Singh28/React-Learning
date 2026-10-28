import { legacy_createStore } from "redux";

// import { CartReducer } from "./ReduxCart/CartReducer";
import { Reducer } from './Reducer/Reducer';

const myStore = legacy_createStore(Reducer);

export { myStore };
