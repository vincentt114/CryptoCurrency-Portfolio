import { combineReducers } from 'redux';
import mainReducer from './mainreducers';

const reducers = combineReducers ({
    rows: mainReducer,
});

export default reducers;