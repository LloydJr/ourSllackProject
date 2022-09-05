import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import './PutUserIn.css'
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';


export default function PutUserin() {
    const [data, setData] = useState([])
    const[message, setMessage] = useState([])
    const [user, setUser] = useState('')
    const [channel, setChannel] = useState('')
    // let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/channel/all/list`)
        .then(res => {
            setData(res.data)
        }).catch(err => console.log(err))
    }, [])

    // const [personName, setPersonName] = React.useState();

    
    
        const handleChangeMultiple = async (event) => {
          const { options } = event.target;
          const value = []; 
          for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
              value.push(options[i].value);
              localStorage.setItem('channelName', value[0])
              setChannel(value)
              // navigate("/current_channel")

            }
          }

          
        };

   

   const handleSubmit = (event) => {
             event.preventDefault()
            const localChannel = localStorage.getItem('channelName')
            axios.put(`http://localhost:8080/channel/add/${user}/${localChannel}`)
            .then(
                setUser(''),
                setChannel('')
            ).catch(error => console.log(error))
        }


    return(
        
        <div>
            <div className='text-white'>
              <div >
                <Select
                  multiple
                  native
                  onChange={handleChangeMultiple}
                  value={channel}
                  label="Native"
                  inputProps={{
                    id: 'select-multiple-native',
                  }}
                  >
                  {data.map(name => 
                    <option value={name} className='text-white'> 
                    {name} </option>
                  )}
                </Select>
                </div>
                </div>               
            
        <div className = 'form-box'>
                <h5 className = "form-step">Add User</h5>
            <form onSubmit={handleSubmit}>
                <label>
                    User:
                    <input type='text' name="user" onChange={(e) => setUser(e.target.value)}/>
                </label>
                {/* <label>
                    Channel:
                    <input type='text' name="channelName" onChange={(e) => setChannel(e.target.value)}/>
                </label> */}
                <Button variant="contained" type="submit">Add Channel</Button>
            </form>
            </div>
            </div>
    )


}

function ChannelListGet() {

    const [data, setData] = useState([])
    const[channel, setChannel] = useState()
    const[message, setMessage] = useState([])
    // let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/channel/all/list`)
        .then(res => {
            setData(res.data)
        }).catch(err => console.log(err))
    }, [])

    // const [personName, setPersonName] = React.useState();

    
    
        const handleChangeMultiple = async (event) => {
          const { options } = event.target;
          const value = []; 
          for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
              value.push(options[i].value);
              localStorage.setItem('channelName', value[0])
              setChannel(value)
              // navigate("/current_channel")

            }
          }

          
        };

      //  const handleChannelChange = async () => {
      //       const channelNameG = localStorage.getItem('channelName')
      //       axios.get(`http://localhost:8080/channel/messages/${channelNameG}/`)
      //       .then(res => {
      //           console.log("Getting from :::::", res.data)
      //           setMessage(res.data)
      //       }).catch(err => console.log(err))
      //   }

        


        return (
            <div className='text-white'>
              <div className='box'>
                <Select
                  multiple
                  native
                  onChange={handleChangeMultiple}
                  value={channel}
                  label="Native"
                  inputProps={{
                    id: 'select-multiple-native',
                  }}
                  >
                  {data.map(name => 
                    <option value={name} className='text-white'> 
                    {name} </option>
                  )}
                </Select>
                </div>


              {/* <ul>
                <h1 className="box3 text-3xl text-white text-center">
              {localStorage.getItem('channelName')}
              </h1>

                {message.map(mes => 
                    <li className='box2'>
                        <AccountCircleIcon/>{mes.userName}
                        <div>
                      {mes.message}
                      </div>
                    </li>
                    
                  )}</ul>
                  <ButtonSendMess /> */}
                  <div href="/current_channel" variant="contained" />
            </div>
          );
  }