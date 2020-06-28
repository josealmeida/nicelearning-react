import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { fetchPostsAndUsers } from '../../actions';
import UserHeader from '../UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <ListItem key={post.id}>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={post.body}
            secondary={
              <React.Fragment>
                <Typography component="span" variant="body2">
                  <UserHeader userId={post.userId} />
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      );
    });
  }

  render() {
    return (
      <div className="post-list">
        <List>{this.renderPosts()}</List>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
