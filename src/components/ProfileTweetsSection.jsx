import {useState, useEffect} from 'react'
import PostCard from './PostCard'
import { getUserPosts } from '../../services/apis'

const ProfileTweetsSection = ({user}) => {
  const [posts, setPosts] = useState()
  const [loading, setLoading] = useState(true)
  
  const fetchUserPosts = async () => {
    try{
      let data = await getUserPosts(user.id)
      setPosts(data)
      setLoading(false)
    }
    catch(err){
      console.log(err)
    }
  }
  
  useEffect(()=>{
    fetchUserPosts()
  },[])
  
  const demoUserTweets = [{
    id:1,
    username: "sohail40",
    postId: 's1022',
    userFullname: 'Md Sohail',
  },
  {
    id:2,
    username: "sohil40",
    postId: 's1022j393',
    userFullname: 'Sohil',
  },
    {
    id:3,
    username: "sahil40==",
    postId: 's1022j4949393',
    userFullname: 'Sahil',
  },
  ]
  
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
            <PostCard tweet={tweet} user={user} />
          ))
          }
        </div>
      }  
    </div>
  )
}

export default ProfileTweetsSection