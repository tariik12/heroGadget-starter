import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import About from './components/About';

  const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>
    },
    {
        path:'/about',
        element: <About/>
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
