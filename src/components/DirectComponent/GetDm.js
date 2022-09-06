// import axios from 'axios';
// import React from 'react'
// import { useState, useEffect } from 'react'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// function GetDm() {

// const { dm, setDm } = useState();
// useEffect(() => {
//     const userName = localStorage.getItem("user")
//     axios.get(`http://localhost:8080/dm/${userName}`)
//     .then(response => {
//         setDm(response.data)
//     })
// }, [])


//   return (
//     <div>
//       <h1 style={{
//         top: '0%',
//         position: 'absolute'
        
//       }
//       }>
//         </h1>
//        <div style={{
//            textAlign: 'center',
//            justifyConent: 'center',
//        }}>
//        <tr>
//         </tr> 
//         {dm.map((data1) => { 
//            const arr = (
//         <div className="box2 text-center py-8 px-8 mx-auto rounded-xl sm:py-4">
//             <div class="text-center space-y-2 sm:text-left">
//               <div class="space-y-0.5">
                
                
//                 <AccountCircleIcon/>
//                 {data1.userName}
            
//                 <p class="text-lg text-white font-semibold">
//                 {data1.message} 
//                 </p>
//               </div>
//             </div>
//           </div>   
//            )
//            return arr;
//         })}
//        {/* {arr} */}

//        </div >
//        <div className='min-w-full'>
        
//        </div>
//        </div>
//   )
// }

// export default GetDm