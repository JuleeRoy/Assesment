import React, { useEffect, useState } from 'react'
import { getData } from '../get_data/getData';
import SideBar from '../side_navbar/SideBar';
import './Profile.css'
import Chat from '../chats/Chat';
import Address_Info from './Address_Info';
import SignOut from './SignOut';
const Profile = () => {

    const [mydata, setMydata] = useState('');
    const [showChat, setShowChat] = useState(false);
     const[showSignOut,setShowSignOut]=useState(false)

    const toggleChat = () => {
        setShowChat(!showChat);
    };
    const toggleSignOut=()=>{
        setShowSignOut(!showSignOut)
    }
    const gettingData=()=>{
        var data = getData();
       
        setMydata(data)
        

    }
    

    useEffect(() => {
      gettingData()
    },[])

    return (
        <section className="container-fluid" id='user-Section'>
            <article className="container p-4">
                <SideBar />
                <div className="content p-4 border ">
                    <section className="container border-bottom " id='topBar' >
                        <article className='d-flex justify-content-between flex-wrap '>
                            <div className=''>
                                <span className="fw-bold">Profile</span>
                            </div>
                            <div className='d-flex gap-2'>
                                <div id="userIcon" className='mb-2'>
                                    <img src={mydata.profilepicture} alt="" onClick={toggleSignOut}/>
                                </div>
                                <span className='fw-bold mt-1'>{mydata.name}</span>
                            </div>
                        </article>
                    </section>
                    <section id="profile_dashboard" className='row mt-3'>
                        <aside id="personal_Info" className='col-lg-4 border-end'>
                            <div id="profile_pic">
                                <img src={mydata.profilepicture} alt="" />
                            </div>
                            <span className="title">{mydata.name}</span>
                            <table className='mb-2'>
                            <tr>
                                <td>Username</td>
                                <td>:</td>
                                <td>{mydata.username}</td>
                            </tr>
                            <tr>
                            <td>e-mail</td>
                                <td>:</td>
                               <td>{mydata.email}</td>
                            </tr>
                            <tr>
                            <td>Phone</td>
                                <td>:</td>
                              <td>{mydata.phone}</td>
                            </tr>
                            <tr>
                            <td >Website</td>
                            <td>:</td>
                            <td>{mydata.website}</td>
                            </tr>
                           </table>
                           <span className="title border-top w-100 text-center">Company</span>
                            <table>
                            <tr>
                                <td>Name</td>
                                <td>:</td>
                                <td>Romaguera-Corona</td>
                            </tr>
                            <tr>
                            <td>catchphrase</td>
                                <td>:</td>
                               <td>Mulit-layered client-server neural</td>
                            </tr>
                            <tr>
                            <td>bs</td>
                                <td>:</td>
                              <td>harness real-time e-markets</td>
                            </tr>
                            </table>




                            
                                 
                               

                        </aside>
                        <aside id="address_Info" className='col-lg-8'>
                           <p className="title">Address</p>
                     <Address_Info/>
                        </aside>
                    </section>
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

export default Profile