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
            <div className='the-box centeringPlease box2'>
                <h5 className = "text-3xl">Remove Channel</h5>
            <form onSubmit={this.handleSubmit}>
                <label className='text-3xl'>
                    Channel:
                    <input className='text-black' type='text' name="channelName" value = {this.state.channelName} onChange={this.handleChange}/>
                </label>
                <Button variant="contained" type="submit">Remove</Button>
            </form>
            </div>
        );
    }
}