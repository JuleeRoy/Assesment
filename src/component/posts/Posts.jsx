import React, { useEffect, useState } from 'react'
import { getData } from '../get_data/getData';
import SideBar from '../side_navbar/SideBar';
import Chat from '../chats/Chat';
import SignOut from '../profile/SignOut';
// import './Posts.css'
const Posts = () => {

    const[mydata,setMydata]=useState('');
    const [showChat, setShowChat] = useState(false);
    const[showSignOut,setShowSignOut]=useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };
    const toggleSignOut=()=>{
        setShowSignOut(!showSignOut)
    }
    useEffect(()=>{
       const data= getData();
       console.log(data)
       setMydata(data)
    },[])
  return (
    <section className="container-fluid" id='user-Section'>
    <article className="container p-4">
       
        <SideBar />
        <div className="content p-4">
            
            <section className="container border-bottom" id='topBar' >
                <article className='d-flex justify-content-between p-2 flex-wrap '>
                    <div className='mt-1'>
                        <p className="fw-bold">Posts</p>
                    </div>
                    <div className='d-flex'>
                                <div id="userIcon" className=''>
                                    <img src={mydata.profilepicture} alt="" onClick={toggleSignOut} />
                                </div>
                                <span className='px-2 fw-bold mt-1'>{mydata.name}</span>
                            </div>
                </article>
            </section>
            <h3>{mydata.name}</h3>

        </div>
         
        <div id="chat-Section">
            <button onClick={toggleChat}>
                <span>
                    <i className="fa-solid fa-message px-3" />
                    Chats
                </span>

                {
                    showChat ?
                        <i className="fa-solid fa-angle-down"></i> :
                        <i className="fa-solid fa-angle-up"></i>
                }
            </button>
            {showChat && (<Chat />)}
        </div>
        <div id="signOut-Section">
                    {showSignOut &&(<SignOut mydata={mydata}/>)}
                </div>
    </article>
</section>
  )
}

export default Posts