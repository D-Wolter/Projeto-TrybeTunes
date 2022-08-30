import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

export default class Login extends Component {
  render() {
    const { userInputName, isSaveButtonDisabled, checkUserName } = this.props;
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
            onChange={ () => checkUserName }
          />
        </label>
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          id="loginbutton"
          data-testid="login-submit-button"
          onClick={ () => {
            createUser({ name: `${userInputName}` });
          } }
        >
          Entrar
        </button>
        { <p>Carregando...</p>}
      </div>
    );
  }
}

Login.propTypes = {
  userInputName: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  checkUserName: PropTypes.func.isRequired,
};
