import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Users from './components/Users.jsx'
import Users2 from './components/Users2.jsx'
import UserDetails from './components/UserDetails.jsx'
import Posts from './components/Posts.jsx'
import PostDetails from './components/PostDetails.jsx'


const usersPromiss = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const postPromiss = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path: "/about", Component: About},
      {path: "/contact", Component: Contact},
      {
        path: "/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: "/users2",
        element: <Suspense fallback={<span>Loading data...</span>}>
          <Users2 usersPromiss={usersPromiss}/>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: '/posts',
        element: <Suspense fallback={<span>Loading post...</span>}>
          <Posts postPromiss={postPromiss}></Posts>
        </Suspense>
      },
      {
        path: '/posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      },
      {
        path: "*",
        element: <div className='font-semibold text-4xl flex flex-col space-y-4 items-center justify-center'>
          <h1>Page Not found 404</h1>
          <p>😉😉</p>
        </div>
      }
    ]
  },
  // {
  //   path: "/about",
  //   element: <div>About page</div>
  // },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
)
