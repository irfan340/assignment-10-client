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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path:"addSpot",
    element:<AddSpot></AddSpot>
  },
  {
    path:"updateSpot",
    element:<UpdateSpot></UpdateSpot>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
