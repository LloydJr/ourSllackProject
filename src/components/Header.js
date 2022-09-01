import React from 'react'
import imageSllacker from './images/sllacker.png'
import userIcon from './images/149071.png'
import searchIcon from './images/1024px-Search_Icon.svg.png'
import App from '../App'
import styled from 'styled-components'
import ChannelPage from './ChannelPage'
import Navigation from './Navigation'


function Header() {
  return (
    <header className="border-b p-3 flex justify-between items-center Header">

    <div class="shrink-0 h-18 w-32 ...">
        <img src={imageSllacker} alt="" />
    </div>
    <div class="absolute right-0 h-14 w-16 ... pr-4">
    {/* <img src={userIcon} alt="" /> */}
    </div>
    <div class="md:container md:mx-auto">
    {/* <img src={searchIcon} alt="" class="shrink-0 h-6 w-6 ... "/> */}
         <input placeholder="Search" class="w-25"/>
    </div>
    <Navigation />
    </header>
    
    
  )
}

export default Header

const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
`;

const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left: 20px;
`;