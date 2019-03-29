import {createStore, combineReducers} from 'redux';


import Places from './Places';


const rootRedcuer = combineReducers({
    places: Places
})

const configureStore = () => {
    return createStore(rootRedcuer);
}