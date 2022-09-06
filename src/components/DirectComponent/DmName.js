import axios from 'axios';
import React, { useEffect, useState } from "react";



export default class DmName extends React.Component {

state = {
    directMessageName: '',
}

handleChange = event => {
    this.setState({directMessageName: event.target.value})
}

handleSubmit = event => {
    event.preventDefault();

    const userName = {
        directMessageName: this.state.directMessageName
    }

    axios.post(`http://localhost:8080/dm/new/${userName}`, userName )
    .then()
    
}

render() {
    return(
    <form onSubmit={this.handleSubmit}>
        <label>New Direct Message
        <input type='text' name="directMessageName" onChange={this.handleChange}/>
        </label>
        <button type="submit">add</button> 
        <ol>

        </ol>
    </form>   
)

}
}