import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      userProfile: {},
    };
  }

  componentDidMount() {
    const infoProfile = async () => {
      this.setState({
        loading: true,
      });
      const setUser = await getUser();
      this.setState({
        userProfile: setUser,
        loading: false,
      });
    };
    infoProfile();
  }

  render() {
    const { userProfile: { name, image, description, email }, loading } = this.state;
    return (
      <section>
        <Header />
        { loading ? <Loading /> : (
          <div data-testid="page-profile">
            <section>
              <img data-testid="profile-image" src={ image } alt={ name } />
              <h3>Nome</h3>
              <h2>{ name }</h2>
              <h3>E-mail</h3>
              <h2>{ email }</h2>
              <h3>Descrição</h3>
              <h2>{ description }</h2>
            </section>
            <Link to="/profile/edit">Editar perfil</Link>
          </div>
        )}
      </section>
    );
  }
}
