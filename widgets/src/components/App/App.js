import React from 'react';
import { CssBaseline, Container, Grid, Paper } from '@material-ui/core';

import './App.css';
import Accordion from '../Accordion';
import Search from '../Search';

const items = [
  {
    title: 'What is React',
    content: 'React is a frontend framework',
  },
  {
    title: 'Why use React',
    content: 'React is favourite frontend framework',
  },
  {
    title: 'How do you use React',
    content: 'You use react by creating components',
  },
];

const App = () => {
  return (
    <div className="App" style={{ marginTop: '10px' }}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid>
          <Search />
          {/*<Accordion items={items} />*/}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
