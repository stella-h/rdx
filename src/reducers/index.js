// this is where we combine our reducers
import { combineReducers } from 'redux';
import dishReducer from '../api';
import selectDish from '../reducers/selectedDish';

const rootReducer = combineReducers({
  dishes: dishReducer,
  selected: selectDish,
});

export default rootReducer;
