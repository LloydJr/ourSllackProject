import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button'
import Sidebar from '../Navigation/Sidebar';
import Header from '../Navigation/Header';
import { useState } from 'react';

export default function ChannelAdd() {

    const [user, setUser] = useState('')



    const handleSubmit = async (event) => {
        event.preventDefault();  
        console.log(user)

        const loggedUser = localStorage.getItem("user")
          axios.post(`http://localhost:8080/channel/new/${loggedUser}`, {channelName: user} )
          .then(res => {
            console.log(res.data)
            console.log(user)
          }).catch(err => console.log(err))
      


    }
      
      
      return (
        <div>
            <Header />
            <Sidebar />
                    <div className = 'box2 centeringPlease the-box'>
                        <h5 className = "form-step text-5xl">New Channel</h5>
                    <form onSubmit={handleSubmit}>
                        <label className='text-3xl'>
                            Channel:
                            <input className='text-black' type='text' name="channelName" onChange={(e) => setUser(e.target.value)}/>
                        </label>
                        <Button variant="contained" type="submit" >Add Channel</Button>
                    </form>
                    </div>
                    </div>
                );
            
        


}


