import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';

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
        axios.get(`http://localhost:8080/channel/messages/SuperManConvo/`)
        .then(res => {
            console.log("Getting from :::::", res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    }, [])

    // http://localhost:8080/channel/messages/{channelName}/

    useEffect(() => {
        axios.get(`http://localhost:8080/channel/SpawnTalk/`)
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
            <tr>
              
            <td>{data.userName}</td>
             <td>{data.message}</td>
            </tr>
            
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      }
      }><div>
      {headName}
       <table style={{
           textAlign: 'center',
           justifyConent: 'center',
       }}>
       <tr>
           <th>UserName</th>
           <th>Message</th>
           
           </tr>
       {arr}

       </table >
       <div>
           <input  placeholder='Type here'></input>
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