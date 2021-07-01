import React from 'react'
import {Link} from 'react-router-dom'
function Register() {
    return (
        <form class="box" >
        <h1>Register</h1>
        <input type="text" name="" placeholder="username"/>
        <input type="email" name="" placeholder="Type Your Gmail Address"/>
        <input type="password" name="" placeholder="password"/>
        <input type="submit" name="" value="Register Now"/>
        <p>If you have account <Link to="/login">Login Now</Link></p>
    </form>
    )
}

export default Register
