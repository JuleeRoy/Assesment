import React, { useEffect, useState } from 'react'
import './chat.css'
import { fetchData } from '../get_data/getData'
const Chat = () => {
  const[chatData,setChatData]=useState([])
const  fetchData= ()=>{
    fetch('https://panorbit.in/api/users.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(data => {
     
    console.log(data.users)
    setChatData(data.users)
    })
    .catch(error => {
     
      console.error('Error:', error);
    });
  
}

  useEffect(()=>{
     fetchData();
    
     
  },[])

  return (
    <div className='p-1 border' style={{  }} 
    id="chat_Card">
      <ul className="list-group list-group-flush">
       {
        chatData && chatData.map((item)=>{
          console.log(item)
          return(
           
            <li className="list-group-item">
            <div className='' id="oneUser">
              <div id="userIcon" className=''>
                <img src={item.profilepicture} alt="" />
              </div>
              <span className='text-right'>{item.name}</span>
               <span className="onlineDot">.</span>

            </div>
          </li>
          )
        })
       }
        
        {/* <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </div>
  )
}

export default Chat