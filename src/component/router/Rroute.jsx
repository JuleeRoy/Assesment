import React from 'react'
import{Route,Routes} from 'react-router-dom'
import Home from '../home/Home'
import Profile from '../profile/Profile'
import Gallery from '../gallery/Gallery'
import Todo from '../todo/Todo'
import Posts from '../posts/Posts'

const Rroute = () => {
  return (
    
        <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/profile' element={<Profile/>} ></Route>
        <Route path='/gallery' element={<Gallery/>} ></Route>
        <Route path='/todo' element={<Todo/>} ></Route>
        <Route path='/posts' element={<Posts/>} ></Route>
        </Routes>
    
  )
}

export default Rroute