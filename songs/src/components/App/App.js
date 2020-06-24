import React from "react";
import "./App.css";
import { CssBaseline, Container, Grid, Paper } from "@material-ui/core";
import { selectSong } from "../../actions";
import SongList from "../SongList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Container maxWidth="md">
          <SongList />
        </Container>
      </div>
    );
  }
}

export default App;
