import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class StreamDelete extends Component {
  render() {
    return <div>StreamDelete</div>;
  }
}

export default connect(mapStateToProps)(StreamDelete);
