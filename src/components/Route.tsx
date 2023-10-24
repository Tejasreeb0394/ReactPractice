import React,{lazy,Suspense} from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
// import AboutUs from './AboutUs'
// import ContactUs from './ContactUs'
import UserDetailes from './UserDetailes'
import Body from './Body'
import ErrorData from './ErrorData'
const AboutUs=lazy(()=>import('./AboutUs'))
const ContactUs=lazy(()=>import('./ContactUs'))


    const router=createBrowserRouter([
        {
          path:'/',
          element:<App/>,
          children:[
            {
              path:'/',
              element:<Body/>
            },
           {
            path:':id',
            element:<UserDetailes/>,
            errorElement:<ErrorData/>
          }]
        },{
           path:'/about',
           element:<Suspense  fallback={<h1>loading</h1>}><AboutUs/></Suspense>
        },{
            path:'/contact',
            element:<Suspense fallback={<h1>loading</h1>}><ContactUs/></Suspense>
        },
    ])
  
  


export default router


