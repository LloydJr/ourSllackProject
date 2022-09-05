import React from 'react';
import axios from 'axios';

export default class ChannelList extends React.Component {
    state = {
        channels: []
    };

    componentDidMount(){
        axios.get('http://localhost:8080/channel/all/list').then(res=> {
            console.log(res);
            this.setState({ channels: res.data });
        });
    }

    render() {
        return (
            <ul>
                { this.state.channels.map(channel => <li>{ channel }</li>)}
            </ul>
        )
    }
}