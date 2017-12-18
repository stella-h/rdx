import React, { Component } from 'react';
import { connect } from 'react-redux';

class MenuDetail extends Component {
  render() {
    const { dish } = this.props;
    console.log(dish);

    return (
      <div>
        <h3> Details </h3>
        <div> name of dish:  </div>
        <div> price: </div>
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
