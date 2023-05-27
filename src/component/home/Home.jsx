import React, { useEffect, useState } from 'react';
import './Home.css'
import User from '../user/User';


const Home = () => {
    const [user, setUser] = useState([]);

  async function MyData() {
    const response = await fetch(" https://panorbit.in/api/users.json");
    const jsonData = await response.json();
    setUser(jsonData.users)
  }

  useEffect(() => {
   MyData();
  }, [])
  return (
    <>
      <section className="container-fluid" id="banner">
      <div className="container w-50 text-center py-4 fw-bold fs-4"> 
        Select an Account
      </div>
        <div className='w-50 p-3 bg-light' id='banner-Card' style={{borderRadius:"0px"}}>
          {user ?
            user.map((item) => {
              return (<User item={item} key={item.id}/>)
            })
            : <p>loading</p>}
        </div>
      </section>
    </>
  )
}

export default Home