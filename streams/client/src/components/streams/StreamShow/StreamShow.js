import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class StreamShow extends Component {
  render() {
    return <div>StreamShow</div>;
  }
}

export default connect(mapStateToProps)(StreamShow);
