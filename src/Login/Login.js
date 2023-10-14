import React, { useState } from "react";
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    
    const submit = () => {
        console.log(username);
        console.log(password);
    }
    return (
        <div className="login-container">
            
            <div className="login-form">
                <h2>WELCOME</h2>
                <label>Username</label>
                <input onChange={(e)=>setUsername(e.target.value)} type="text" name="uid" placeholder="Enter your Username"/>
                <label>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" name="pwd" placeholder="Enter your Password" />
                <button onClick={submit}>LOGIN</button>
            </div>
      </div>
        
        )
}

export default Login