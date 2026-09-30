import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './router/Root.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <div>Page not found </div>,
    children: [
      {index : true, Component: Home},
      {path: "/login", Component: Login}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
