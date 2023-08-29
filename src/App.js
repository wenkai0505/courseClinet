import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import UserService from './service/user-service'
import ProfileScreen from './screens/ProfileScreen'
import CourseScreen from './screens/CourseScreen'
import PostCourseScreen from './screens/PostCourseScreen'
import UserListScreen from './screens/UserListScreen'
import './css/bootstrap.min.css'
import './css/default.css'






const App = () => {
  let APIURL = "http://localhost:8080/"
  // let APIURL = "https://courseserver-jxx6.onrender.com/"
  let [currentUser, setCurrentUser] = useState(UserService.getCurrentUser)
  console.log(currentUser)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <div className="main" style={{ minHeight: "800px" }}>
          <Routes>
            <Route path='/' element={<HomeScreen APIURL={APIURL} />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/login' element={<LoginScreen setCurrentUser={setCurrentUser} />} />
            <Route path='/profile' element={<ProfileScreen currentUser={currentUser} APIURL={APIURL} />} />
            <Route path='/course' element={<CourseScreen currentUser={currentUser} APIURL={APIURL} />} />
            <Route path='/postCourse' element={<PostCourseScreen />} />
            <Route path='/userList' element={<UserListScreen />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter >
    </>
  )
}

export default App