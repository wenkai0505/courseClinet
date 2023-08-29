import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CourseService from '../service/course-service'
import CourseItem from '../components/CourseItem'

const CourseScreen = ({ currentUser, APIURL }) => {


    let [courseData, setCourseDate] = useState([])

    const navigate = useNavigate()
    const handleGoLogin = () => {
        navigate('/login')
    }

    useEffect(() => {

        CourseService.getCourse()
            .then((res) => {
                setCourseDate(res.data.course)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <div className="container-fluid topImg courseTopImg px-0">
                <h3 > 所有課程</h3>
            </div>
            <div className="container my-5">

                {
                    !currentUser &&
                    <div className="card text-center">
                        <div className="card-header">
                            請先登入
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">歡迎來到COURSE學習網站</h5>
                            <p className="card-text">您尚未登入，請前往登入頁面進行登入，方可順利瀏覽所有課程，與學習</p>
                            <button className="btn btn-primary" onClick={handleGoLogin}>前往登入</button>
                        </div>
                    </div>
                }

                {
                    currentUser &&
                    <div className="row">
                        {
                            courseData && courseData.map((item) => {
                                return <CourseItem item={item} APIURL={APIURL} key={item._id} currentUser={currentUser} />
                            })
                        }
                    </div>
                }

            </div >
        </>
    )
}

export default CourseScreen