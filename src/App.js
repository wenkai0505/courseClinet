import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Course from './components/Course'
import Profile from './components/Profile'
import PostCourse from './components/PostCourse'
import './css/style.css'
import AuthService from './service/auth-service'


const App = () => {


  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser())
  let API_URL = "http://127.0.0.1:8080/"
  console.log(currentUser)

  return (
    <><BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout currentUser={currentUser} setCurrentUser={setCurrentUser} />}>
          <Route path="/" element={<Home API_URL={API_URL} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Login' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="/course" element={<Course currentUser={currentUser} setCurrentUser={setCurrentUser} API_URL={API_URL} />} />
          <Route path='/profile' element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser} API_URL={API_URL} />} />
          <Route path='/postCourse' element={<PostCourse currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App