import React from 'react'
import classes from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={classes.navbar}>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Trainers</li>
            <li>Resources</li>
            <li>About HRDA</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar