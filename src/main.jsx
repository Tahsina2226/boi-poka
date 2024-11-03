import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root.jsx'
import NavBar from './components/NavBar.jsx'
import Error from './components/Error.jsx'

import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage.jsx'
import DashBoard from './components/DashBoard.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element:<HomePage></HomePage> 
        
      },
      {
        path: "dashboard",
        element: <DashBoard></DashBoard>
      },
    
    
    
    
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);