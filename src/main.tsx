import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// pages
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import AddProjects from './pages/Dashboard/AddProjects.tsx'

// create browser router and render the app
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <AddProjects />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
