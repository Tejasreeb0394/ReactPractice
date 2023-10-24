import React, { useContext, useState } from 'react'
import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../utils/ReactContext'

const Header = () => {
  const navigate =useNavigate()
  const [useLogin,setUseLogin]=useState<boolean>()
  const{userName,userId}= useContext(UserContext)
  return (
    <div className="headercontainer">
        <div className='headerHeading' onClick={()=>navigate('/')}>Header</div>
      <ul className='listContainer'>
        <Link to='/about'><li className='listIteam'>About us</li></Link>
        <Link to='/contact'><li>contact us</li></Link>
        <li onClick={()=>setUseLogin(!useLogin)}>{!useLogin?'Login':'LogOut'}
         <p>{useLogin&&userName}</p>
        
        </li>
      </ul>
        
    </div>
     
  )
}

export default Header