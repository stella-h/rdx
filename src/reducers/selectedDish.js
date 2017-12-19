const initialState = {
  name: [],
  price: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'DISH_SELECTED':
      // return [ ...state, action.name];
      return action.name
  }
  return state;
}