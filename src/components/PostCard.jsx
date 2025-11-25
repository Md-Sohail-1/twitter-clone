import {useState, useEffect} from 'react'
import { Link } from 'react-router'
import { getUser } from '../../services/apis'
import { RxDotsVertical } from "react-icons/rx"


const PostCard = ({tweet, user}) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [fullDesc, setFullDesc] = useState(false)
  
  
  const fetchUser = async () => {
    if(!user){

      try{
        let data = await getUser(tweet.userId);
        setCurrentUser(data);
        setLoading(false)
      }
      catch(err){
        console.log(err)
      }
    }
    else{
      setCurrentUser(user)
      setLoading(false)
      
    }
  }
  
  useEffect(() => {
    fetchUser()
    return () => {
    }
  }, [])
  
  
  return (
    <div className="h-auto mx-auto min-h-60 w-full border border-primary rounded-sm overflow-hidden flex flex-col" >
      {loading ? <>
        <p>Loading...</p>
      </> :
      <>
        <div className="h-14 w-full bg-slate-100/50 flex items-center gap-2 px-4">
        <div className="">
          <img className="h-10 w-10 bg-primary rounded-full overflow-hidden"/>
        </div>
        <Link to={`/profile/${currentUser.id}`}>
          <b>{currentUser?.name}</b>
        </Link>
        <div className="ml-auto" >
          <RxDotsVertical />
        </div>
        </div>
        <Link to={`/posts/${tweet.id}`} className="min-h-36 max-h-auto px-4 py-2" >
        <p>{tweet.body}</p>
        </Link>
        <div className="min-h-auto max-h-auto pb-2 max-h-auto bg-slate-100/50 " >
          <div className="px-4 py-4" >
          <p>
            <Link to={`/profile/${currentUser.id}`}><b>{currentUser?.username} </b></Link>
            { fullDesc ? 
              <> 
                {tweet.title + ' '}
                {
                tweet.title.length >=10 &&
                  <button className="text-sm text-indigo-400" onClick={()=>setFullDesc(!fullDesc)}> Show Less</button> 
                }
              </> : 
              <>
                {tweet.title.substr(0,10)}... <button className="text-sm text-indigo-400" onClick={()=>setFullDesc(!fullDesc)}>Show More</button>
              </>
            } 
          </p>
        </div>
        </div>
      </>
      }
    </div>
  )
        //   <div className="px-4 h-10 flex items-center gap-8" >
        //   <i>L</i>
        //   <i>C</i>
        //   <i>S</i>
        //   <i className="ml-auto" >R</i>
        // </div>
}

export default PostCard