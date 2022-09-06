import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function ChannelPage() {



    const [data, setData] = useState([])
    const [user, setUser] = useState([])

    
    useEffect(  () => {
        const logChannel = localStorage.getItem("channelName")
        axios.get(`http://localhost:8080/channel/messages/${logChannel}/`)
       .then(res => {
           setData(res.data)
       }).catch(err => console.log(err))
       
    }, [data, data])


    useEffect( () => {
      const logChannel = localStorage.getItem("channelName")
      axios.get(`http://localhost:8080/channel/messages/${logChannel}/`)
     .then(res => {
         setUser(res.data)
     }).catch(err => console.log(err))
    }, [user])

    const headName = user.map((data) => {
        return (
            <h1 className="box3 text-3xl text-white text-center">{data.channel.channelName}</h1>
        ) 
    })

   

    // const arr = data.map((data1, index) => {
    //     return (
    //         <div className="box2 text-center py-8 px-8 mx-auto rounded-xl sm:py-4">
    //         <div class="text-center space-y-2 sm:text-left">
    //           <div class="space-y-0.5">
                
    //             <p class="text-slate-500 font-medium ">
    //             <AccountCircleIcon/>
    //             {data1.userName}
    //                  </p>
    //             <p class="text-lg text-white font-semibold">
    //             {data1.message} 
    //             </p>
    //           </div>
    //         </div>
    //       </div>   
    //     )
    // })

    

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
        {data.map((data1) => { 
           const arr = (
        <div className="box2 text-center py-8 px-8 mx-auto rounded-xl sm:py-4">
            <div class="text-center space-y-2 sm:text-left">
              <div class="space-y-0.5">
                
                
                <AccountCircleIcon/>
                {data1.userName}
            
                <p class="text-lg text-white font-semibold">
                {data1.message} 
                </p>
              </div>
            </div>
          </div>   
           )
           return arr;
        })}
       {/* {arr} */}

       </div >
       <div className='min-w-full'>
        
       </div>
       </div>
      
    )

}

export default ChannelPage;