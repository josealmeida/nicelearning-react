import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import unsplash from '../api/unsplash';
import './App.css';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

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
          <Segment.Group raised>
            <Segment>
              <SearchBar onSubmit={this.onSearchSubmit} />
            </Segment>
            <Segment padded>
              <ImageList images={this.state.images} />
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    );
  }
}

export default App;
