import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddSpot from './Components/AddSpot.jsx';
import UpdateSpot from './Components/UpdateSpot.jsx';
import SpotDetails from './Components/SpotDetails.jsx';
import Home from './Components/Home.jsx';
import SignUp from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';
import AuthProviders from './AuthProviders/AuthProviders.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/spots'),
      },
      {
        path: '/spot/:id',
        element: <SpotDetails></SpotDetails>,
        loader: () => fetch(`http://localhost:3000/spots`),
      }
    ]
  },
  {
    path: "/addSpot",
    element: <AddSpot></AddSpot>
  },
  {
    path: "/updateSpot/:id",
    element: <UpdateSpot></UpdateSpot>,
    loader: ({ params }) => fetch(`http://localhost:3000/spots/${params.id}`)
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
