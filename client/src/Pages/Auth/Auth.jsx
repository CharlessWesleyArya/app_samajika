import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="webName">
                <h1>App Samajika</h1>
                <h6>Connect With Loved Once</h6>
            </div>
        </div>
        <LogIn />
    </div>
  )
}
function LogIn(){
  return(
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Log In</h3>
        <div>
          <input type="text" placeholder='Username' className='infoInput' name='username' />
        </div>
        <div>
          <input type="password" placeholder='Password' className='infoInput' name='password' />
        </div>
        <div>
          <span style={{fontSize:'12px'}}>Don't have an account Sign Up</span>
          <button className='button infoButton'>Login</button>
        </div>
      </form>
    </div>
  )
}
function SignUp(){
  return(
    <div className='a-right'>
      <form className='infoForm authForm'>
        <h3>Sign Up</h3>
        <div>
          <input type="text"  placeholder='First Name' className='infoInput' name="First_name"/>
          <input type="text"  placeholder='Last Name' className='infoInput' name="Last_name"/>
        </div>
        <div>
          <input type="text" className='infoInput' name='userName' placeholder='User Name' />
        </div>
        <div>
          <input type="text" className="infoInput" name='password' placeholder='Password'/>
          <input type="text" className="infoInput" name='confirmPassword' placeholder='Confirm Password'/>
        </div>
        <div>
          <span style={{fontSize:'12px'}}>Already have an account. LOGIN!</span>
        </div>
        <button className='button infoButton' type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Auth