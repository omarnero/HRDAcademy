import React from 'react'
import classes from "./Topbar.module.css";
import { useNavigate } from 'react-router-dom';
function Topbar() {
  const navigate = useNavigate();
  return (
    <div className={classes.Topbar}>


        <button onClick={()=> navigate("/login")}> Login</button>
  
    </div>
  )
}

export default Topbar