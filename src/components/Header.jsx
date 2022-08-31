import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      headerInit: false,
      headerEnd: true,
      displayName: false,
      logedName: '',
    };
  }

  componentDidMount() {
    this.setState({
      headerInit: true,
    });
    const userOnly = async () => {
      const userName = await getUser();
      this.setState({
        logedName: userName.name,
        headerEnd: false,
        displayName: true,
      });
    };
    userOnly();
  }

  render() {
    const {
      headerInit,
      headerEnd,
      displayName,
      logedName } = this.state;
    return (
      <header data-testid="header-component">
        <div>
          { headerInit && headerEnd && <Loading /> }
          { displayName && <p data-testid="header-user-name">{logedName}</p> }
        </div>
        <nav>
          <Link data-testid="link-to-search" to="/search">Search</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
          <Link data-testid="link-to-profile" to="/profile">Profile</Link>
        </nav>
      </header>
    );
  }
}
