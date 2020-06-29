import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import GoogleAuth from '../GoogleAuth';

function mapStateToProps(state) {
  return {};
}

class Header extends Component {
  render() {
    return (
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <Grid justify="space-between" container>
              <Grid item>
                <Button color="inherit" component={Link} to="/">
                  Streamer
                </Button>
                <Button color="inherit" component={Link} to="/">
                  Streams
                </Button>
              </Grid>

              <Grid item>
                <GoogleAuth />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);
