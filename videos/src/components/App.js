import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import { Container, CssBaseline } from '@material-ui/core';
import youtube from '../api/youtube';

class App extends React.Component {
  onTermSubmit = (term) => {
    console.log(term);
    youtube.get('/search', {
      params: {
        q: term,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Container maxWidth="md">
          <SearchBar onTermSubmit={this.onTermSubmit} />
        </Container>
      </div>
    );
  }
}

export default App;
