import { ListItem } from '@mui/material'
import React from 'react'
import { IoMdTennisball } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function SubMenu() {

  const SubMenu = ({ item }) => {
    
  }
  return (
    <>
      {/* <SideBarLink to={item.path}>
        <div>
          {item.icon}
          <sideBarLabel>
            {item.title}
          </sideBarLabel>
        </div>
        </SideBarLink> */}
      </>
  )
}

export default SubMenu

const SideBarLink = styled(Link)`
display: flex;
color: #e1e9fc;
`;

const SideBarLabel = styled.span`

`;
