import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class StreamCreate extends Component {
  render() {
    return <div>StreamCreate</div>;
  }
}

export default connect(mapStateToProps)(StreamCreate);
