import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <Link to="/favorites">Favorites</Link>
      </div>
    );
  }
}
