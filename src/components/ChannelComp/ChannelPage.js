import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function ChannelPage() {

    const [data, setData] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        const channelLog = localStorage.getItem("channelName")
        axios.get(`http://localhost:8080/channel/messages/${channelLog}/`)
        .then(res => {
            console.log("Getting from :::::", res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    }, [])

    // http://localhost:8080/channel/messages/{channelName}/

    useEffect(() => {
        const channelLog = localStorage.getItem("channelName")
        axios.get(`http://localhost:8080/channel/${channelLog}/`)
        .then(res => 
            {
            console.log("Getting from :::::", res.data)

            setUser(res.data)
        }).catch(err => console.log(err))
    }, [])

    const headName = data.map((data) => {
        return (
            <h1>{data.channel.channelName}</h1>
        )

        
    })

    const userList = user.map((data) => {
        return(
            <td>{data.userName}</td>
        )
    })

    const arr = data.map((data, index) => {
        return (
           
            <div class="py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 sm:py-4   sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <div class="text-center space-y-2 sm:text-left">
              <div class="space-y-0.5">
                <p class="text-lg text-black font-semibold">
                {data.userName}
                </p>
                <p class="text-slate-500 font-medium">
                {data.message}      </p>
              </div>
            </div>
          </div>
          
            
        )
    })

    function refreshPage() {
        window.location.reload(false);
    }


    return (
        <div>
      <h1 style={{
        top: '0%',
        position: 'absolute'
        
      }
      }>
        </h1>
      {headName}
       <table style={{
           textAlign: 'center',
           justifyConent: 'center',
       }}>
       <tr>
        </tr>
       {arr}

       </table >
       <div className='w-96'>
        
       </div>
       {/* <div> */}
        {/* <Box
        sx={{
            width: 500,
            maxWidth: '100%'
        }}> */}
       {/* <TextField
          id="outlined-multiline-static"
          label = "Send a message"
          multiline
          rows={4}
        />
           </Box>
           <button onClick={refreshPage}>Send</button> */}
           {/* </div> */}
               {/* <input placeholder={'Message #ROOM'}></input>
               <Button hidden type = "submit" onClick={sendMessage}>
                   SEND
               </Button> */}
           </div>
      
    )

}

export default ChannelPage;



//  <div>
//        {headName}
//         <table style={{
//             textAlign: 'center',
//             justifyConent: 'center',
//         }}>
//         <tr>
//             <th>UserName</th>
//             <th>Message</th>
            
//             </tr>
//         {arr}

//         </table >
//         <div>
//             <input  placeholder='Type here'></input>
//             <button onClick={refreshPage}>Send</button>
//             </div>
//                 {/* <input placeholder={'Message #ROOM'}></input>
//                 <Button hidden type = "submit" onClick={sendMessage}>
//                     SEND
//                 </Button> */}
//             </div>