import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import { Container, Grid, CssBaseline, Paper } from '@material-ui/core';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper>
                <SearchBar onTermSubmit={this.onTermSubmit} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <VideoDetail video={this.state.selectedVideo} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
