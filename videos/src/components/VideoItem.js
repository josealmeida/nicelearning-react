import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import './VideoItem.css';

class VideoItem extends Component {
  render() {
    const { video, onVideoSelect } = this.props;

    return (
      <div className="video-item" onClick={() => onVideoSelect(video)}>
        <ListItem>
          <ListItemIcon>
            <img
              className="video-item-image"
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
          </ListItemIcon>
          <ListItemText primary={video.snippet.title} />
        </ListItem>
      </div>
    );
  }
}

export default VideoItem;
