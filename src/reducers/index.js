import { combineReducers } from 'redux';
import dishReducer from '../api';
import selectDish from '../reducers/selectedDish';

const rootReducer = combineReducers({
  dishes: dishReducer,
  activeDish: selectDish,
});

export default rootReducer;
