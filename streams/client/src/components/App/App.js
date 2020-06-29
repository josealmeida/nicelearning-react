import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import StreamList from '../streams/StreamList';
import StreamCreate from '../streams/StreamCreate';
import StreamEdit from '../streams/StreamEdit';
import StreamDelete from '../streams/StreamDelete';
import StreamShow from '../streams/StreamShow';
import Header from '../Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item md={12}>
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" component={StreamCreate} />
              <Route path="/streams/edit" component={StreamEdit} />
              <Route path="/streams/delete" component={StreamDelete} />
              <Route path="/streams/show" component={StreamShow} />
            </Grid>
          </Grid>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
