import React from 'react'
import './video_list_item.css'

const VideoListItem = ({ video, onVideoSelect }) => {
    console.log('video VideoListItem', video)
    const imgurl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => { onVideoSelect(video); window.scrollTo(0, 0) }} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imgurl} />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    )

}

export default VideoListItem;

