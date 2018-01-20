// this is our action, as mentioned, it's a plain object that has to have TYPE
// to indicate the 'type of action' being performed.
// type is usually defined as a string constant. once your application grows,
// it is common practive to move them to a seperate module.
// remember that action has to be written as pure function, that means no callbacks or no promises.


export function selectDish(dish) {
  // console.log(`You have selected ${dish.name}`)
  return {
    type: 'DISH_SELECTED',
    name: dish,
  };
}