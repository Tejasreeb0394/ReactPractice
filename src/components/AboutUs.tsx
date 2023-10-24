import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmailUs from './EmailUs'

const AboutUs = () => {
  const [emailid,setEmailId]=useState<string>()
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