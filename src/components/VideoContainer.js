import React, { useEffect, useState } from 'react'
import { Youtube } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        getVideos();
    },[])
    const getVideos = async () => {
        const data = await fetch(Youtube);
        const json =await data.json();
        console.log(json.items,"datas" )
        setVideos(json.items)
    }
  return (
    <div className='flex flex-wrap'>
    {/* <VideoCard info={videos[0]}/> */}
{videos.length ? videos.map(video=><Link to={"/watch?v="+ video.id} ><VideoCard key={video.id} info={video}/></Link>
): ''}    

    </div>
  );
};

export default VideoContainer;