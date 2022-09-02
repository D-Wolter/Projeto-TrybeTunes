import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      userProfile: {},
      isDisabled: true,
      tempName: '',
      tempEmail: '',
      tempDescription: '',
      tempImage: '',
    };
  }

  componentDidMount() {
    const infoProfile = async () => {
      this.setState({
        loading: true,
      });
      const setUser = await getUser();
      this.setState({
        tempName: setUser.name,
        tempEmail: setUser.email,
        tempDescription: setUser.description,
        tempImage: setUser.image,
        loading: false,
      });
    };
    infoProfile();
  }

  newDataInfo = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        tempName, tempEmail, tempDescription, tempImage } = this.state;
      const minAtrr = 3;
      if (
        tempName.length > minAtrr
        && tempEmail.length > minAtrr
        && tempDescription.length > minAtrr
        && tempImage.length > minAtrr) {
        this.setState({
          isDisabled: false,
        });
      } else {
        this.setState({
          isDisabled: true,
        });
      }
    });
  };

  render() {
    const {
      tempName,
      tempDescription,
      tempEmail,
      tempImage,
      loading,
      isDisabled } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <div>
          { loading ? <Loading /> : (
            <form>
              <div>
                <img src={ tempImage } alt={ tempName } />
                <input
                  data-testid="edit-input-image"
                  name="tempImage"
                  type="text"
                  value={ tempImage }
                  onChange={ this.newDataInfo }
                />
              </div>
              <div>
                <h2>Nome</h2>
                <h3>Fique à vontade para usar seu nome social</h3>
                <input
                  data-testid="edit-input-name"
                  name="tempName"
                  value={ tempName }
                  type="text"
                  onChange={ this.newDataInfo }
                />
              </div>
              <div>
                <h2>E-Mail</h2>
                <h3>Escolha um e-mail queconsulte diariamente</h3>
                <input
                  data-testid="edit-input-email"
                  name="tempEmail"
                  value={ tempEmail }
                  type="text"
                  onChange={ this.newDataInfo }
                />
              </div>
              <div>
                <h2>Descrição</h2>
                <h3>Sobre mim</h3>
                <textarea
                  data-testid="edit-input-description"
                  name="tempDescription"
                  value={ tempDescription }
                  onChange={ this.newDataInfo }
                />
              </div>
              <button
                type="button"
                data-testid="edit-button-save"
                onClick={ this.handleSave }
                disabled={ isDisabled }
              >
                Salvar
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
}
