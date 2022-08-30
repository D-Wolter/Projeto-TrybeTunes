import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Link to="/profile/edit">ProfileEdit</Link>
      </div>
    );
  }
}
