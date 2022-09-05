import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function UserProfile() {

  const loggedInUser = localStorage.getItem("user");
  return (
    <div>
      <h1 className='userIcon'>
      <AccountCircleIcon/>
      </h1>
    <h1>{loggedInUser}</h1>
    </div>
  )
}

export default UserProfile