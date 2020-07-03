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
    <div className="App">
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper style={{ marginTop: '10px' }}>
              {/*<Accordion items={items} />*/}
              <Search />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
