import React, { Component } from 'react';
import { connect } from 'react-redux';

class MenuDetail extends Component {
  render() {

    const { selectedDish } = this.props;

    return (
      <div>
        <h4> More Information </h4>
        <ul className="list-group">
        <li className="list-group-item"> Name of dish: {selectedDish.name} </li>
        <li className="list-group-item"> Price: {selectedDish.price}</li>
        <li className="list-group-item"> Description: {selectedDish.description}</li>
        </ul>
      </div>
      );
  }
}

function mapStateToProps(state) {
  // console.log(state);

  return {
    selectedDish: state.selected,
  };
}

export default connect
(mapStateToProps)
(MenuDetail);
