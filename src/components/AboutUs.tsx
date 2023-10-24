import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmailUs from './EmailUs'
import { useQuery } from '@apollo/client'
import { Login_User } from '../utils/querys'

const AboutUs = () => {
 
  const [emailid,setEmailId]=useState<string>()
  const {loading,data,error}=useQuery(Login_User)
  console.log(data,error,loading)
    const navigate =useNavigate()
    const getNavigate=()=>{
       navigate(-1);
    }
    
  return (
    <>
    <div>AboutUs</div>
    <EmailUs setEmailId={setEmailId}/>
    <p>emailid:{emailid}</p>
    <button id="goToHome" onClick={getNavigate}>goToHomePage</button>
    </>
  )
}

export default AboutUs