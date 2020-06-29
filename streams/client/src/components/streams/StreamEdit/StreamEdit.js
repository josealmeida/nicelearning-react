import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class StreamEdit extends Component {
  render() {
    return <div>StreamEdit</div>;
  }
}

export default connect(mapStateToProps)(StreamEdit);
