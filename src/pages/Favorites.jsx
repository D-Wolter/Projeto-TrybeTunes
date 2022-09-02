import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import SongCard from '../components/SongCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      favorites: {},
    };
  }

  componentDidMount() {
    const getFavorites = async () => {
      await this.getFavoritsList();
    };
    getFavorites();
  }

  getFavoritsList = async () => {
    const listMusics = await getFavoriteSongs();
    this.setState({
      favorites: listMusics,
    });
  };

  removeFavorites(song) {
    const remove = async (item) => {
      this.setState({
        loading: true,
      }, async () => {
        await removeSong(item);
        await this.getFavoritsList();
        this.setState({
          loading: false,
        });
      });
    };
    remove(song);
  }

  render() {
    const { loading, favorites } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        { loading ? <Loading /> : favorites.map((song, index) => (
          <section key={ song.trackId }>
            <SongCard
              key={ song.trackNumber }
              trackName={ song.trackName }
              previewUr={ song.previewUrl }
            />
            <label htmlFor={ `${index}${song.trackName}` }>
              Favorita
              <input
                id={ `${index}${song.trackName}` }
                type="checkbox"
                data-testid={ `checkbox-music-${song.trackId}` }
                onClick={ () => this.removeFavorites(song) }
                defaultChecked={ favorites.length > 0 && (
                  favorites.some((item) => item.trackName === song.trackName)
                ) }
              />
            </label>

          </section>
        ))}
      </div>
    );
  }
}
