import React from 'react'

const VideoCard = ({info}) => {
    console.log(info,"info")
   
const { snippet, statistics } = info;
const {channelTitle, title, thumbnails} = snippet;
  return (
  <div className='p-2 m-2 w-72'>

 <img className="rounded-lg shadow-lg"
 alt="thumbnails" src={thumbnails.high.url}></img>
<ul>
    <li><h6>{title}</h6></li>
    <li>{channelTitle}</li>
    <li>{statistics.viewCount}</li>
    </ul> 
  </div>
    
  )
}

export default VideoCard;