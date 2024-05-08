import React from 'react'
import NotFoundimg from '../images/notfound.svg'

function NotFound() {
    return (
        <div className='container'>
            <h2 className='title'>ไม่พบข้อมูล (404 Not Found Page)</h2>
            <img src={NotFoundimg} alt="notfound" className='imgtitle'/>
        </div> 
    )
}
export default NotFound