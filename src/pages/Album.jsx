import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <Link to="/album/:id">Album</Link>
      </div>
    );
  }
}
