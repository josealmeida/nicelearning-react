import React from 'react';
import axios from 'axios';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from './SearchBar';
import { Container } from 'semantic-ui-react';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
      },
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
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
