import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Contact from './pages/contact.jsx'
import ToDos from './pages/todos.jsx'
import Home from './pages/home.jsx'
import Nav from './components/navbar.jsx'

import './App.css'


function App() {


  return (
    <>
    <BrowserRouter>
    <header><Nav /></header>

    <Routes>
    <Route path='/' element={<Home />}>Home</Route>
    <Route path='/todos' element={<ToDos />}>To Do List</Route>
    <Route path='/contact' element={<Contact />}>Contact</Route>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
