import React from 'react';
import { Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import withSession from '../Session/withSession';
import Shop from '../Container/Shop';
import Features from '../Container/Features';
import Blog from '../Container/Blog';
import About from '../Container/About';
import Contact from '../Container/Contact';

import * as routes from '../../constants/routes';
import history from '../../constants/history';

const App = ({ session, refetch }) => (
  <Router history={history}>
    <div>
      <Navigation session={session} />

      <hr />

      <Route
        exact
        path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact
        path={routes.SIGN_UP}
        component={() => <SignUpPage refetch={refetch} />}
      />
      <Route
        exact
        path={routes.SIGN_IN}
        component={() => <SignInPage refetch={refetch} />}
      />
      <Route
        exact
        path={routes.ACCOUNT}
        component={() => <AccountPage />}
      />
      <Route exact path={routes.SHOP} component={() => <Shop />} />
      <Route
        exact
        path={routes.FEATURES}
        component={() => <Features />}
      />
      <Route exact path={routes.BLOG} component={() => <Blog />} />
      <Route exact path={routes.ABOUT} component={() => <About />} />
      <Route
        exact
        path={routes.CONTACT}
        component={() => <Contact />}
      />
    </div>
  </Router>
);

export default withSession(App);
