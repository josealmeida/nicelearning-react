import React, { Component } from "react";
import { connect } from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

class SongList extends Component {
  render() {
    return <div className="song-list">Song List</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(SongList);
