import React from 'react';
import axios from 'axios';
// import './ChannelAdd.css'
import Button from '@mui/material/Button'
import Sidebar from '../Navigation/Sidebar';
import Header from '../Navigation/Header';
import { useState } from 'react';

export default function ChannelAdd() {

    const [user, setUser] = useState('')



    const handleSubmit = async (event) => {
        event.preventDefault();  
        console.log(user)

        const loggedUser = localStorage.getItem("user")
          axios.post(`http://localhost:8080/channel/new/${loggedUser}`, {channelName: user} )
          .then(res => {
            console.log(res.data)
            console.log(user)
          }).catch(err => console.log(err))
      

      // const [personName, setPersonName] = React.useState();

    }
      
      
      return (
        <div>
            <Header />
            <Sidebar />
                    <div className = 'box2 centeringPlease the-box'>
                        <h5 className = "form-step text-5xl">New Channel</h5>
                    <form onSubmit={handleSubmit}>
                        <label className='text-3xl'>
                            Channel:
                            <input className='text-black' type='text' name="channelName" onChange={(e) => setUser(e.target.value)}/>
                        </label>
                        <Button variant="contained" type="submit" >Add Channel</Button>
                    </form>
                    </div>
                    </div>
                );
            
        


}


// export default class ChannelAdd extends React.Component {
//     state = {
//         channelName:''
//     };

//     handleChange = event => {
//         this.setState({channelName: event.target.value});
//     };

// handleSubmit = event => {
//     // event.preventDefault()


//     const channel = {
//         channelName: this.state.channelName
//     }
    
//             const loggedInUser = localStorage.getItem("user");
//             axios
//             .post(`http://localhost:8080/channel/new/${loggedInUser}`, channel )
//             .then(res => {
//                 console.log(res);
//                 console.log(res.data);
//             })
//             // test later today
//             // localStorage.setItem('channel', channel)
//             // const channelNameGlobal = localStorage.getItem("channel");
//             // console.log(channelNameGlobal)
//     };

//     render() {
//         return (
//             <div className = 'box2 centeringPlease the-box'>
//                 <h5 className = "form-step text-5xl">New Channel</h5>
//             <form onSubmit={this.handleSubmit}>
//                 <label className='text-3xl'>
//                     Channel:
//                     <input className='text-black' type='text' name="channelName" onChange={this.handleChange}/>
//                 </label>
//                 <Button variant="contained" type="submit" href='/search_channel'>Add Channel</Button>
//             </form>
//             </div>
//         );
//     }
// }
