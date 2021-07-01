import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
    return (
        <form class="box" >
            <h1>Login</h1>
            <input type="text" name="" placeholder="username"/>
            <input type="password" name="" placeholder="password"/>
            <input type="submit" name="" value="Log In"/>
            <p>If you don't have account <Link to="/register">Register Now</Link></p>
        </form>
    )
}

export default Login
