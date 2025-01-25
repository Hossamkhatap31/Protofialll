

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './App.css'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';




function App() {

 
  
  




  let router =createBrowserRouter([
    {path:"",element:<Layout /> ,children:[
      {path:"" , element:<Home />},
      {path:"home" , element:<Home />},
      {path:"about" , element:<About />},
      {path:"portfolio" , element:<Portfolio />},
      {path:"contact" , element:<Contact />},
      

    ]}
  ])
 

  return (
    <>

    <RouterProvider  router={router}/>
   

    

    </>
  )
}

export default App
