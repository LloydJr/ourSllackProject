import React, { useEffect } from 'react'
import axios from 'axios';

export default class ChannelNamePage extends React.Component {

state = {
    channelname: '',
}


handleChange = event => {
    this.setState({channelname: event.target.value})
}

handleSubmit = event => {
    event.preventDefault();

    const channel = {
        channelName: this.state.channelname
    }

    axios.post(`http://localhost:8080/channel/new/frank`, channel )
    .then()
    
}



render() {
    return(
    <form onSubmit={this.handleSubmit}>
        <label>New Channel
        <input type='text' name="channelName" onChange={this.handleChange}/>
        </label>
        <button type="submit">add</button> 
        <ol>

        </ol>
    </form>   
)

}
}