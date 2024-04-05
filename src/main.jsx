import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  
  RouterProvider,
} from "react-router-dom"
import { router } from './Router/Router'

import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import AuthProvider from './Components/AuthProvider/AuthProvider'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className=''>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <RouterProvider router={router} />
    </QueryClientProvider>
   </AuthProvider>
 
   </div>
  </React.StrictMode>,
)
