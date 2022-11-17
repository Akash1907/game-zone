import React from 'react'
import './styles.css'
function Navbar() {
  return (
    <div className='container'>
        <div className='logo'>
            <img className='logo2' src = 'try.png' alt='NO img found'/>
        </div>
        <div className='app-name'>
            <h1 className='game'>GAME</h1>
            <h2 className='zone'>ZONE</h2>
        </div>
        <div className='cartoon'>
            <img className='cartoon2' src='https://www.cbc.ca/kids/content/static_images/doodles-top-right.png' alt = "no img found" />
        </div>
    </div>
  )
}

export default Navbar