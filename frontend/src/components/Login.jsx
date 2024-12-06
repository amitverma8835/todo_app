import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {

  const navigate = useNavigate()
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [error, setError] = useState("");
  
  

  const signIn = ()=>{
    navigate('/signin')
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:4000/api/login", { email: loginEmail, password: loginPassword });
      console.log("Login successful", result.data);
      alert('Login Successfully')
      navigate("/home");
    } 
    catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "An error occurred during login");
    }

  }

  return (
    <>

<div className="container2">
    <h1>TODO APP</h1>
      <form onSubmit={handleSubmit} className='inp-grp'>

        <input type="email" name="email" id="email" value={loginEmail} placeholder='Enter Your Email' required onChange={(e)=>setLoginEmail(e.target.value)}/>

        <input type="password" name="pswrd" id="pswrd" value={loginPassword} placeholder='Enter Your Password' required onChange={(e)=>setLoginPassword(e.target.value)}/>
        {error && <p style={{color:'red'}}>{error}</p>}
        
        <div className="btn-grp">
        <button type='submit' >LogIn</button>
        <button onClick={()=>signIn()}>Create Ac</button>
      </div>
      </form>

      
   </div>

    </>
  )
}

export default Login
