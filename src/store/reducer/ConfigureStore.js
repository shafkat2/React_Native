import {createStore, combineReducers, compose} from 'redux';


import {reducer} from './Places';


const rootRedcuer = combineReducers({
    places: reducer
});

let composeEnhancers = compose;

if(__DEV__){
    composeEnhancers = compose;
}

const configureStore = () => {
    return createStore(rootRedcuer,composeEnhancers());
}
export default configureStore;