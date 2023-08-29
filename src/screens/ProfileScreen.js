import React, { useEffect, useState } from 'react'
import CourseService from '../service/course-service'
import CourseItem from '../components/CourseItem'

const ProfileScreen = ({ currentUser, APIURL }) => {

    let [courseDate, setCourseData] = useState([])

    useEffect(() => {
        if (currentUser.user.role === 'instructor') {
            CourseService.getInsturctorCourse(currentUser.user._id)
                .then((res) => {
                    setCourseData(res.data.course)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else if (currentUser.user.role === 'student') {
            CourseService.getStudnetAddCouret(currentUser.user._id)
                .then((res) => {
                    setCourseData(res.data.course)
                })
                .catch((err) => {
                    console.log(err)
                })

        }
    }, [courseDate])

    return (
        <>

            <div className="container-fluid topImg profileImg px-0">
                <h3 > 個人資訊</h3>
            </div>


            <div className="container my-5">
                <div className="card ">
                    <div className="card-body ">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item list-group-item-info"><h3>用戶名稱：<span className='text-warning'>{currentUser.user.username}</span></h3></li>
                            <li className="list-group-item">用戶ID：{currentUser.user._id}</li>
                            <li className="list-group-item">用戶信箱：{currentUser.user.email}</li>
                            <li className="list-group-item">用戶身份：{currentUser.user.role}</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {
                        courseDate && courseDate.map((item) => {
                            return (
                                <CourseItem item={item} APIURL={APIURL} key={item._id} currentUser={currentUser} />
                            )
                        })
                    }

                </div>
            </div>




        </>
    )
}

export default ProfileScreen