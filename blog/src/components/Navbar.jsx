import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"

function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo">
                Blog
            </div>
            <div className="menu-nav">
                <Link to="/">หน้าแรก</Link>
                <Link to="/about">เกี่ยวกับ</Link>
                <Link to="/blogs">Blogs</Link>
            </div>
        </div>
    )
}

export default Navbar