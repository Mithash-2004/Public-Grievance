import React,{useRef} from 'react';
// import logo1 from './logo.jpg';
import {Link} from 'react-router-dom';
// import {Login} from './Login';
import "./App.css";


const Register=()=> {

  const uname = useRef(null);
  const phone=useRef(null);
  const email=useRef(null);
  const location=useRef(null);
  const spwrd= useRef(null);
  const cpwrd=useRef(null);

  function handleClick()
{ 
  console.log(uname.current.value);
  console.log(phone.current.value);
  console.log(email.current.value);
  console.log(location.current.value);
  console.log(spwrd.current.value);
  console.log(cpwrd.current.value);
}

  return (
    <div className='Register'>
      <div style={{paddingLeft:"800px",backgroundColor:"#00008B",padding:"15px"}}>
          {/* <a href="/Login">Login</a> */}
          <div style={{marginRight:"1000px",marginLeft:"100px"}}>
          <Link style={{color:"white",paddingRight:"20px",fontSize:"25px",textDecoration:'none'}} to="/" >Home</Link>
          <Link style={{color:"white",paddingRight:"20px",fontSize:"25px",textDecoration:'none'}} to="/about">About</Link>
          <Link style={{color:"white",fontSize:"25px",textDecoration:'none'}} to="/products">Products</Link>
          <Link to="/register" style={{fontSize:"25px",textDecoration:'none',marginLeft:"1300px",fontFamily:"Lucida Console",padding:"10px",border:"5px",borderRadius:"3px",backgroundColor:"yellow"}}>Register</Link>
          </div>
          </div>
      <div style={{paddingBottom:"10px",marginTop:"30px",textAlign:"center",backgroundColor:"#89CFF0",marginLeft:"500px",marginRight:"500px"}}>
        <h1 style={{color:"white"}}>Register</h1>
          <input className='myinput' ref={uname} type="text" name="username" placeholder='Name'/><br/><br/>
          <input className='myinput' ref={phone} type="number" placeholder='Phone Number'/><br/><br/>
          <input className='myinput' ref={email} type="email" placeholder='Email'/><br/><br/>
          <input className='myinput' ref={location} type="text" placeholder='Location'/><br/><br/>
          <input className='myinput' ref={spwrd} type="password" placeholder='Set Password'/><br/><br/>
          <input className='myinput' ref={cpwrd} type="password" placeholder='Confirm Password'/><br/><br/>
          <button className='btn' onClick={handleClick}>Register Now</button>
      <h6 style={{textAlign:"center",fontSize:"20px"}}>Already have an account? <a style={{color:"red"}} href="/">Sign in</a></h6>

      </div>
    </div>
  )
}

export default Register;
