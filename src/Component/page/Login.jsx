import React from 'react'
import './css/login.css'

const Login = () => {
  return (
    <div className='loginsignup'>
      <div className='container'>
        <h1>Sign Up</h1>
        <div className='fields'>
          <input type="text" placeholder='Your name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='passwords'/>

        </div>
        <button className='continue'>Continue</button>
        <p className="login">Already Have An Account?</p> 
        <span className='login-here'>Login Here</span>
        <div className='agree'>
          <input type="checkbox" name='' id=''/>
          <p> I agree to the term of use & 
            privacy policy</p>
        </div>
      

      </div>
    </div>
  )
}

export default Login