import React from 'react'
// import VideoContainer from './VideoContainer'
import Button from './Button'

// const List =["all","Movie","Song","news","Cricket"]
const ButtonList = () => {
  return (
    <div className='flex'>
    <Button name="video"/>
    <Button name="song"/>
    <Button name="movie"/>
    <Button name="cricket"/>
    <Button name="news"/>
    </div>
  )
}

export default ButtonList