import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const videoItems = videos.map( (video, key) =>{
        return <VideoListItem onVideoSelect={onVideoSelect} key={key} video={video} />
    });

    return (
        <ul className="list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;
