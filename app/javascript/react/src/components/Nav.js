import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <div>
    <ul className="topnav">
      <li><Link to='/'>HOME</Link></li>
      <li><Link to='/projects'>PROJECTS</Link></li>
      <li><Link to='/contact'>CONTACT</Link></li>
    </ul>
  </div>
)

export default Nav
