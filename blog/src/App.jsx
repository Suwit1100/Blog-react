import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import blogs from './data/blogs.js';
import Detail from './components/Detail.jsx';
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
          <Route path='/blogs' element={<Blogs blogs={blogs}></Blogs>} />
          <Route path='*' element={<NotFound></NotFound>} />
          <Route path='/blog/:id' element={<Detail></Detail>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
