import React from 'react'
import classes from "./LoginForm.module.css";
function LoginForm() {
  return (
    <div className={classes.loginForm}>
        <form className={classes.login__form}>
            <h2>Login</h2>
            <div className={classes.input}>
                <label>Email</label>
                <input type='text' />
            </div>
            <div className={classes.input}>
                <label>Passord</label>
                <input type='passord' />
            </div>
            <div className={classes.input}> 
            <input type="checkbox" />
            <label for="vehicle1">  Remember Me</label>
            <button>Login</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm