import React,{useContext, useState} from "react"

const UserContext=React.createContext({
    userName:"test",
    userId:"1",
    handleLogin:()=>{
   },
    isLogdin:false
})
export default UserContext
  export const Provider=()=>{
    const [login,setLogin]=useState(false)
   const handelLogin=()=>{
    setLogin(!login)
    }
    // return(
    //   // <UserContext.Provider value={{...login,setLogin}}></UserContext.Provider>
    // )
  }


