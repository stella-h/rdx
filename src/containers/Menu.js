// container is a react component that is bonded with the application state.
// If the state changes, the container will re-render and update.


import React, { Component, PropTypes } from 'react';
//the money maker, the connector to redux from react.
import { connect } from 'react-redux';
//this binds the action we have created
import { bindActionCreators } from 'redux';

import '../../style/style.css';

// action gets sent / dispatch on click
// we import the action to describe what will happen
import { selectDish } from '../actions/index';

class Menu extends Component {
  render() {

    const {
      dishes,       //these are our dishes from the api.
      selectDish
    } = this.props;


// onclick dispatches an action
    return (
      <div>
        <h4> Our Daily Specials </h4>
          <ul className="list-group">
            {dishes.map( (dish, index) => (
              <li
                key={index}
                onClick={() => selectDish(dish)}
                className="list-group-item"
              >
                {dish.name}
              </li>
            ))}
          </ul>
      </div>
      )
  }
}

Menu.propTypes = {
  dishes: PropTypes.array,
  selectDish: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    dishes: state.dishes
  }
// will show as prop in this component
// glue between react & redux
}

//whatever gets returned from this function, it will end up as a prop
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectDish }, dispatch)
  //makes sure the selected dish function is passing through the reducers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Menu);

//container is a react component that has a direct connection to
//the state managed by redux