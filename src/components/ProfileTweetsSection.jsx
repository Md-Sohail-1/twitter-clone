import {useState, useEffect} from 'react'
import PostCard from './PostCard'
import { getUserPosts } from '../../services/apis'

const ProfileTweetsSection = ({user}) => {
  const [posts, setPosts] = useState()
  const [loading, setLoading] = useState(true)
  
  const fetchUserPosts = async () => {
    try{
      let postsData = await getUserPosts(user.id)
      setPosts(postsData)
      setLoading(false)
    }
    catch(err){
      console.log(err)
    }
  }
  
  useEffect(()=>{
    fetchUserPosts()
  },[])
  
  return (
    <div className="px-4 pb-20" >
        <p className="py-4" >Tweets</p>
      
      {
        loading ? <>
          <p>Loading...</p>
        </> :
        <div className="flex flex-col gap-4" >
          {
          posts.map((tweet)=>(
            <PostCard tweet={tweet} user={user} key={tweet.id} />
          ))
          }
        </div>
      }  
    </div>
  )
}

export default ProfileTweetsSection