import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '../Link';

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">Accordion</Link>
          <Link href="/list">Search</Link>
          <Link href="/dropdown">Dropdown</Link>
          <Link href="/translate">Translate</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
