import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/blogs' element={<Blogs></Blogs>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
