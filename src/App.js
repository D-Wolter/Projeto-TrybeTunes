import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInputName: '',
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
        userInputName } = this.state;
      const minAtrr = 3;
      if (
        userInputName.length >= minAtrr) {
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

  render() {
    const { userInputName, isSaveButtonDisabled } = this.state;
    return (
      <>
        <Route exact path="/">
          <Login
            userInputName={ userInputName }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            checkUserName={ this.checkUserName }
          />
        </Route>
        <Route exact path="/search" component={ Search } />
        <Route exact path="/album/:id" component={ Album } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route path="/" component={ NotFound } />
      </>
    );
  }
}

export default App;
