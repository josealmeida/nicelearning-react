import React from 'react';
import { CssBaseline, Container, Grid, Paper } from '@material-ui/core';
import './App.css';
import PostList from '../PostList';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="md" style={{ marginTop: '10px' }}>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Paper>
              <PostList />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
