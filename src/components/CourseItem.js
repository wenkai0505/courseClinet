import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CourseService from '../service/course-service'

const CourseItem = ({ item, APIURL, currentUser }) => {

    const navigate = useNavigate()
    const location = useLocation()
    const PROFILE = location.pathname === '/profile'

    const handleAddCourse = (e) => {
        CourseService.addCourse(e.target.id)
        window.alert('註冊成功')
        navigate('/profile')
    }
    const handleDeleteCourse = (e) => {
        CourseService.deleteCourse(e.target.id)
        window.alert('刪除成功')
        navigate('/profile')
    }


    return (
        <>
            <div className="col col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3">
                <div className="card" >
                    <div style={{ height: "200px", overflow: 'hidden' }}>
                        <img src={APIURL + item.pic} className="card-img-top courseImg" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text text-secondary mb-0">{item.instructor.username}</p>
                        <p className="card-text text-secondary mb-0">{item.student.length}人學習</p>
                        <h4 className='card-text'>NT$: {item.price}</h4>
                        {
                            PROFILE && currentUser.user.role === "instructor" ?
                                <div className="d-grid gap-2">
                                    <a href="#" className="btn btn-warning ">編輯課程</a>
                                    <button type='button' onClick={handleDeleteCourse} className="btn btn-danger " id={item._id}>刪除課程</button>
                                </div>
                                :
                                PROFILE && currentUser.user.role === "student" ?
                                    <></>
                                    :
                                    <div className="d-grid gap-2">
                                        <a href="#" className="btn btn-success " onClick={handleAddCourse} id={item._id}>註冊課程</a>
                                    </div>
                        }




                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseItem