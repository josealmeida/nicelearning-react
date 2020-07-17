import React, { useState } from 'react';
import { CssBaseline, Container, Grid, Paper } from '@material-ui/core';

import './App.css';
import Accordion from '../Accordion';
import Search from '../Search';
import Dropdown from '../Dropdown';
import Button from '@material-ui/core/Button';
import Translate from '../Translate';

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

const options = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
];

const App = () => {
  return (
    <div className="App" style={{ marginTop: '10px' }}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Translate />
      </Container>
    </div>
  );
};

export default App;
