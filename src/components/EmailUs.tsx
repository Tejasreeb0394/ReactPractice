import React from 'react'
 type Props={
     
    setEmailId:(emaild:string)=>void
 }
 const EmailUs = (prop:Props) => {
   const {setEmailId} =prop
  return (
    <div onClick={()=>setEmailId("1")}>emailUs</div>
  )
}
export default EmailUs