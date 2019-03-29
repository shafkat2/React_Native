import {createStore, combineReducers} from 'redux';


import reducer from './Places';


const rootRedcuer = combineReducers({
    places: reducer
});

const configureStore = () => {
    return createStore(rootRedcuer);
}
export default configureStore;