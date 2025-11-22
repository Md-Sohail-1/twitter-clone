import React, { useState } from 'react'
import { IoMdNotificationsOutline } from "react-icons/io"
import Sidebar from './Sidebar'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  return (
    <div>
      <header className="flex border-b-1 border-primary h-16 w-screen items-center justify-between px-4 bg-linear-to-l to-purple-500 from-brand  text-primary z-50 fixed top-0" >
        <div className="text-xl" >Tweets</div>
        <div className="flex gap-4 items-center text-xl md:text-2xl" >
          <IoMdNotificationsOutline />
         <button className='md:hidden' onClick={()=>setIsSidebarOpen(!isSidebarOpen)} >{isSidebarOpen ? <RxCross2/> : <RxHamburgerMenu/>}</button> 
        </div>
      </header>
      <Sidebar isSidebarOpen={isSidebarOpen}/>
      <aside className={`md:fixed hidden md:flex px-4 py-2 top-16 left-0 w-1/5 bg-linear-to-br from-salte-100 to-primary  h-screen`} >
        <ul className="flex flex-col gap-4 py-6" >
          <a><li>Home</li></a>
          <a><li>About</li></a>
          <a><li>Services</li></a>
          <a><li>Contact Us</li></a>
        </ul>
      </aside>
    </div>
  )
}

export default Header