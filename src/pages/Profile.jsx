import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
}
