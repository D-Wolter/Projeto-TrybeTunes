import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <Link to="/album/:id">Album</Link>
      </div>
    );
  }
}
