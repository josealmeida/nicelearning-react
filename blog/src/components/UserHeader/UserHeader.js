import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

class UserHeader extends Component {
  render() {
    const { user } = this.props;
    if (!user) return null;
    return <span>{user.name}</span>;
  }
}

export default connect(mapStateToProps)(UserHeader);
