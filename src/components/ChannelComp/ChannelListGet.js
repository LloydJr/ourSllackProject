import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components'
import Sidebar from "../Navigation/Sidebar";
import Header from "../Navigation/Header";



function ChannelPage() {



    const [data, setData] = useState([])
    const [user, setUser] = useState([])

    

    
    useEffect(  () => {
        const logChannel = localStorage.getItem("channelName")
        axios.get(`http://localhost:8080/channel/messages/${logChannel}/`)
       .then(res => {
           setData(res.data)
       }).catch(err => console.log(err))
       
    }, [data, data])


    useEffect( () => {
      const logChannel = localStorage.getItem("channelName")
      axios.get(`http://localhost:8080/channel/messages/${logChannel}/`)
     .then(res => {
         setUser(res.data)
     }).catch(err => console.log(err))
    }, [user])

    const headName = user.map((data) => {
        return (
            <h1 className="box3 text-3xl text-white text-center">{data.channel.channelName}</h1>
        ) 
    })

   

   

    

    return (
        <div>
          <Header />
          <Sidebar />
      <h1 style={{
        top: '0%',
        position: 'absolute'
        
      }
      }
      className='box2'
      >
        </h1>
      {headName}
       <div style={{
           textAlign: 'center',
           justifyConent: 'center',
       }}>
       <tr>
        </tr> 
        {data.map((data1) => { 
           const arr = (
        <div className=" text-center">
            <div class="text-center space-y-2 sm:text-left text-white">
              
              <Content class="space-y-0.5">
                <AccountCircleIcon/>
                {data1.userName}
                <p class="text-lg text-white font-semibold ">
                {data1.message} 
                </p>
                </Content>

            </div>
          </div>   
           )
           return arr;
        })}

       </div >
       <div className='min-w-full'>
        
       </div>
       </div>
      
    )

}

export default ChannelPage;

const Content = styled.div`
justified-content: center:
flex-basis: auto;
border:2px solid white;
width:auto;
margin: 10px 275px 0px 275px;
min-height:0px;
_height:500px
background-color: rgb(27, 255, 27);
padding: 10px;
`