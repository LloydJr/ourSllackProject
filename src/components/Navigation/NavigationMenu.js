import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ChatIcon from '@mui/icons-material/Chat';
import TagIcon from '@mui/icons-material/Tag';
import HomeIcon from '@mui/icons-material/Home';





function NavigationMenu(props) {
  const loggedInUser = localStorage.getItem("user");



  return (
    
    <div>
    <span className="text-black font-bold py-3">
               {loggedInUser}
            </span>
            <ul>
            <li>
          <Link to="/channel_home" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><HomeIcon/>Home</Link>
        </li>
        <li>
          <Link to="/user_profile" className="text-blue-500 py-3 border-t border-b block" 
          onClick={props.closeMenu}><AccountCircleIcon/>User Profile</Link>
        </li>
        {/* <li>
          <Link to="/current_channel" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><ChatIcon/>Current Channel</Link>
        </li> */}
        {/* <li>
          <Link to="/search_channel" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><TagIcon/>Select Channels</Link>
        </li> */}
        {/* <li>
          <Link to="/put_in_user" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><AddIcon/>Add user to channel</Link>
        </li> */}
        {/* <li>
          <Link to="/put_out_user" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><RemoveIcon/>Remove User from Channel</Link>
        </li> */}
        {/* <li>
          <Link to="/add_channel" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><AddIcon />Add Channel</Link>
        </li> */}
        {/* <li>
          <Link to="/remove_channel" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><RemoveIcon />Remove Channel</Link>
        </li> */}
        {/* <li>
          <Link to="/direct_messages" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><ExpandMoreIcon/>Direct Messages</Link>
        </li> */}
        <li>
          <Link to="/about" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><InfoIcon/>About</Link>
        </li>
        <li  onClick={handleLogout}>
          <Link to="/" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu} ><LogoutIcon />Logout</Link>
        </li>

      
      </ul>
      </div>
  )
}

export default NavigationMenu

const handleLogout = () => {
  localStorage.clear();
};