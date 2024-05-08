import React from 'react'
import Homeimg from '../images/home.svg'

function Home() {
    return (
        <div className='container'>
            <h2 className='title'>Home</h2>
            <img src={Homeimg} alt="home" className='imgtitle'/>
        </div>
    )
}

export default Home