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
        <NavigationNonAuth
          menuBar={
            <BottomHeader
              onChange={this.onChange}
              onSelect={this.onSelect}
              user={session && session.me}
            />
          }
          topBar={<TopBar user={session && session.me} />}
          topBarMobile={<HeaderMobile />}
          menuBarMobile={<HeaderMenu />}
        />
        )
      </div>
    );
  }
}

export default Navigation;
