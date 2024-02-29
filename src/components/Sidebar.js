import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const isMenuOpen =useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;  
  return (
    <div className='p-1 shadow-lg w-48'>
   <h1 className='font-bold'>Subscription</h1>
   <ul>
    <li><Link to="/">home</Link></li>
    <li>Shorts</li>
    <li>Video</li>
    <li>Live</li>

   </ul>
   <h1 className='font-bold pt-5'>Watch Later</h1>
   <ul>
    <li>Music</li>
    <li>sports</li>
    <li>Gaming</li>
   </ul>
   <h1 className='font-bold pt-5'>Watch Later</h1>
   <ul>
    <li>Music</li>
    <li>sports</li>
    <li>Gaming</li>
   </ul>
    </div>
  )
}

export default Sidebar