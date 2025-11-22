import React, { useContext } from 'react'
import {pageContext} from "../../context/pageContext"

const CreateTweetPage = () => {

  const userId= useContext(pageContext)
  return (
    <div  className="mt-20 mb-20 md:absolute md:left-1/5 py-10 md:py-8 md:w-4/5 md:top-0 overflow-x-hidden">
        <form id='create-post-form' className='mx-auto md:h-84 h-[400px] max-w-1/2 min-w-84 border border-slate-300 rounded-md p-4 flex flex-col gap-4 justify-center'>
            <h3 className='text-center text-xl'>Create Post {userId}</h3>
            <input type='text' placeholder='Enter Title' className='border h-12 px-3 py-2 rounded-md hover:border-purple-400 focus:border-purple-400 focus:bg-white outline-0 outline-primary border-primary'/>
            <textarea type='text' placeholder='Enter Body' className='border h-30 px-3 py-2 rounded-md hover:border-purple-400 focus:border-purple-400 focus:bg-white outline-0 outline-primary border-primary'></textarea>
            <button className='bg-brand text-white p-3 rounded-full text-md font-bold'>Submit</button>
        </form>
    </div>
  )
}

export default CreateTweetPage  