import React from 'react'
import './App.css'
import SignIn from './components/SignIn'
import Login  from "./components/Login";
import Home from './components/Home'
import Create from './components/Create'
import Task from './components/Task'
import About from './components/About'
import Page from "./components/PageNotFound";
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/create' element={<Create />}/>
      <Route path='/task' element={<Task/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Page/>}/>

    </Routes>
    </>
  )
}

export default App
