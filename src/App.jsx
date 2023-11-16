import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Contact from './pages/contact.jsx'
import ToDos from './pages/todos.jsx'
import Home from './pages/home.jsx'

import './App.css'


function App() {


  return (
    <>
    <BrowserRouter>

    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/todos' element={<ToDos />}></Route>
    <Route path='/contact' element={<Contact />}></Route>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
