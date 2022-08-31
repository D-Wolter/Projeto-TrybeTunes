import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
}
