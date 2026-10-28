import React from 'react';
// import {user} from '../Data/db.json';
import {user} from '../../db.json'
import '../App.css'

export const Home = () => {


  const data = user;
  console.log(data)

  return (
    <>
      This is Home Page
      {/* {user?.map((el)=>({...el}))} */}

     <div className="home-cart">
       <div className='cart-data'>
       {user.map((el)=>(
        <div key={el.id}>
           <img
              src={el.profileImage}
              alt={el.name}
              className="profile-image"
            />
            <h2>{el.name}</h2>
            <h2>{el.city}</h2>
        </div>
       ))}
      </div>
     </div>

    </>
  )
}

