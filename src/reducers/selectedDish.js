// function nameOfReducer (previousState, action) {
//   return newState
// }

const initialState = {
  name: '--',
  price: '$0',
  description: '--',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'DISH_SELECTED':
      // return [ ...state, action.name];
      return action.name
  }
  return state;
}