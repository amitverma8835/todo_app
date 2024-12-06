import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const result = await axios.post('http://localhost:4000/api/signin', {
        name,
        email,
        contact,
        password,
      });
      console.log(result.data);
      alert('SignUp Successfully');
      navigate('/');

    } catch (error) {
      console.error('Error submitting the form:', error.toJSON());
      setError(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="container">
      <h1>TODO APP</h1>
      <form onSubmit={handleSubmit} className="inp-grp">

        <input type="text" id='name' value={name} placeholder="Enter Your Name" required onChange={(e) => setName(e.target.value)} />

        <input type="email" value={email} id='email' placeholder="Enter Your Email" required onChange={(e) => setEmail(e.target.value)} />

        <input type="text" value={contact} id='contact' placeholder="Enter Your Contact Number" required onChange={(e) => setContact(e.target.value)} />

        <input type="password" value={password} id='password' placeholder="Enter Your Password" required onChange={(e) => setPassword(e.target.value)} />
        {error && <p style={{color:'red'}}>{error}</p>}
        
        <div className="btn-grp">
          <button type='submit'>LogIn</button>
          <button onClick={()=>navigate('/')}>SignIn</button>
        </div>
        
      </form>
      
    </div>
  );
}

export default SignIn;
