import React from 'react'
import imageSllacker from '../images/sllacker.png'
import styled from 'styled-components'
import Navigation from './Navigation'


function Header() {
  return (

    // border-b p-3 flex justify-between items-center Header

    <header className="bg-rgb(89, 121, 180)
    text-3xl text-white text-center
    border-t-2 border-white
    inset-x-0
    top-0
    p-4 rgb(89, 121, 180)
    border-b p-3 flex justify-between items-center Header">

    <div class="shrink-0 h-18 w-32 ...">
        <img src={imageSllacker} alt="" />
    </div>
    {/* <div class="absolute right-0 h-14 w-16 ... pr-4"> */}
    {/* <img src={userIcon} alt="" /> */}
    {/* </div> */}
    <div class="md:container md:mx-auto">
    {/* <img src={searchIcon} alt="" class="shrink-0 h-6 w-6 ... "/> */}
         {/* <input placeholder="Search" class="w-25 text-black"/> */}
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