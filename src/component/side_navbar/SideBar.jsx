import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
<div className="sidebar px-4">
  <div className=''>
    {/* <Link to="/" id="sideBar_links">Home</Link> */}
  <Link className="active" to="/profile" id="sideBar_links">Profile</Link>
  <Link to="/posts" id="sideBar_links">Post</Link>
  <Link to="/gallery" id="sideBar_links">Gallery</Link>
  <Link to="/todo" id="sideBar_links" className='border-0'>Todo</Link>
  </div>
</div>
  )
}

export default SideBar