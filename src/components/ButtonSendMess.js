import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import styled from 'styled-components'




 function ButtonSendMess(){

    const [data1, setData] = useState('')
    const textInput = React.useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        const loggedInUser = localStorage.getItem("user")
        const loggedChannel = localStorage.getItem("channelName")

        axios.post(`http://localhost:8080/message/${loggedInUser}/${loggedChannel}`, {message: data1} )
        .then(() => {
            // window.location.reload(true)
        })  
    }

    return (

        
        <Content
        sx={{
            // width: 500,
            maxWidth: '100%',
            
        }}
        >
            <Grid 
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"

        >
    
       <TextField
          id="filled-multiline-static"
          label = "Send a message"
          inputRef={textInput}
          multiline
          rows={4}
          onChange={(e) => setData(e.target.value)}
          className="bg-gray-200 b"
          />
        <form onSubmit={handleSubmit}>
        <button onClick={() => {textInput.current.value=""}} 
           className="box2 rightJawn">
            Send
            </button>
            </form>
        </Grid>
           </Content>

)



}

export default ButtonSendMess
const Content = styled.div`
flex-basis: auto;
margin: 10px 275px 0px 275px;
min-height:0px;
_height:500px
background:
`