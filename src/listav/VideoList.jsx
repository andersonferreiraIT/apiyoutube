import React from 'react';
import VideoItem from '../itemv/VideoItem';
import '../listav/VideoList'

const VideoList = ({ videos, handleVideoSelect }) => {
    const renderedVideos = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });

    return <div className='list'>{renderedVideos}</div>;
};
export default VideoList;