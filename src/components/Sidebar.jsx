import React from 'react'

const Sidebar = ({isSidebarOpen}) => {
  return (
    <aside className={`${isSidebarOpen ? 'fixed' : 'hidden' } md:hidden px-4 py-2 top-16 left-0 max-w-1/4 min-w-50 md:min-w-40 bg-linear-to-br from-white to-primary  h-screen`} >
        <ul className="flex flex-col gap-4 py-6" >
          <a><li>Home</li></a>
          <a><li>About</li></a>
          <a><li>Services</li></a>
          <a><li>Contact Us</li></a>
        </ul>
    </aside>
  )
}

export default Sidebar