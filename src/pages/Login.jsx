import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Login extends Component {
  render() {
    const {
      userInputName,
      isSaveButtonDisabled,
      checkUserName,
      saveUserInit,
      handleClick,
      saveUserEnd,
      redirectSearch } = this.props;
    return (
      <div data-testid="page-login">
        <Link to="/">Login</Link>
        <label htmlFor="login-name-input">
          <input
            type="text"
            data-testid="login-name-input"
            id="login-name-input"
            value={ userInputName }
            name="userInputName"
            onChange={ checkUserName }
          />
        </label>
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          id="loginbutton"
          data-testid="login-submit-button"
          onClick={ handleClick }
        >
          Entrar
        </button>
        { saveUserInit && saveUserEnd && <p>Carregando...</p> }
        { redirectSearch && <Redirect to="/search" /> }
      </div>
    );
  }
}

Login.propTypes = {
  userInputName: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  checkUserName: PropTypes.func.isRequired,
  saveUserInit: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  saveUserEnd: PropTypes.bool.isRequired,
  redirectSearch: PropTypes.bool.isRequired,
};
