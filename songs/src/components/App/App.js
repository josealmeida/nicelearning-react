import React from "react";
import "./App.css";
import { CssBaseline, Container, Grid, Paper } from "@material-ui/core";
import SongList from "../SongList";
import SongDetail from "../SongDetail";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Paper>
                <SongList />
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper>
                <SongDetail />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
