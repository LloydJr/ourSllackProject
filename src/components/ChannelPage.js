import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function ChannelPage() {
    // const inputRef = useRef(null);
    // const[post, setPost] = useState([]);
    // const[loading, setLoading] = useState(false);

    // useEffect(()=> {
    //     getMessages();
    //     console.log(getMessages())
    // }, [])

    // const getMessages = async () => {
    //     try{
    //         const res = await axios.get(`http://localhost:8080/message/batshow/bill/messagelist`);
    //         setPost(res.data.results)
    //         setLoading(true)
    //         console.log(setPost)
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    

    const [data, setData] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/channel/messages/RandomConv/`)
        .then(res => {
            console.log("Getting from :::::", res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    }, [])

    // http://localhost:8080/channel/messages/{channelName}/

    useEffect(() => {
        axios.get(`http://localhost:8080/channel/RandomConv/`)
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
              {/* <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button> */}
            </div>
          </div>
            // <tr>
              
            // <td>{data.userName}</td>
            //  <td>{data.message}</td>
            // </tr>
            
        )
    })

    function refreshPage() {
        window.location.reload(false);
    }
  


    // useEffect(() => {
    //     axios.get(`http://localhost:8080/message/batshow/bill/messagelist`)
    //     .then((response) => setPost(response.data))
    //     .then((error) => console.log(error))
    // }, [])




    // const sendMessage = e => {
    //     e.preventDefault(); // prevents refresh

    //     if(channelid) {
    //         return false;
    //     }
        
    // };


    return (
      <h1 style={{
        top: '0%',
        position: 'absolute'
        
      }
      }><div>
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
       <div>
        <Box
        sx={{
            width: 500,
            maxWidth: '100%'
        }}>
       <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
           </Box>
           <button onClick={refreshPage}>Send</button>
           </div>
               {/* <input placeholder={'Message #ROOM'}></input>
               <Button hidden type = "submit" onClick={sendMessage}>
                   SEND
               </Button> */}
           </div></h1>
      
    )

}

export default ChannelPage;

const ChatContainer = styled.div``

// const ChatInputContainer = styled.div`
//     border-readius : 20px
    
//     >form {
//         position: relative;
//         display: flex;
//         justify-content: center;
//     }

//     > form > input {
//         position: fixed;
//         bottom: 30px;
//         lwidth: 60%;
//         border: 1px solid gray;
//         border-radius: 3px;
//         padding: 20%
//         outline: none;
//     }

//     > form > button {
//         display: none !important;
//     }
// `;



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