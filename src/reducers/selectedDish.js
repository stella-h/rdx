export default function(state = {}, action) {
  switch(action.type) {
    case 'DISH_SELECTED':
      return action.name;
  }
  return state;
}