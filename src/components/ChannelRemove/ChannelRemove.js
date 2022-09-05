import React from 'react';
import axios from 'axios';
import './ChannelRemove.css'
import Button from '@mui/material/Button'


export default class ChannelRemove extends React.Component {
    state = {
        channelName:''
    };

    handleChange = event => {
        this.setState({channelName: event.target.value});

        axios
        .delete(`http://localhost:8080/channel/delete/${event.target.value}`)
       .then(res => {
           console.log(res);
           console.log(res.data);
       })
    };

handleSubmit = event => {
    // event.preventDefault()




    };

    render() {
        return (
            <div className='form-box'>
                <h5 classname = "form-step">Delete a Channel</h5>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Channel:
                    <input type='text' name="channelName" value = {this.state.channelName} onChange={this.handleChange}/>
                </label>
                <Button variant="contained" type="submit">Remove Channel</Button>
            </form>
            </div>
        );
    }
}