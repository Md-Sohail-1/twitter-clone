const CommentBox = ({comment}) => {
  return (
    <div className='h-auto p-4 w-full bg-slate-100/50 rounded-md'>
        <div>
            <b>{comment.email}</b>
        </div>
        <div>
            <p>{comment.name+" "+comment.body}</p>
        </div>
    </div>
  )
}

export default CommentBox