import React from 'react';
import Button from '@material-ui/core/Button';

const Link = ({ href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <Button color="inherit" onClick={onClick}>
      {children}
    </Button>
  );
};

export default Link;
