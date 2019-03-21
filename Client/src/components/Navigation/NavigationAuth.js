import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import SignOutButton from '../SignOut';

const NavigationAuth = props => {
  const { session } = props;
  return (
    <ul>
      <li>
        <Link to={routes.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={routes.ACCOUNT}>
          Account ({session.me.username})
        </Link>
      </li>
      {session &&
        session.me &&
        session.me.role === 'ADMIN' && (
          <li>
            <Link to={routes.ADMIN}>Admin</Link>
          </li>
        )}
      <li>
        <SignOutButton />
      </li>
    </ul>
  );
};

NavigationAuth.propTypes = {};

export default NavigationAuth;
