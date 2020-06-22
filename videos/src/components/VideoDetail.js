import React, { Component } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

class VideoDetail extends Component {
  renderContent = () => {
    const { video } = this.props;

    if (!video) {
      return '';
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <Card>
        <CardMedia
          component="iframe"
          height="500px"
          alt={video.snippet.title}
          title={video.snippet.title}
          src={videoSrc}
        />
        <CardContent>
          <Typography variant="h6">{video.snippet.title}</Typography>
          <Typography variant="body2">{video.snippet.description}</Typography>
        </CardContent>
      </Card>
    );
  };

  render() {
    return <div className="video-detail">{this.renderContent()}</div>;
  }
}

export default VideoDetail;
