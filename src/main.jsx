import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'
import DetailsPage from './components/DetailsPage.jsx'
import Home from './components/Home.jsx'




const routes = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'/:name',
          element:<DetailsPage/>
        }
      ]
    }
  ]
)

const root = createRoot(document.getElementById('root'))
root.render(<RouterProvider router={routes}/>)

// createRoot(document.getElementById('root')).render(
//   <>
//     <App />
//   </>
// )
