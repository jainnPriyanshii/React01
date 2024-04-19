import React,{useContext,useState} from 'react'
import Usercontext from '../Context/Usercontext'

function Login() {
     const [Username,SetUsename] = useState('')
     const [Password,SetPassword] = useState('')
     const {SetUser}= useContext(Usercontext)

       const handlesubmit = (e) => {
               e.preventDefault()
               SetUser({Username , Password})
}

  return (
    <div>
      <h2>Login</h2>  
      <input type='text'
      value = {Username}
      onChange={(e) => SetUsename(e.target.value)}
      placeholder='Username'/>
      { "  "}
      <input type='text'
      value = {Password}
      onChange={(e) => SetPassword(e.target.value)}

      placeholder='Password'/>
      <button onClick = {handlesubmit}>Submit</button>
        </div>
  )
}

export default Login