import { legacy_createStore } from 'redux';

import { TodoReducer } from './Todo/Reducer';


const myStore = legacy_createStore(TodoReducer)

export {myStore}