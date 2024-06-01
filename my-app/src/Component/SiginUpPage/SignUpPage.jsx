import React, { useState } from 'react'
import './signuppage.css'


export default function SignUpPage( {setPagetab}){
    const[ username,setUsername]=useState("");
    const[password,setPassword]=useState("");
// submit function
    function handleClick(){
            if (username==="admin" && password==="admin")
            {
                 setPagetab("todo")
            }
    }
  return (
    <div className='signup-container'>
       <h1>Sign Up</h1>
       <div className='input-group'>
         <input type='text'
          placeholder='username'
          onChange={(e)=>{
            setUsername(e.target.value)
            }}/>

          <input type='text' 
          placeholder='password'
          onChange={(e)=>{
            setPassword(e.target.value)
            }}
          />
          <input type='text' 
          placeholder='confirm Password'
          />
          </div>
          <button 
          onClick={handleClick}
          className='button'>Submit</button>
          <button 
          onClick={()=>{
                setPagetab('signin')
          }}
          className='button'>Sign in</button>
    </div>
  )
}
 
  