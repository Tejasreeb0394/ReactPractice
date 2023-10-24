import React, { useContext, useEffect, useState } from 'react'
import Card, { userData } from './Card'
import { Link } from 'react-router-dom'
import UserContext from '../utils/ReactContext'



const Body = () => {
    const [userData, setUserData] = useState<userData[]>([])
    const { isLoggedIn, userName } = useContext(UserContext)
    
    const getUserApi = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        const userData = await data.json()
        setUserData(userData)
    }
    useEffect(() => {
        getUserApi()
    }, [])

    return (
        <>
            {isLoggedIn && <h1>{userName}</h1>}
            <div className='gridContainer'>

                {userData.map((user) => (
                    <Link to={`/${user.id}`}><Card key={user.id} {...user} /></Link>
                ))}
            </div>
        </>
    )
}

export default Body

