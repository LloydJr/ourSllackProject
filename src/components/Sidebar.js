import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';import React from 'react'
import styled from 'styled-components'
import App from '../App';
import CreateIcon from '@mui/icons-material/Create';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Organization</h2>
        </SidebarInfo>
        <CreateIcon className='hover: opacity: 0.9 background-color: #87cefa'/>
      </SidebarHeader>
      <hr />
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & User Groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File Browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />


    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
background-color:  rgb(89, 121, 180);
color: white;
flex: 0.3;
border-top: 1px solid #49274b;
max-width: 200px;
max-height: full;

>hr {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #b0c4de;
}
`;

const SidebarHeader = styled.div`
display: flex;
border-bottom 1px #49274b;
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

:hover {
  opacity: 0.9;
  background-color: #87cefa;
}

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