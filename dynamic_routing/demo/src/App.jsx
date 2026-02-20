import { useState } from 'react'
import './App.css'
import Home from './Home'
import DynamicContent from './DynamicContent'
import{Route,Routes} from 'react-router-dom'

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/details/:id" element={<DynamicContent/>}></Route>
      </Routes>

    </>
  )
}

export default App
