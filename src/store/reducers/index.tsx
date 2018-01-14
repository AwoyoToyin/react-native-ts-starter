import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';

export default combineReducers({
    // all reducers goes in here
    crypto: CryptoReducer
});
