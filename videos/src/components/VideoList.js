import React, { Component } from 'react';
import './VideoList.css';
import VideoItem from './VideoItem';
import { List } from '@material-ui/core';

class VideoList extends Component {
  renderContent = () => {
    const { videos, onVideoSelect } = this.props;

    const renderedList = videos.map((video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      );
    });

    if (videos.length > 0) {
      return <List>{renderedList}</List>;
    }
  };

  render() {
    return <div className="video-list">{this.renderContent()}</div>;
  }
}

export default VideoList;
