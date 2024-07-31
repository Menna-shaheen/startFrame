import './App.css'
import About from './Components/About/About'
import {  RouterProvider,createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Notfound from './Components/Notfound/Notfound'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'

let x = createHashRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio/> },
      { path : 'home', element: <Home /> },
      { path: 'contact', element: <Contact/> },
      { path: '*', element: <Notfound /> },
    ]
  }
]) 
function App() {
  return <RouterProvider router={x}/>
}

export default App
