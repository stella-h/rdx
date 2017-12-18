import React, { Component } from 'react';
import Menu from '../containers/Menu';
import MenuDetail from '../containers/MenuDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <MenuDetail />
      </div>
    );
  }
}
