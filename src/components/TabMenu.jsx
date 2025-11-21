import React from 'react'
import { Link,Route } from 'react-router'

import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6"
import { GrAddCircle } from "react-icons/gr"
import { FiUser } from "react-icons/fi"


const TabMenu = () => {
  let randomUserId = Math.floor(Math.random() * 10 ) +1

  return (
    <>
      <nav className="flex z-50 overflow-hidden fixed bottom-0 w-screen h-16 bg-white" >
        <ul className="flex pt-2 justify-around w-full shadow-md text-xl" >
          <Link to="/" className="relative flex items-center justify-center h-8 w-8 hover:bg-primary hover:text-background rounded-full">
            <AiFillHome />
            <li className="absolute -bottom-5 z-40 w-content text-sm" >Home</li>
          </Link>
          <Link to="/search" className="relative flex items-center justify-center h-8 w-8 hover:bg-primary hover:text-background rounded-full">
            <IoSearch />
            <li className="absolute -bottom-5 z-40 w-content text-sm" >Search</li>
          </Link>
          <Link to="/" className="relative flex items-center justify-center h-8 w-8 hover:bg-primary hover:text-background rounded-full">
            <GrAddCircle />
            <li className="absolute -bottom-5 z-40 w-content text-sm" >Create</li>
          </Link>
          <Link to={`/profile/${randomUserId}`} className="relative flex items-center justify-center h-8 w-8 hover:bg-primary hover:text-background rounded-full">
            <FiUser />
            <li className="absolute -bottom-5 z-40 w-content text-sm" >Profile</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default TabMenu