import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';

function mapStateToProps(state) {
  return {};
}

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>PostList</div>;
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
