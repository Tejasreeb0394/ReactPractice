import React from 'react'

export type userData={
    userId:number
    id:number
    title:string
    completed:boolean
}
const Card = (prop:userData)=> {
    const {id,title}=prop
  return (
    <>
       
       <div  className='gridData'>
       <div>{id}</div>
       <div>{title}</div>
       
       </div>
    </>
  )
}

export default Card