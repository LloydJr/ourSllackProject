import React from 'react'
import axios from 'axios'
import Select from '@mui/material/Select';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './ChannelListGetter.css'
import Sidebar from "../Navigation/Sidebar";
import Header from '../Navigation/Header';



export default function ChannelListGetter() {

    const [data, setData] = useState([])
    const[channel, setChannel] = useState()
    const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

    let navigate = useNavigate();

    useEffect(() => {
      const localUser = localStorage.getItem("user")
        axios.get(`http://localhost:8080/channel/all/list/${localUser}`)
        .then(res => {
            setData(res.data)
        }).catch(err => console.log(err))
    }, [])


    
    
        const handleChangeMultiple = async (event) => {
          const { options } = event.target;
          const value = []; 
          for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
              value.push(options[i].value);
              localStorage.setItem('channelName', value[0])
              setChannel(value)
              navigate("/current_channel")

            }
          }
          const channelNameG = localStorage.getItem('channelName')
            axios.get(`http://localhost:8080/channel/messages/${channelNameG}/`)
            .then(res => {
            }).catch(err => console.log(err))
         
        };

      
        return (
          <div>
            <Header />
            <Sidebar />
            <div className='text-white'>
              <div className='the-box'>
                <label className='labelme'>
                Channel(s):
                </label>
                <Select
                  multiple
                  native
                  onChange={handleChangeMultiple}
                  value={channel}
                  label="Native"
                  inputProps={{
                    id: 'select-multiple-native',
                  }}
                  >{data.map(name => 
                    <option value={name} className='text-white'> 
                    {name} </option>
                  )}
                </Select>
                </div>
                  <div href="/current_channel" variant="contained" />
            </div>
            </div>
          );



}
