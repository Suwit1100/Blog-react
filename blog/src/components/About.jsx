import React from 'react'
import Aboutimg from '../images/about.svg'

function About() {
    return (
        <div className='container'>
            <h2 className='title'>About</h2>
            <img src={Aboutimg} alt="about" className='imgtitle' />
        </div>
    )
}

export default About