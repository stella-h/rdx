import React, { Component } from 'react';
import { connect } from 'react-redux';

class MenuDetail extends Component {
  render() {
    const { dish } = this.props;

    if (!dish)  { return <div> select a dish </div> }

    return (
      <div>
        <h3> Details </h3>
        <div> name of dish: {dish.name} </div>
        <div> price: {dish.price}</div>
      </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    dish: state.activeDish,
  };
}

export default connect(mapStateToProps)(MenuDetail);
