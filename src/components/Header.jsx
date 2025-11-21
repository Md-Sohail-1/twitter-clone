import React, { useState } from 'react'
import { IoMdNotificationsOutline } from "react-icons/io"


const Header = () => {
  //const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  return (
    <>
      <header className="flex h-16 w-screen items-center justify-between px-4 bg-brand text-primary fixed top-0" >
        <div className="text-xl" >Tweets</div>
        <div className="flex gap-4 items-center text-xl" >
          <IoMdNotificationsOutline />
          <p>M</p>
         {
        // <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)} >W</button>
         } 
        </div>
      </header>
      {/*
      <aside className={`${isSidebarOpen ? 'fixed' : 'hidden' } px-4 py-2 top-16 left-0 w-2/3 bg-primary h-screen`} >
        <ul className="flex flex-col gap-4 py-6" >
          <a><li>Home</li></a>
          <a><li>About</li></a>
          <a><li>Services</li></a>
          <a><li>Contact Us</li></a>
        </ul>
      </aside>
      */}
    </>
  )
}

export default Header