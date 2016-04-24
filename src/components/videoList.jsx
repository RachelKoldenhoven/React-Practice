import React from 'react';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <li key={video.id.videoId}> {video.snippet.title}</li>
    )
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
};

export default VideoList;