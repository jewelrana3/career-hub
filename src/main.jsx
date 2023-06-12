import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home/Home.jsx';
import Details from './components/Details/Details.jsx';
import Applied from './components/Applied/Applied.jsx';
// import { getShoppingCart } from './utilies/fakedb.js';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import { getShoppingCart } from './utilies/fakedb.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=> fetch('/data.json')
      },
      {
        path:'details/:id',
        element:<Details></Details>,
        loader:async({params})=> {
         
          const res = await fetch(`/data.json`)
          const data = await res.json()
          console.log(data)
          const singleData = data.find(d => d.id == params.id)
          return singleData;
        }
       
      },
      {
        path:'appliedjob',
        element:<Applied></Applied>,
        loader:getShoppingCart
      },{
        path:'statistics',
        element:<Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
