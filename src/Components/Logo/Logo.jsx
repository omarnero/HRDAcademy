import React from 'react'
import classes from "./Logo.module.css";
import LogoImg from "../../images/hrda_logo.jpg";
import World from "../../images/map.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import En from "../../images/en.png";
import Ar from "../../images/ar.png";

function Logo() {


  return (
    <div className={classes.logo}>
        <div className={classes.LogoImg}>
            <img src={LogoImg} alt='logo'/>
        </div>    
        <div className={classes.world}>
            <div className={classes.worlds}>
                <div className={classes.social}>
                    <FacebookIcon sx={{color: "	#0866FF" , fontSize:"30px"}} />
                    <TwitterIcon sx={{color: "	#1D9BF0" , fontSize:"30px"}}  />
                    <LinkedInIcon sx={{color: "#0A66C2" , fontSize:"30px"}}/>
                
                </div>
                <div className={classes.conteries}>
                    <img src={En} alt='En'/>
                    <img src={Ar} alt='Ar' />
                </div>
                <div>
                    <img className={classes.worlImg} src={World} alt="world" />
                </div>
            </div>
            <div className={classes.search}>
                <form>
                    <input placeholder='Search ...'/>
                    <button > <SearchIcon sx={{color: "#fff"}} /> </button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Logo