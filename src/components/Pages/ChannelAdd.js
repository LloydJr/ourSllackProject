import React from 'react';
import axios from 'axios';

export default class ChannelAdd extends React.Component {
    state = {
        channelName:''
    };

    handleChange = event => {
        this.setState({channelName: event.target.value});
    };

handleSubmit = event => {
    // event.preventDefault()

    const channel = {
        channelName: this.state.channelName
    }

        axios
             .post('http://localhost:8080/channel/new/jim', channel )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Channel:
                    <input type='text' name="channelName" onChange={this.handleChange}/>
                </label>
                <button type="submit">Add Channel</button>
            </form>
        );
    }
}