import React from 'react'
import { Link } from 'react-router-dom'

const SignOut = ({mydata}) => {
  return (
    <div>
         <div id="profile_pic" style={{width:"4rem"}}>
        <img src={mydata.profilepicture} alt="" />
        </div>
        <span className="title border-bottom fw-bold">{mydata.name}</span>
        <span className="title border-bottom" style={{fontSize:"x-small"}}>{mydata.email}</span>
        <span className="title" style={{fontSize:"x-small"}}>{mydata.website}</span>
        <Link to="/" className="btn btn-danger rounded-pill">SignOut</Link>
    </div>
  )
}

export default SignOut