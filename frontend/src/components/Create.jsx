import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error,setError] = useState('')
  
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const result = await axios.post('http://localhost:4000/api/create', {
         title,
         description
        });
        console.log(result.data);
        alert('Task Saved Successfully');
        navigate('/home');
  
      } catch (error) {
        setError(error.response?.data?.message || 'Something went wrong');
      }
  };

  return (
    <>
      <div className="container2">
        <h1>CREATE</h1>
        <form onSubmit={handleSubmit} className="inp-grp">
          <input
            type="text"
            name="title"
            id="title"
            style={{ padding: '10px' }}
            value={title}
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            value={description} // Bind to description state
            onChange={(e) => setDescription(e.target.value)} // Update state
          />
        {error && <p style={{color:'red'}}>{error}</p>}

          <div className="btn-grp">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Create;
