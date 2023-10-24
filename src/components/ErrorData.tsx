import React from 'react'
import { useRouteError } from 'react-router-dom'


const ErrorData = () => {
    const error:any=useRouteError()
  return (
    <div>{error.message}</div>
  )
}

export default ErrorData