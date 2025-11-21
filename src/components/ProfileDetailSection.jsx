// import { useState, useEffect } from 'react'
// import { getUser } from '../../services/apis'

const ProfileDetailSection = ({user}) => {
  // const [user, setUser] = useState();
  // const [loading, setLoading] = useState(true)
  
  // const fetchUser = async () => {
  //   try{
  //     let data = await getUser(userId)
  //     setUser(data)
  //     setLoading(false)
  //     alert(JSON.stringify(data))
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }
  
  // useEffect(()=>{
  //   fetchUser()
  // },[])
  
  
  return (
    <>
      <div className="w-screen h-auto relative" >
        <img alt="user-bg-image" src={user?.image} className="w-full h-28 bg-slate-500 " />
        <div className="flex" >
          <img alt="user-profile-image" className="absolute h-24 w-24 bg-brand rounded-full -bottom-4 left-3 border-4 border-white" />
          <div className="ml-auto mr-4 flex gap-2 mt-2" >
            <button className="border-1 border-brand rounded-full px-6 py-1" >Follow</button>
          </div>
        </div>
        <i className="absolute top-2 left-4 text-xl" ></i>
      </div>
          <div className="border-b-10 border-primary flex flex-col gap-1 h-auto pb-5 w-screen mt-6 px-4" >
        <b className="text-xl" >{user.name}</b>
        <h3 className="text-slate-800/50" >@{user.username}</h3>
        <p>Webiste: <a href={`https://${user.website}`} className="text-indigo-500" >{user.website}</a></p>
        <h3 className="text-slate-800/50" >Email Id: {user.email}</h3>
      </div>
    </>
  )
            // <i className="border-1 border-brand rounded-full px-1 h-8 w-8 flex items-center justify-center" >n</i>
            // <i className="border-1 border-brand rounded-full px-1 h-8 w-8 flex items-center justify-center" >V</i>
        // <p className="flex gap-2" >
        //   <b>0</b><span className="pr-5 text-slate-800/50" >Following</span>
        //   <b>0</b><span className="pr-5 text-slate-800/50" >Follower</span>
        // </p>
}

export default ProfileDetailSection