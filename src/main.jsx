import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Root from './Root'
import Profile from './Profile'
import '@unocss/reset/antfu.css'
import 'uno.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Post from './Post'
import Home from './Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "page1",
        element: <div>page1</div>
      },
      {
        path: "page2",
        element: <div>page2</div>
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "posts/:postId",
        element: <Post />
      },
    ]
  },
  {
    path: "/login",
    element: <div>Login page</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
