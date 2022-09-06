import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'



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
          inputRef={textInput}
          multiline
          rows={4}
          onChange={(e) => setData(e.target.value)}
          className="bg-gray-200"
        />
        <form onSubmit={handleSubmit}>
        <button onClick={() => {textInput.current.value=""}} 
           className="box2 rightJawn">
            Send
            </button>
            </form>
        </Grid>
           </Box>

)



}

export default ButtonSendMess





