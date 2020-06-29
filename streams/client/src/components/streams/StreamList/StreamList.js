import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class StreamList extends Component {
  render() {
    return <div>StreamList</div>;
  }
}

export default connect(mapStateToProps)(StreamList);
