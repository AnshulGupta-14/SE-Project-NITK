import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Details from '../Details'
import Create from '../Create'
import Edit from '../Edit'
import Delete from '../Delete'

const Routing = () => {
  return (
    <div>
       <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/details/:id' element={<Details/>}>
              <Route path='/details/:id/delete' element={<Delete/>}></Route>
            </Route>
            <Route path='/details/edit/:id' element={<Edit/>}></Route>
        </Routes>
    </div>
  )
}

export default Routing
