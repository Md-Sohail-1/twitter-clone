import {useState, useEffect} from 'react'
import { getPostComments } from '../../services/apis'
import { Link } from 'react-router'
import CommentBox from './CommentBox'

const CommentSection = ({postId}) => {
    const [comments, setComments] = useState()
    const [loading, setLoading] = useState(true)

    const fetchPostComments = async() => {
      try{
        let data = await getPostComments(postId)
        setComments(data)
        setLoading(false)
      }
      catch (err){
        console.log(err)
      }
    }

    useEffect(()=>{
      fetchPostComments()
    },[])


    return (
    <div>
        {
            loading ? <>
                <p>loading....</p>
            </> :
            <div className='flex flex-col gap-2'>
              <b className='text-xl px-2'>Comments :-</b>
              {
                comments.map((comment)=>(
                  <CommentBox comment={comment} key={comment.id} />
                ))
              }
            </div>
        }
    </div>
    )
}

export default CommentSection