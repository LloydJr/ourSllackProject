import React from 'react'
import styled from 'styled-components'

function SidebarOption({Icon, title, addChannelOption}) {


  const addChannel = () => {

  }
  const selectChannel = () => {

  }


  return (
    <SidebarOptionContainer
    onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize ="large" style={{ padding: 8 }}/>}
      {
      Icon ? (
      <h3>{title}</h3>
      ) : ( 
        <SidebarOptionChannel >
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  )
}
 
export default SidebarOption

const SidebarOptionContainer = styled.div`
dipsly: Flex;;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;

:hover {
  opacity: 0.9;
  background-color: #87cefa;
}

>h3 {
  font-weight: 500;
  font-size: 15px;
}
> h3 > span {
  padding 15px;
}
`;

const SidebarOptionChannel = styled.div``;