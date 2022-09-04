import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import { height } from '@mui/system';
import Stack from '@mui/material/TextField'


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

        const message = {
            message: this.state.message
        }

        const loggedInUser = localStorage.getItem("user")
    
        axios.post(`http://localhost:8080/message/${loggedInUser}/Batman`, message )
        .then(res => {
            console.log(res)
            console.log(res.data)
        })

    }



render (){
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
          onChange={this.handleChange}
          className="bg-gray-200"
        />
        <button onClick={this.handleSubmit}
           className="box2 rightJawn">
            Send
            </button>
        </Grid>
           </Box>

        //    <Stack
        //    component="form"
        //    sx={{width:'55ch'}}
        //    spacing={5}
        //    noValidate
        //    autoComplete="off"
        //    >

        //     <TextField
        //     hiddenLabel
        //     id="filled-hidden-label-small"
        //     defaultValue="Small"
        //     variant="filled"
        //     size="small"/>

        //     <TextField
        //     hiddenLabel
        //     id="filled-hidden-label-normal"
        //     defaultValue="Normal"
        //     variant="filled"></TextField>
        //    </Stack>

         
)
}
}

