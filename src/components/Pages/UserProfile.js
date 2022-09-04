import React from 'react'

function UserProfile() {

  const loggedInUser = localStorage.getItem("user");
  return (
    <div>{loggedInUser}</div>
  )
}

export default UserProfile