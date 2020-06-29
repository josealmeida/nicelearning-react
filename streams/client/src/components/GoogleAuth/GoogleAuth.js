import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import '@fortawesome/fontawesome-free/js/all.min';

import { signIn, signOut } from '../../actions';

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <Button
          variant="outlined"
          color="inherit"
          component={Link}
          to="/"
          startIcon={<Icon className="fab fa-google" />}
          onClick={this.onSignOutClick}
        >
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button
          variant="outlined"
          color="inherit"
          component={Link}
          to="/"
          startIcon={<Icon className="fab fa-google" />}
          onClick={this.onSignInClick}
        >
          Sign In
        </Button>
      );
    }
  }

  render() {
    return <div className="google-auth">{this.renderAuthButton()}</div>;
  }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
