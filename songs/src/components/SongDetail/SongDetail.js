import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

class SongDetail extends Component {
  renderContent = () => {
    const { selectedSong } = this.props;
    if (selectedSong) {
      return (
        <Card>
          <Box style={{ margin: "10px" }}>
            <Typography variant="h6">Details for:</Typography>
            <Typography variant="body1">{selectedSong.title}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {selectedSong.duration}
            </Typography>
          </Box>
        </Card>
      );
    }
    return (
      <Card>
        <Box style={{ margin: "10px" }}>
          <Typography variant="h6">Select a song</Typography>
        </Box>
      </Card>
    );
  };

  render() {
    return <div className="song-detail">{this.renderContent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
