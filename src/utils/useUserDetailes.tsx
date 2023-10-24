import { useEffect, useState } from "react"
import { userData } from "../components/Card"


const useUserDetailes = (id?:string) => {
    const [userdata,setUserData]=useState<userData>()
    const  getUserDataById=async (id:string)=>{
        const OneUser= await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const jsonData= await OneUser.json()
          setUserData(jsonData )
        }
        useEffect(()=>{
            if(id){
            getUserDataById(id)
            }
        },[id])
        return userdata
 
}

export default useUserDetailes