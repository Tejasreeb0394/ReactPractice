import React, { useState } from "react"


type UserContextType = {
  userName: string
  userId: string
  isLoggedIn: boolean
  handleLogin?: () => void
}


const inititalUserData = {
  userName: "test",
  userId: "1",
  isLoggedIn: false
}


const UserContext = React.createContext<UserContextType>(inititalUserData)
export default UserContext



export const UserProvider = (props: {children: JSX.Element}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  
  return (
    <UserContext.Provider value={{ ...inititalUserData, isLoggedIn, handleLogin }}>
      {props.children}
    </UserContext.Provider>
  )
}


