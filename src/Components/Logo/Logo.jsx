import React from 'react'
import classes from "./Logo.module.css";
import LogoImg from "../../images/hrda_logo.jpg";
import World from "../../images/map.jpg";
import FaceBook from "../../images/facebook.jpg";
import LinkedIn from "../../images/linked_in.jpg";
import Twitter from "../../images/twitter.jpg";
import En from "../../images/en.jpg";
import Ar from "../../images/ar.jpg";

function Logo() {


  return (
    <div className={classes.logo}>
        <div className={classes.LogoImg}>
            <img src={LogoImg} alt='logo'/>
        </div>    
        <div className={classes.world}>
            <div className={classes.worlds}>
                <div className={classes.social}>
                    <img src={FaceBook} alt="facebook" />
                    <img src={Twitter} alt="twitter" />
                    <img src={LinkedIn} alt="linkedin" />
                </div>
                <div className={classes.conteries}>
                    <img src={En} alt='En'/>
                    <img src={Ar} alt='Ar' />
                </div>
                <div>
                    <img src={World} alt="world" />
                </div>
            </div>
            <div className={classes.search}>
                <form>
                    <input placeholder='search ...'/>
                    <button >Search</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Logo