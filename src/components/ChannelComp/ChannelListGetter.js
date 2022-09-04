import React from 'react'
import axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useEffect, useState} from 'react'


export default function ChannelListGetter() {

    const [data, setData] = useState([])
    const[channel, setChannel] = useState()
    const[message, setMessage] = useState([])

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
            //   handleChannelChange()

            }
          }
         
        };

    //    const handleChannelChange = async () => {
    //         const channelNameG = localStorage.getItem('channelName')
    //         axios.get(`http://localhost:8080/channel/messages/${channelNameG}/`)
    //         .then(res => {
    //             console.log("Getting from :::::", res.data)
    //             setMessage(res.data)
    //         }).catch(err => console.log(err))
    //     }

        


        return (
            <div>
              <FormControl sx={{ m: 1, minWidth: 200, maxWidth: 200}}>
                <InputLabel shrink htmlFor="select-multiple-native" sx={{paddingBottom: 50}}>
                  Native
                </InputLabel>
                <Select 
               
                  multiple
                  native
                //   value={personName}
                  // @ts-ignore Typings are not considering `native`
                  onChange={handleChangeMultiple}
                  value={channel}
                  label="Native"
                  inputProps={{
                    id: 'select-multiple-native',
                  }}
                  
                >
                  {data.map(name => 
                    <option  value={name}>
                      {name}
                    </option>
                  )}
                </Select>
              </FormControl>
              {/* {localStorage.getItem('channelName')}

              <ul>{message.map(mes => 
                    <li>
                        {mes.userName}
                      {mes.message}
                    </li>
                  )}</ul> */}
            </div>
          );






}