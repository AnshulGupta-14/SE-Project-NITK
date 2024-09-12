import React from 'react'
import Nav from './Nav'
import Card from './Card'
import Routing from './UTILS/Routing'
import Home from './Home'
import Context from './UTILS/Context'

const Apps = () => {
  return (
    <div className='w-full h-screen flex'>
        <Nav></Nav>
        <Routing></Routing>
        <Context></Context>
        
    </div>
  )
}

export default Apps
