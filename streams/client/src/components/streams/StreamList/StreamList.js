import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
  return {};
}

class StreamList extends Component {
  render() {
    return (
      <div>
        <Link to="/streams/new">New stream</Link>
        <br />
        <Link to="/streams/edit">Edit stream</Link>
        <br />
        <Link to="/streams/delete">Delete stream</Link>
        <br />
        <Link to="/streams/show">Show stream</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(StreamList);
