import React from 'react'
import axios from 'axios'
import Select from '@mui/material/Select';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './ChannelListGetter.css'




export default function ChannelListGetter() {

    const [data, setData] = useState([])
    const[channel, setChannel] = useState()
    let navigate = useNavigate();

    useEffect(() => {
      const localUser = localStorage.getItem("user")
        axios.get(`http://localhost:8080/channel/all/list/${localUser}`)
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
              navigate("/current_channel")

            }
          }

          const channelNameG = localStorage.getItem('channelName')
            axios.get(`http://localhost:8080/channel/messages/${channelNameG}/`)
            .then(res => {
            }).catch(err => console.log(err))
         
        };

      

        


        return (
            <div className='text-white'>
              <div className='box'>
                <label className='labelme'>
                Channel list
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
                  >                  {data.map(name => 
                    <option value={name} className='text-white'> 
                    {name} </option>
                  )}
                </Select>
                </div>


      
                  <div href="/current_channel" variant="contained" />
            </div>
          );






}
