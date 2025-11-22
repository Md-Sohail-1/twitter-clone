import React from 'react'
import { Link } from 'react-router'


const SearchedUserCard = ({user}) => {
  return (
    <Link to={`/profile/${user.id}`} className="flex items-center gap-4 h-16 border-y border-slate-200/50" >
              <div>
                <img className="h-12 w-12 rounded-full bg-primary overflow-hidden" />
              </div>
              <div className="flex flex-col gap-0">
                <b>{user.name}</b>
                <p>{user.username}</p>
              </div>
    </Link>
  )
}

export default SearchedUserCard