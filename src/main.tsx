import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom' // Import the RouterProvider component from the 'react-router-dom' module
import './assets/css/index.scss' // global pour l'administration et le front, mettre dans app et admin si besoin
import { Router } from './router' // Import the router object from the 'router' module


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
