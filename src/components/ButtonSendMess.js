import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'

export default class ButtonSendMess extends React.Component {

    refreshPage(e) {
        e.preventDefault();
    }
    
    state = {
        message: '',
    }

    handleChange = event => {
        this.setState({message: event.target.value})
    }


    handleSubmit = event => {
        event.preventDefault();

        const message = {
            message: this.state.message
        }

    
        axios.post(`http://localhost:8080/message/Billy/Pokemon`, message )
        .then(res => {
            console.log(res)
            console.log(res.data)
        })

    }



render (){
return (

    <div>
        
        <Box
        sx={{
            width: 500,
            maxWidth: '100%'
        }}>
            <Grid 
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch">
       <TextField
          id="outlined-multiline-static"
          label = "Send a message"
          multiline
          rows={4}
          onChange={this.handleChange}
        />
        </Grid>
           </Box>
           <button onClick={this.refreshPage}>Send</button>
         
        </div>
)
}

}

