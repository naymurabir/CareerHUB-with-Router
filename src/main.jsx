import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Jobs from './components/Jobs/Jobs';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobsDetails from './components/JobsDetails/JobsDetails';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied',
        loader: () => fetch('jobs.json'),
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/job/:id',
        loader: () => fetch('jobs.json'),
        element: <JobsDetails></JobsDetails>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

      <RouterProvider router={router}></RouterProvider>

    </HelmetProvider>
  </React.StrictMode>,
)
