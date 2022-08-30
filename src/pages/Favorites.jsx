import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Link to="/favorites">Favorites</Link>
      </div>
    );
  }
}
