import {useState, useEffect} from 'react'
import {getUser} from '../../services/apis'
import { useParams } from 'react-router'

import ProfileDetailSection from '../components/ProfileDetailSection'
import ProfileTweetsSection from '../components/ProfileTweetsSection'


const ProfilePage = () => {
  const {id} = useParams()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const fetchUser = async () => {
    try{
      let data = await getUser(id)
      setUser(data)
      setLoading(false)
    }
    catch(err) {
      console.log(err)
    }
  }
  
  useEffect(()=>{
    fetchUser()
  },[])
  
  return (
    <div className="relative z-10 bg-white" >
      {
        loading ? <>
          <p>Loading...</p>
        </> :
        <>
        <ProfileDetailSection user={user} />
        <ProfileTweetsSection user={user} />
        </>
      }
    </div>
  )
}

export default ProfilePage