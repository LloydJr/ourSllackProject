import styled from 'styled-components'
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import AddIcon from '@mui/icons-material/Add';
import TagIcon from '@mui/icons-material/Tag';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom'





function Sidebar() {
  return (
    <SidebarContainer className='widthJawn fixed'>

      <SidebarHeader>
        <SidebarInfo>
          <h2>Menu</h2>
        </SidebarInfo>
        {/* <CreateIcon className='hover: opacity: 0.9 background-color: #87cefa'/> */}
      </SidebarHeader>

      <hr />
      {/* <SidebarOption Icon={PersonIcon} title="User Profile" />
      <hr /> */}

      <Link to="/current_channel">
      <SidebarOption Icon={InsertCommentIcon} title="Current Channel" />
      </Link>
      <hr />
      <Link to="/search_channel">
      <SidebarOption Icon={TagIcon} title="Select Channel" href="" />
      </Link>
      <hr />
      <Link to="/put_in_user">
      <SidebarOption Icon={AddIcon} title="Add User to Channel" />
      </Link>
      <hr />
      <Link to="/put_out_user">
      <SidebarOption Icon={RemoveIcon} title="Remove User from Channel" href="" />
      </Link>
      <hr />
      <Link to="/add_channel">
      <SidebarOption Icon={AddIcon} title="Add Channel" href="" />
      </Link>
      <hr />
      <Link to="/remove_channel">
      <SidebarOption Icon={RemoveIcon} title="Remove Channel" href="" />
      </Link>
      <hr />
      {/* <SidebarOption Icon={ExpandMoreIcon} title="About" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Direct Message" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" /> */}

    </SidebarContainer>

  )
}

export default Sidebar

const SidebarContainer = styled.div`
color: white;
flex: 0.3;
margin-top: 9vh;
width: 150px

>hr {
  margin-top: 7px;
  margin-bottom: 25px;
  border: 1px solid #b0c4de;
  object-fit: contain;
}
`;

const SidebarHeader = styled.div`
display: flex;
border-bottom 1x #49274b;
padding: 13px;

> .MuiSvgIcon-root {
  padding: px;
  color: #49274b;
  font-size: 18px;
  background-color: white;
  border-radius: 999px;
}
`;

const SidebarInfo = styled.div`
flex: 1;

// :hover {
//   opacity: 0.9;
//   background-color: #87cefa;
// }

>h2 {
font size: 15px;
font-weight: 900;
margin-bottom: 5px;
}

>3 {
  display: flex;
font size: 13px;
font-weight: 400;
align-items: center;
}

`;