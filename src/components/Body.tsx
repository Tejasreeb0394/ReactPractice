import React, { useEffect, useState } from 'react'
import Card, { userData } from './Card'
import { Link } from 'react-router-dom'


  
const Body = () => {
    const [userData, setUserData] = useState<userData[]>([])
    const getUserApi = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        const userData = await data.json()
        setUserData(userData)
    }
    useEffect(() => {
        getUserApi()
    }, [])
    return (
        <div className='gridContainer'>
             {userData.map((user)=>(
                <Link to={`/${user.id}`}><Card key={user.id} {...user}/></Link>
              ))}
            </div>

      

    )
}

export default Body

