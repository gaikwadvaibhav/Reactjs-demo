import React from 'react'
import './video_detail.css'

const VideoDetail = (props) => {
    console.log('video VideoDetail------****------', props.videos)
    const video = props.videos
    if (!video) {
        return <div> <h2> Loading.... </h2> </div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`
    return (
        <div className='video-detail'>
            <div className='embd-responsive embd-responsive-16by9 ' >
                <iframe width='100%' className='embd-responsive-item' src={url} > </iframe>
            </div>
            <div className='details'>
                <div   >{video.snippet.title}</div>
                <div> {video.snippet.description} </div>
            </div>
        </div>
    )
}

export default VideoDetail;