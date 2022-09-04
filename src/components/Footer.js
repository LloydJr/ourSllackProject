import React from 'react'
import ButtonSendMess from './ButtonSendMess'

function Footer() {
  return (
    <footer className="bg-blue-1998
    text-3xl text-white text-center
    border-t-2 border-white
    fixed
    inset-x-0
    bottom-0
    p-4">
        {/* &copy; Copyright 2022 */}
        <ButtonSendMess />
    </footer>
  )
}

export default Footer

//     <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full">