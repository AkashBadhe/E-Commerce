import React from 'react';
import PropTypes from 'prop-types';

const TopBar = props => {
  const user = props.user;
  return (
    <div className="topbar">
      <div className="topbar-social">
        <a href="#" className="topbar-social-item fa fa-facebook" />
        <a href="#" className="topbar-social-item fa fa-instagram" />
        <a
          href="#"
          className="topbar-social-item fa fa-pinterest-p"
        />
        <a
          href="#"
          className="topbar-social-item fa fa-snapchat-ghost"
        />
        <a
          href="#"
          className="topbar-social-item fa fa-youtube-play"
        />
      </div>
      <span className="topbar-child1">
        Free shipping for standard order over $100
      </span>
      <div className="topbar-child2">
        {user ? (
          <span className="topbar-email">{user.username}</span>
        ) : (
          ''
        )}
        <div className="topbar-language rs1-select2">
          <select className="selection-1" name="time">
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
};

TopBar.propTypes = {};

export default TopBar;
