import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";

import { selectSong } from "../../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <ListItem key={song.title}>
          <ListItemText primary={song.title} />
          <ListItemSecondaryAction>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
  }
  render() {
    return (
      <div className="song-list">
        <List>{this.renderList()}</List>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
