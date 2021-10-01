import React from 'react'
import './style.css'
function NavBar() {
    return (
    <header style={{display:"flex"}}>
      <h1>MOVIES APP</h1>
      <ul className="navmenu">
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">SERIES</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </header>
    )
}

export default NavBar