import React from 'react'
import Timer from './Timer'


function UserProfile() {

  const loggedInUser = localStorage.getItem("user");


  return (
    <div>
      <h1 className='userIcon text-white text-7xl p-8'>
        <i class="fa-solid fa-user"></i>
        </h1>
    <h2 className='text-7xl text-white centeringPlease'>
      {loggedInUser}
      </h2>
      <h3 className='centeringPlease text-3xl text-white'>
        Time and Date
      </h3>
      <h4 className='centeringPlease text-2xl text-white'>
        <Timer/>
      </h4>
    </div>
  )
}

export default UserProfile