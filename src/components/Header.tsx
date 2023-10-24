import React, { useContext } from 'react'
import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../utils/ReactContext'

const Header = () => {
  const navigate = useNavigate()
  const { userName, handleLogin, isLoggedIn } = useContext(UserContext)
  return (
    <div className="headercontainer">
      <div className='headerHeading' onClick={() => navigate('/')}>Header</div>
      <ul className='listContainer'>
        <Link to='/about'><li className='listIteam'>About us</li></Link>
        <Link to='/contact'><li>contact us</li></Link>
        <li onClick={handleLogin}>{!isLoggedIn ? 'Login' : 'LogOut'}
          <p>{isLoggedIn && userName}</p>

        </li>
      </ul>

    </div>

  )
}

export default Header