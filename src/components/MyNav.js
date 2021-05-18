import React from  'react'
import {Link} from "react-router-dom"

export default function MyNav() {
  return (
      <nav>
    <div className="nav-wrapper blue-grey">
      <Link to="/" className="brand-logo left">Code House</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">Register</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/create">+</Link></li>
      </ul>
    </div>
  </nav>
  )
}
