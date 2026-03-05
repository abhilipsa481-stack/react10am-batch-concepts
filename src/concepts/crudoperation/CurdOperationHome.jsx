import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { routes } from './routes/routes'

 const CrudOperationHome = () => {
  return (
   <RouterProvider router={routes}/>
  )
}

export default CrudOperationHome