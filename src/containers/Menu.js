import React, { Component } from 'react';
import { connect } from 'react-redux'; //the money maker, the connector to redux.
import { bindActionCreators } from 'redux';

// action
import { selectDish } from '../actions/index';

class Menu extends Component {
  render() {
    const { dishes } = this.props;

    return (
      <div>
        <ul>
          {dishes.map( (dish, index) => (
            <li
              key={ index }
              onClick={ () => selectDish(dish) }
            >
              {dish.name}
            </li>
          ))}
        </ul>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    dishes: state.dishes
  }
// will show as prop in this component
// glue between react & redux
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectDish: selectDish }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

//container is a react component that has a direct connection to
//the state managed by redux