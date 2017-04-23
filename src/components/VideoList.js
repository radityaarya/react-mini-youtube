import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({videos}) => {
    const videoItems = videos.map( (video, key) =>{
        return <VideoListItem key={key} video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;
