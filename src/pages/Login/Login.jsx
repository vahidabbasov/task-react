import React from 'react'
import './Login.css'

function Login() {
  return (
   <div className='container'>
    <div className='inputs'>
        <input type="text" placeholder='username'/>
        <input type="text" placeholder='password'/>
    </div>
    <button>LOGIN</button>
   </div>
  )
}

export default Login