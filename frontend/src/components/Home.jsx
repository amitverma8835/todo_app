import React from 'react'
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";


function Home() {
  return (
  <>
  
  <nav>
        <div className="logo">

                <h1>TO-DO APP</h1>

        </div>

        <div className="nav-links">     

                <Link to={'/about'} className='link'>About</Link>
                <Link to={'/create'} className='link'>Create</Link>
                <Link to={'/task'} className='link'>Task</Link>
                <Link to={'/'} className='link'>LogOut</Link>
        </div>
  </nav>


  <div className="hero-sec">

        <div className="welcome">
                        <h1>
                        Welcome to Our To-Do App!
                        </h1>

                        <h3>Organizing your tasks has never been easier! Our To-Do App is designed to help you stay productive, manage your time effectively, and never miss a deadline. Whether you're planning your day, managing a project, or just keeping track of daily errands, this app has got you covered.</h3>
        </div>

        <div className="success-box">

                <div className="icon">
                <FaCheckCircle className='s-icon' />
                </div>
               <h1>Your task has successfully save</h1>
               <div className="ok-btn">
                <button>OK</button>
               </div>
        </div>

  </div>

  </>
  )
  
}

export default Home
