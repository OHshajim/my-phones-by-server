import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './components/Root';
import Home from './components/Home';
import Phone from './components/Phone';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:()=>fetch('http://localhost:5000/phones')
      },
      {
        path:"/phones/:id",
        element:<Phone/>,
        loader: ({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
