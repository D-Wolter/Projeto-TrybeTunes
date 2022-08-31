import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

export default class Header extends Component {
  // componentDidMount() {
  //   this.mounthHeader();
  // }

  render() {
    const {
      headerInit,
      headerEnd,
      displayName,
      userInputName,
      mounthHeader } = this.props;
    return (
      <head data-testid="header-component">
        { headerInit && headerEnd && <Loading /> }
        { displayName && <p>{userInputName}</p> }
        { mounthHeader }
      </head>
    );
  }
}

Header.propTypes = {
  headerInit: PropTypes.bool.isRequired,
  headerEnd: PropTypes.bool.isRequired,
  displayName: PropTypes.bool.isRequired,
  userInputName: PropTypes.string.isRequired,
  mounthHeader: PropTypes.func.isRequired,
};
