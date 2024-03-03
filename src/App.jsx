import { useState } from 'react'
import {Route,Link} from "react-router-dom";
import {Layout,Typography,Space} from 'antd';
//import {Navbar} from "./components";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <div className='navbar'>
<Navbar/>
        </div>
        <div className='main'>
         
</div>
<div className='footer'>

</div>
      </div>
    </>
  )
}

export default App
