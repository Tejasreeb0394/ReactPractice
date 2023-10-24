import React from 'react'
import { userData } from './Card'
import {useNavigate } from 'react-router-dom'

export const HocUserDetailes = (Card:any) => {
    
  const Hoc= (props:userData)=>{
    const navigate=useNavigate()
       return(
            <>
            <Card {...props}/>
            <button id="gotoHomePage" onClick={()=>navigate(-1)}>gotoHomePage</button>
            </>
       )
  }
  return Hoc
}

