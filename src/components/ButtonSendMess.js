import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import { height } from '@mui/system';
import Stack from '@mui/material/TextField'
import ChannelListGetter from './ChannelComp/ChannelListGetter';

 function ButtonSendMess(){

    const [data1, setData] = useState('')

    const handleSubmit = async () => {


        const loggedInUser = localStorage.getItem("user")
        const loggedChannel = localStorage.getItem("channelName")
    
         axios.post(`http://localhost:8080/message/${loggedInUser}/${loggedChannel}`, {message: data1} )
        .then(res => {
            console.log(res)
            console.log(res.data)
        })

    }

    return (

        
        <Box
        sx={{
            // width: 500,
            maxWidth: '100%',
            
        }}>
            <Grid 
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        className="box2"
        >
    
       <TextField
          id="filled-multiline-static"
          label = "Send a message"
          multiline
          rows={4}
          onChange={(e) => setData(e.target.value)}
          className="bg-gray-200"
        />
        <button onClick={handleSubmit}
           className="box2 rightJawn">
            Send
            </button>
        </Grid>
           </Box>

       

         
)



}

export default ButtonSendMess





