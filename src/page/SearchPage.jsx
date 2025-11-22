import {useState, useEffect} from 'react'
import { Link } from 'react-router'
import { getUsers } from '../../services/apis'
import SearchedUserCard from '../components/SearchedUserCard'

const SearchPage = () => {
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [filteredUsers, setFilteredUsers] = useState()
  
  const fetchUsers = async () => {
    try{
      let data = await getUsers()
      setUsers(data)
      setFilteredUsers(data)
      setLoading(false)
    }
    catch(err){
      console.log(err)
    }
  }
  
  const handleSearchChange = (e) => {
    let query = e.target.value;
    setFilteredUsers(users)
    setSearch(query);
    //setUsers(filterArray)
    let filterArray = users.filter((user)=>{
      return user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.username.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
    })
    setFilteredUsers(filterArray)
  }
  
  useEffect(()=>{
    fetchUsers()
  },[])
  
  return (
    <div className="mt-20 mb-20 md:absolute md:left-1/5 md:w-4/5 md:top-0 overflow-x-hidden" >
      <div className='mx-4'>
        <input type="search"
        className="h-12 border-2 border-slate-200/50 outline-none focus:border-2 focus:border-slate-400/50 w-full px-4 rounded-xl " 
        placeholder="Search here..." 
        value={search}
        onInput={handleSearchChange}
        />
      </div>
      {
      loading ? (
      <>
        <p>Loading...</p>
      </> 
      ) : (
        filteredUsers.length > 0 ? (
          <div className="flex flex-col mt-6 px-2 mx-2 w-full" >
          {
            filteredUsers.map((user)=>(
              <SearchedUserCard user={user} key={user.id} />
            ))
          }
        </div>
        ) : (
        <div>
          <p>Not Found</p>
        </div>
          )
        )
      }
    </div>
  )
}

export default SearchPage