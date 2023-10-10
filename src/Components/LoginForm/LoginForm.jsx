import React from 'react'
import classes from "./LoginForm.module.css";
import FormImg from "../../images/formImg.jpg";
function LoginForm() {
  return (
    <div className={classes.loginForm}>
      <div className={classes.loginLayout} >
      <div className={classes.form__img}>
          <img src={FormImg} alt="student Pic" />
        </div>
        <form className={classes.login__form}>
            <h2>Login</h2>
            <div className={classes.input}>
                <label>Email</label>
                <input type='text'  placeholder='Email'/>
            </div>
            <div className={classes.input}>
                <label>Password</label>
                <input type='password' placeholder='Password' />
            </div>
            <div className={classes.checkbox}> 
            <input type="checkbox" />
            <label for="vehicle1">  Remember Me</label>
            </div>
            <button>Login</button>
        </form>
      
        </div>
    </div>
  )
}

export default LoginForm