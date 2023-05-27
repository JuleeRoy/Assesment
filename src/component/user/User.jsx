import React from 'react'
import { useNavigate } from 'react-router-dom';
import './User.css'
const User = ({item}) => {
  const{id,name,profilepicture}=item;
  const navigate=useNavigate();
    const handleClick=(data)=>{
    const dataString = JSON.stringify(data);
    localStorage.setItem('data', dataString);
    navigate("/profile");
    }
  return (
    <section className="container border-bottom" id='user-List'
   onClick={()=>{
    handleClick(item)
    }}>
     <div className="img-Container"
      >
        <img src={profilepicture} alt="" />
     </div>
     <p className=' pt-3 text-secondary fw-100'>{name}</p>
   </section>
  )
}

export default User