import React from 'react';
import PropTypes from 'prop-types';
import './TopBar';
const NavigationNonAuth = props => {
  return (
    <header className="header1">
      {/* Header desktop */}
      <div className="container-menu-header">
        {props.topBar}
        {props.menuBar}
      </div>
      {/* Header Mobile */}

      {props.topBarMobile}
      {props.menuBarMobile}
    </header>
  );
};

NavigationNonAuth.propTypes = {
  topBar: PropTypes.string.isRequired,
  // menuBar: propTypes.string.isRequired,
  // topBarMobile: propTypes.string.isRequired,
  // menuBarMobile: propTypes.string.isRequired,
};

export default NavigationNonAuth;
