import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <Link to="/profile/edit">ProfileEdit</Link>
      </div>
    );
  }
}
