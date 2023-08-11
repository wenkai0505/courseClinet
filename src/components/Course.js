import React, { useEffect, useState } from 'react'
import CourseService from '../service/course-service'
import { useNavigate } from 'react-router-dom'

const Course = ({ currentUser, setCurrentUser, API_URL }) => {

    let [courseData, setCourseData] = useState("")

    const navigate = useNavigate()
    const handleGoLogin = () => {
        navigate('/login')
    }

    const handleAddCourse = (e) => {
        CourseService.addCourse(e.target.id)
        window.alert("課程這側成功")
        navigate('/profile')
    }

    useEffect(() => {
        CourseService.getCourse()
            .then((res) => {
                setCourseData(res.data.course)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <div className="topImg courseImg"></div>
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
                                <div className="title" > 所有課程</div>
                                <div className="cardBox">
                                    {
                                        courseData && courseData.map((item, idx) => {
                                            return (
                                                <div className="card" key={idx}>
                                                    <div className='pic'>
                                                        <img src={API_URL + item.pic} alt='' ></img>
                                                    </div>
                                                    <div className="ctitle">{item.title}</div>
                                                    <div className="instructor">{item.instructor.username}</div>
                                                    <div className="student">{item.student.length}人學習</div>
                                                    <div className="price">NT&:{item.price}</div>
                                                    <button onClick={handleAddCourse} className="btn btn-success" id={item._id}>註冊課程</button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        )
                    }

                </div >
            </div >
        </>
    )
}

export default Course