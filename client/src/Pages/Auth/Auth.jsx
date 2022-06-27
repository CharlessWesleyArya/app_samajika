import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'
import {useDispatch} from 'redux'
import { logIn, signUp } from '../../Actions/AuthAction'
const Auth = () => {
  const [isSignUp,setIsSignUp]=useState(true);
  const dispatch=useDispatch();
  const [data,setData]=useState({firstName:'',lastName:'',userName:'',password:'',confirmPassword:""})

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }

  const [confirmPassword,setConfirmPassword]=useState(true)
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(isSignUp){
      /* if(data.password!==data.confirmPassword){
        setConfirmPassword(false)
      } */
      data.password===data.confirmPassword?dispatch(signUp(data)):setConfirmPassword(false)
    }else{
      dispatch(logIn(data))
    }
  }
  const resetForm=()=>{
    setConfirmPassword(true);
    setData({
      firstName:'',lastName:'',userName:'',password:'',confirmPassword:""
    })
  }

  return (
    <div className="Auth">
      {/* left side */}
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="webName">
                <h1>App Samajika</h1>
                <h6>Connect With Loved Once</h6>
            </div>
        </div>
        {/* Right-side */}
        <div className='a-right'>
      <form className='infoForm authForm' onSubmit={handleSubmit}>
        <h3>{isSignUp? "Sign Up":"Login"}</h3>
        {isSignUp &&
        <div>
          <input type="text"  placeholder='First Name' className='infoInput' name="firstName" onChange={handleChange} value={data.firstName}/>
          <input type="text"  placeholder='Last Name' className='infoInput' name="lastName" onChange={handleChange} value={data.lastName}/>
        </div>}
        <div>
          <input type="text" className='infoInput' name='userName' placeholder='User Name' onChange={handleChange} value={data.userName}/>
        </div>
        <div>
          <input type="password" className="infoInput" name='password' placeholder='Password'onChange={handleChange} value={data.password}/>
          {isSignUp&&<input type="password" className="infoInput" name='confirmPassword' placeholder='Confirm Password' onChange={handleChange} value={data.confirmPassword}/>}
        </div>
        <span style={{display:confirmPassword?"none":"block",color:"red",fontSize:'12px',alignSelf:'flex-end',marginRight:"5px"}}>* Confirm Password is not Same</span>
        <div>
          <span style={{fontSize:'12px',cursor:'pointer'}} onClick={()=>{setIsSignUp((prev)=>!prev);resetForm()}}>{isSignUp?"Already have an account. LOGIN!":"Don't have an account? Sign Up"}</span>
        </div>
        <button className='button infoButton' type='submit'>{isSignUp?"Sign Up":"Login"}</button>
      </form>
    </div>
    </div>
  )
}/* 
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
 */
export default Auth