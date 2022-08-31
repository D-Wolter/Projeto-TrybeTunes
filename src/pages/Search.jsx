import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <Link to="/search">Search</Link>
      </div>
    );
  }
}
