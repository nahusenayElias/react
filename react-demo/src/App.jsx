import './App.css';
import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './components/Home.jsx';
import About from "./components/About.jsx";
import Root from "./Root.jsx";
// import Persons from './pages/Persons.jsx';
import ErrorPage from './pages/ErrorPage.jsx';



function App() {

  const router = createBrowserRouter([
    {
      path: '/', 
    element:<Root/>, 
    errorElement:<ErrorPage/>,
    children: [
      {path: '/', element:<Home/>},
      {path: '/about', element:<About/>},
      {path: '/persons', element:<Persons/>},
    ],
  },
  ]);
 
  

  return <RouterProvider router={router} />
  
}

export default App;