import React from 'react';
import axios from 'axios';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from './SearchBar';
import { Container } from 'semantic-ui-react';

class App extends React.Component {
  onSearchSubmit = (term) => {
    axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID',
      },
    });
    console.log(term);
  };

  render() {
    return (
      <div className="App">
        <Container>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </Container>
      </div>
    );
  }
}

export default App;
