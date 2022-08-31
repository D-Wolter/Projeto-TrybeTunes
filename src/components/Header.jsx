import React, { Component } from 'react';
import Loading from './Loading';

export default class Header extends Component {
  componentDidMount() {
    this.mounthHeader();
  }

  render() {
    const { headerInit, headerEnd, showName, userInputName } = this.props;
    return (
      <header data-testid="header-component">
        { headerInit && headerEnd && <Loading /> }
        { showName
          && <p>
            `$
            {userInputName}
            `
          </p> };
      </header>
    );
  }
}

Header.propTypes = {
  headerInit: PropTypes.bool.isRequired,
  headerEnd: PropTypes.bool.isRequired,
};
