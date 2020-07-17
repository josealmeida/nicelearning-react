import React, { useState } from 'react';
import { CssBaseline, Container } from '@material-ui/core';

import './App.css';
import Accordion from '../Accordion';
import Search from '../Search';
import Dropdown from '../Dropdown';
import Translate from '../Translate';
import Route from '../Route';
import Header from '../Header';
import Paper from '@material-ui/core/Paper';

const accordionItems = [
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

const dropdownOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
];

const App = () => {
  const [selectedDropdown, setSelectedDropdown] = useState(dropdownOptions[0]);

  return (
    <div className="App" style={{ marginTop: '10px' }}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header />
        <Paper
          style={{
            marginTop: '10px',
            marginBottom: '10px',
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
        >
          <Route path="/">
            <Accordion items={accordionItems} />
          </Route>
          <Route path="/list">
            <Search />
          </Route>
          <Route path="/dropdown">
            <Dropdown
              label="Select a colour"
              options={dropdownOptions}
              selected={selectedDropdown}
              onSelectedChange={setSelectedDropdown}
            />
          </Route>
          <Route path="/translate">
            <Translate />
          </Route>
        </Paper>
      </Container>
    </div>
  );
};

export default App;
