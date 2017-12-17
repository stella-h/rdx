import { combineReducers } from 'redux';
import dishReducer from '../api';

const rootReducer = combineReducers({
  dishes: dishReducer,
});

export default rootReducer;
