import { useState, useEffect } from 'react'
import PostCard from '../components/PostCard'
import { getPosts } from '../../services/apis'
import BASE_URL from '../../services/helper.js'

const HomePage = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true)
  // const Posts = [{
  //   id:1,
  // },
  // {
  //   id:2,
  // },
  // {
  //   id:3,
  // },
  // {
  //   id:4,
  // }]
  
  const fetchPosts = async () => {
    let data = await getPosts()
    setPosts(data.slice(9,12))
    setLoading(false)
    //alert(JSON.stringify(data))
  }
  
  useEffect(()=>{
    fetchPosts()
  },[])
  
  return (
    <div className='mt-20 mb-20 mx-4 flex flex-col gap-4 min-h-screen max-h-auto overflow-y-auto overflow-x-hidden ' >
      {
        loading ? <>
          <h1>Loading....</h1>
        </>: 
        <>
        { 
        posts.map((post)=>(
          <PostCard tweet={post}/>
        ))
        }
        </>
     }
    </div>
  )
}

export default HomePage