import React from 'react'
import axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useEffect, useState} from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ButtonSendMess from '../ButtonSendMess';
import TagIcon from '@mui/icons-material/Tag';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';




export default function ChannelListGetter() {

    const [data, setData] = useState([])
    const[channel, setChannel] = useState()
    const[message, setMessage] = useState([])
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/channel/all/list`)
        .then(res => {
            console.log("Getting from :::::", res.data)
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
              navigate("/channel_browser")

            }
          }

          const channelNameG = localStorage.getItem('channelName')
            axios.get(`http://localhost:8080/channel/messages/${channelNameG}/`)
            .then(res => {
                setMessage(res.data)
            }).catch(err => console.log(err))
         
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
            <div className='text-white'
>
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
                  <div href="/channel_browser" variant="contained" />
            </div>
          );






}
