import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function ChannelPage() {

    const [data, setData] = useState([])
    const [user, setUser] = useState([])


    useEffect(() => {
        const channelNameG = localStorage.getItem("channelName")
        axios.get(`http://localhost:8080/channel/messages/${channelNameG}/`)
        .then(res => {
            console.log("Getting from :::::", res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    }, [data])

    // http://localhost:8080/channel/messages/{channelName}/

    useEffect(() => {
        const channelNameG = localStorage.getItem("channelName")
        axios.get(`http://localhost:8080/channel/${channelNameG}/`)
        .then(res => 
            {
            console.log("Getting from :::::", res.data)

            setUser(res.data)
        }).catch(err => console.log(err))
    }, [])

    const headName = data.map((data) => {
        return (
            <h1 className="box3 text-3xl text-white text-center">{data.channel.channelName}</h1>
        )

        
    })

    const userList = user.map((data) => {
        return(
            <td>{data.userName}</td>
        )
    })

    const arr = data.map((data, index) => {
        return (
            //py-8 px-8 max-w-sm mx-auto rounded-xl shadow-lg space-y-2 sm:py-4   sm:flex sm:items-center sm:space-y-0 sm:space-x-6 bg-white
           
            <div className="box2 text-center py-8 px-8 mx-auto rounded-xl sm:py-4">
            <div class="text-center space-y-2 sm:text-left">
              <div class="space-y-0.5">
                <p class="text-lg text-white font-semibold">
                    < AccountCircleIcon/>
                {data.userName}
                </p>
                <p class="text-slate-500 font-medium ">
                {data.message}      </p>
              </div>
            </div>
          </div>

    //     <Box sx={{ pb: 0 }} >
    //     <CssBaseline />
    //     <List>
          
    //         <ListItem className="box2 text-white">
    //           <ListItemAvatar>
    //             <Avatar alt="Profile Picture"  />
    //           </ListItemAvatar>
    //           <ListItemText primary={data.userName} secondary={data.message} className="text-white"/>
    //         </ListItem>
          
    //     </List>
    //     <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    //         <ButtonSendMess/>
    //     </Paper>
    //   </Box>
          
            
        )
    })

    function refreshPage() {
        window.location.reload(false);
    }


    return (
        <div>
      <h1 style={{
        top: '0%',
        position: 'absolute'
        
      }
      }>
        </h1>
      {headName}
       <div style={{
           textAlign: 'center',
           justifyConent: 'center',
       }}>
       <tr>
        </tr>
       {arr}

       </div >
       <div className='min-w-full'>
        
       </div>
       </div>
      
    )

}

export default ChannelPage;