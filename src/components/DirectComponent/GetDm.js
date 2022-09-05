import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'

function GetDm() {

const { dm, setDm } = useState();
useEffect(() => {
    const userName = localStorage.getItem("user")
    axios.get(`http://localhost:8080/dm/${userName}`)
    .then(response => {
        setDm(response.data)
    })
}, [])


  return (
    <div>GetDm</div>
  )
}

export default GetDm