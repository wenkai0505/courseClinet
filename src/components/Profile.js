import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CourseService from '../service/course-service'

const Profile = ({ currentUser, setCurrentUser, API_URL }) => {

    const navigate = useNavigate()
    const handleGoLogin = () => {
        navigate('/login')
    }

    let [courseData, setCourseData] = useState(null)

    const handleDelete = (e) => {
        CourseService.deleteCourse(e.target.id)
            .then((res) => {
                if (res.data.msg == "success") {
                    window.alert("刪除成功")
                    navigate('/profile')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (currentUser.user.role == "instructor") {
            CourseService.getInstructorCourse(currentUser.user._id)
                .then((res) => {
                    setCourseData(res.data.course)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else if (currentUser.user.role == "student") {
            CourseService.getStudentAddCourse(currentUser.user._id)
                .then((res) => {
                    setCourseData(res.data.course)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [courseData])

    return (
        <>
            <div className="topImg profileImg"></div>
            <div className="main">
                <div className="box">
                    {
                        !currentUser && (
                            <div className="notLogin">
                                <h2 >您尚未登入系統，請先登入.</h2>
                                <button onClick={handleGoLogin} type="button" className="btn btn-success btn-lg goLogin">前往登入</button>
                            </div>
                        )
                    }
                    {
                        currentUser && (
                            <>
                                <div className="title" > 個人頁面</div>
                                {
                                    currentUser && (
                                        <div className="info">
                                            <div className="info__text">用戶ID：{currentUser.user._id}</div>
                                            <div className="info__text">用戶名稱：{currentUser.user.username}</div>
                                            <div className="info__text">用戶信箱：{currentUser.user.email}</div>
                                            <div className="info__text">用戶身份：{currentUser.user.role}</div>
                                        </div>
                                    )
                                }

                                <div className='cardBox'>
                                    {
                                        courseData && courseData.map((item, idx) => {
                                            return (
                                                <div className="card" key={idx} >
                                                    <div className='pic'>
                                                        <img src={API_URL + item.pic} alt='' ></img>
                                                    </div>
                                                    <div className="ctitle">{item.title}</div>
                                                    <div className="instructor">{item.instructor.username}</div>
                                                    <div className="student">{item.student.length}人學習</div>
                                                    <div className="price">NT$:{item.price}</div>
                                                    {
                                                        currentUser && currentUser.user.role == "instructor" && (
                                                            <button onClick={handleDelete} className="btn btn-danger" id={item._id}>刪除課程</button>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })
                                    }

                                </div>

                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}


export default Profile