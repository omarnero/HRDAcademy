import React from 'react'
import classes from "./Topbar.module.css";
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
function Topbar() {
  const navigate = useNavigate();
  return (
    <div className={classes.Topbar}>

    <div className={classes.login}>
        <LoginIcon sx={{color:"#fff"}}/>
        <button onClick={()=> navigate("/login")}> Login</button>
    </div>
  
    </div>
  )
}

export default Topbar