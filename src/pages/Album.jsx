import React, { Component } from 'react';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import Loading from '../components/Loading';

export default class Album extends Component {
  state = {
    musicas: [],
    favoritadas: [],
    loading: false,
  };

  componentDidMount() {
    const getListMusic = async () => {
      const { match: { params: { id } } } = this.props;

      const listMusics = await getMusics(id);

      this.setState({
        musicas: listMusics
      });
    };
    getListMusic();
  }

  render() {
    return (
      <div data-testid="page-album">
        <Header />
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
