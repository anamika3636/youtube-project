import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));  
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(closeMenu());
  },[])
  return (
    <div className='px-2'>
    <iframe width="800" height="550" 
    src={"https://www.youtube.com/embed/"+ searchParams.get("v") }
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
  )
}

export default WatchVideo