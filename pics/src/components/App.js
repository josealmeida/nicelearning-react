import React from 'react';
import unsplash from '../api/unsplash';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from './SearchBar';
import { Container } from 'semantic-ui-react';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} images
        </Container>
      </div>
    );
  }
}

export default App;
