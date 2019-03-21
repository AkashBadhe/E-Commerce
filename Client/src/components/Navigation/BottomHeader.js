import React from 'react';
import PropTypes from 'prop-types';
import Search from './SearchBox';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const MyItemView = function({ item }) {
  return (
    <div className="user-data">
      <div>{item.id}</div>
      <div>{item.name}</div>
    </div>
  );
};

const BottomHeader = props => {
  const user = props.user;
  return (
    <div className="wrap_header">
      {/* Logo */}
      <a href="index.html" className="logo">
        <img
          src="http://localhost:8000/images/icons/logo.png"
          alt="IMG-LOGO"
        />
      </a>
      {/* Menu */}
      {/* Search */}
      <div className="pos-relative of-hidden search-box__container">
        <Search />
        <button className="flex-c-m size5 ab-r-m color1 color0-hov trans-0-4 search__button">
          <i className="fs-13 fa fa-search search__icon" aria-hidden="true" />
        </button>
      </div>

      {/* Header Icon */}
      <div className="header-icons">
        {!user ? (
          <>
            <span class="header__links">
              <Link to={routes.SIGN_IN}>SignIn</Link>
            </span>
            <span class="header__links">
              <Link to={routes.SIGN_UP}>SignUp</Link>
            </span>
          </>
        ) : (
          ''
        )}

        <span className="linedivide1" />
        <div className="header-wrapicon2">
          <img
            src="http://localhost:8000/images/icons/icon-header-02.png"
            className="header-icon1 js-show-header-dropdown"
            alt="ICON"
          />
          <span className="header-icons-noti">0</span>
          {/* Header cart */}
          <div className="header-cart header-dropdown">
            <ul className="header-cart-wrapitem">
              <li className="header-cart-item">
                <div className="header-cart-item-img">
                  <img
                    src="http://localhost:8000/images/item-cart-01.jpg"
                    alt="IMG"
                  />
                </div>
                <div className="header-cart-item-txt">
                  <a href="#" className="header-cart-item-name">
                    White Shirt With Pleat Detail Back
                  </a>
                  <span className="header-cart-item-info">
                    1 x $19.00
                  </span>
                </div>
              </li>
              <li className="header-cart-item">
                <div className="header-cart-item-img">
                  <img
                    src="http://localhost:8000/images/item-cart-02.jpg"
                    alt="IMG"
                  />
                </div>
                <div className="header-cart-item-txt">
                  <a href="#" className="header-cart-item-name">
                    Converse All Star Hi Black Canvas
                  </a>
                  <span className="header-cart-item-info">
                    1 x $39.00
                  </span>
                </div>
              </li>
              <li className="header-cart-item">
                <div className="header-cart-item-img">
                  <img
                    src="http://localhost:8000/images/item-cart-03.jpg"
                    alt="IMG"
                  />
                </div>
                <div className="header-cart-item-txt">
                  <a href="#" className="header-cart-item-name">
                    Nixon Porter Leather Watch In Tan
                  </a>
                  <span className="header-cart-item-info">
                    1 x $17.00
                  </span>
                </div>
              </li>
            </ul>
            <div className="header-cart-total">Total: $75.00</div>
            <div className="header-cart-buttons">
              <div className="header-cart-wrapbtn">
                {/* Button */}
                <a
                  href="cart.html"
                  className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
                >
                  View Cart
                </a>
              </div>
              <div className="header-cart-wrapbtn">
                {/* Button */}
                <a
                  href="#"
                  className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
                >
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BottomHeader.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default BottomHeader;
