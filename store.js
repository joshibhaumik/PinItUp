import { createStore, combineReducers } from 'redux'

const initialState = {};

const store = ()=> {
    createStore(initialState, combineReducers)
}

export default store;