import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInputArtist: '',
      isSaveButtonDisabled: true,
    };
  }

  checkUserName = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        userInputArtist } = this.state;
      const minAtrr = 2;
      if (
        userInputArtist.length >= minAtrr) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  handleClick = () => {
    // this.setState({
    //   saveUserInit: true,
    // }, async () => {
    //   const { userInputName } = this.state;
    //   await createUser({ name: userInputName });
    //   this.setState({
    //     saveUserEnd: false,
    //     redirectSearch: true,
    //   });
    // });
  };

  render() {
    const {
      userInputArtist,
      isSaveButtonDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <label htmlFor="search-artist-input">
          <input
            type="text"
            data-testid="search-artist-input"
            value={ userInputArtist }
            name="userInputArtist"
            onChange={ this.checkUserName }
          />
        </label>
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          data-testid="search-artist-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}
