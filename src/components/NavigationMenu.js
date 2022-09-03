import React from 'react'
import { Link } from 'react-router-dom'
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';




function NavigationMenu(props) {
  return (
    <div>
    <span className="text-black font-bold py-3">
                User Name
            </span>
            <ul>
        <li>
          <Link to="/user_profile" className="text-blue-500 py-3 border-t border-b block" 
          onClick={props.closeMenu}><AccountCircleIcon/>User Profile</Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><InsertCommentIcon/>Threads</Link>
        </li>
        <li>
          <Link to="/directory" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><InboxIcon/>Mentions & Reactions</Link>
        </li>
        {/* <li>
          <Link to="/about" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}>Saved Items</Link>
        </li> */}
        <li>
          <Link to="/channel_browser" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><BookmarkBorderIcon/>Channel Browser</Link>
        </li>
        {/* <li>
          <Link to="/about" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}>People & User Groups</Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}>Apps</Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}>File Browser</Link>
        </li> */}
        <li>
          <Link to="/about" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><ExpandMoreIcon/>Channels</Link>
        </li>
        <li>
          <Link to="/direct_messages" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><ExpandMoreIcon/>Direct Messages</Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500 py-3 border-b block" 
          onClick={props.closeMenu}><InfoIcon/>About</Link>
        </li>
      
      </ul>
      </div>
  )
}

export default NavigationMenu