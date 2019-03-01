import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BottomHeader from './BottomHeader';
import NavigationNonAuth from './NavigationNonAuth';
import NavigationAuth from './NavigationAuth';
import HeaderMobile from './HeaderMobile';
import HeaderMenu from './HeaderMenu';
import TopBar from './TopBar';
export class Navigation extends Component {
  propTypes = {
    session: PropTypes.object,
  };

  onChange = query => {
    fetch('/users/search?q=' + query).then(result => {
      this.refs.autocomplete.setItems(result.body);
    });
  };

  onSelect(user) {
    this.setState({
      selectedUser: user,
    });
    return user.getName();
  }

  render() {
    const { session } = this.props;
    return (
      <div>
        {session && session.me ? (
          <NavigationAuth session={session} />
        ) : (
          <NavigationNonAuth
            menuBar={
              <BottomHeader
                onChange={this.onChange}
                onSelect={this.onSelect}
              />
            }
            topBar={<TopBar />}
            topBarMobile={<HeaderMobile />}
            menuBarMobile={<HeaderMenu />}
          />
        )}
      </div>
    );
  }
}

export default Navigation;
