import React from 'react'
import UserContext from '../context/userContext';
import { useContext,useState } from 'react';

function Login() {
    const [Username , setUsername] = useState('');
    const [Password , setPassword] = useState('');


    const {setUser}= useContext (UserContext);   ///set user gets the function from context which is in context folder in user.jsx 

    const handleSubmit =(e) =>{
        e.preventDefault()
        setUser({Username,Password});
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={Username}
        onChange={(e) => setUsername (e.target.value)}
         placeholder='Username' />
        <input type="password"
        value={Password}
        onChange={(e) => setPassword (e.target.value)}
         placeholder='Password' />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login