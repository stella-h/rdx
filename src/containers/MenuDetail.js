import React, { Component } from 'react';
import { connect } from 'react-redux';

class MenuDetail extends Component {
  render() {
    const { dishes } = this.props;

    if (!dishes) return 'please select a dish';

    return (
      <div>

      </div>


      )
  }
}