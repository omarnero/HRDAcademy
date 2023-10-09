import React from 'react'
import classes from "./Footer.module.css";
function Footer() {
  return (
    <footer className={classes.footer}>
        <div className={classes.footerlayout }>
            <p>Copyright © 2023 - HRD Academy. All rights reserved
            </p>
    <p>Developed by: Athdhar.</p>
        </div>
    </footer>
  )
}

export default Footer