import React, { useState, useEffect } from 'react'
import PostCard from '../components/PostCard'
import { getPostById } from '../../services/apis'
import { useParams } from 'react-router'
import CommentSection from '../components/CommentSection'


const PostPage = () => {
    const {id} = useParams()
    const [loading, setLoading ] = useState(true)
    const [post, setPost] = useState()
    
    const fetchPosts = async () => {
        let data = await getPostById(id)
        setPost(data)
        setLoading(false)
        //alert(JSON.stringify(data))
      }
      
      useEffect(()=>{
        fetchPosts()
      },[])


    return (
        <div className='mt-20 md:absolute md:left-1/5 md:pb-20 top-0 mb-20 mx-4 flex flex-col gap-4 min-h-screen max-h-auto overflow-y-auto overflow-x-hidden ' >
        {loading ? <>
        <p>Loading...</p>
        </> :
        <>
        <PostCard tweet={post} user={undefined} key={post.id}/>
        <CommentSection postId={post.id}/>
        </>
        }
    </div>
    )
}

export default PostPage