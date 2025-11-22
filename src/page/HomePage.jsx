import { useState, useEffect } from 'react'
import PostCard from '../components/PostCard'
import { getPosts } from '../../services/apis'

const HomePage = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true)
  
  const fetchPosts = async () => {
    let data = await getPosts()
    setPosts(data.slice(9,22))
    setLoading(false)
    //alert(JSON.stringify(data))
  }
  
  useEffect(()=>{
    fetchPosts()
  },[])
  
  return (
    <div className='mt-20 md:absolute md:left-1/5 md:pb-20 top-0 mb-20 mx-4 flex flex-col gap-4 min-h-screen max-h-auto overflow-y-auto overflow-x-hidden ' >
      {
        loading ? <>
          <h1>Loading....</h1>
        </>: 
        <>
        { 
        posts.map((post)=>(
          <PostCard tweet={post} user={undefined} key={post.id}/>
        ))
        }
        </>
     }
    </div>
  )
}

export default HomePage