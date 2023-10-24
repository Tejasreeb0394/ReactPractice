
import { useNavigate, useParams } from 'react-router-dom'
import Card, { userData } from './Card'
import useUserDetailes from '../utils/useUserDetailes'
import {HocUserDetailes}  from './HocUserDetailes'
const UserDetailes = () => {
    const parm=useParams()
    const navigate=useNavigate()
    const userdata=useUserDetailes(parm?.id)
    if(!userdata)return <h1>Loading</h1>
    const HocComponent=HocUserDetailes(Card)
   return (
    <>
    {false?<Card {...userdata as userData}/>:<HocComponent {...userdata as userData}/>}
   
    </>
  )
}

export default UserDetailes