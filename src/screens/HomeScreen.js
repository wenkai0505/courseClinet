import React, { useEffect, useState } from 'react'
import UserService from '../service/user-service'
import CourseService from '../service/course-service'
import { useNavigate } from 'react-router-dom'


const HomeScreen = ({ APIURL }) => {

    let [instructor, setInstructor] = useState([])
    let [course, setCourse] = useState([])

    const navigate = useNavigate()
    const handleGocourse = () => {
        navigate('/course')
    }

    useEffect(() => {
        UserService.getFilterInstructor()
            .then((res) => {
                setInstructor(res.data.user)
            })
            .catch((err) => {
                console.log(err)
            })

        CourseService.getFilterCourse()
            .then((res) => {
                setCourse(res.data.course)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active banner1"> </div>
                    <div className="carousel-item banner2"></div>
                    <div className="carousel-item banner3"></div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div className='slogan'>
                    <h1 className='text-warning mb-3'>為自己學習最迷人</h1>
                    <p className='text-white'>線上學習的型態不只一種<br />
                        在線上學習平台找到適合你自學的方式，迎接新改變！</p>
                </div>
            </div >
            <div className='container my-5'>
                <h3><i className="fa-solid fa-fire me-2"></i>熱門講師</h3>
                <div className="row mt-3 mb-5">
                    {
                        instructor && instructor.map((item) => {
                            return (
                                <div className="col col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3" key={item._id}>
                                    <div className="card" style={{ height: '400px' }}>
                                        <img src={APIURL + item.userPic} className="card-img-top " alt="..." style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                                        <div className="card-body " style={{ position: "absolute", bottom: '0' }}>
                                            <h5 className="card-title text-white">{item.username}</h5>
                                            <p className="card-text text-white">{item.email}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h3><i className="fa-solid fa-fire me-2"></i>精選課程</h3>
                <div className="row mt-3 mb-5">
                    {
                        course && course.map((item) => {
                            return (
                                <div className="col col-sm-12 col-md-6 col-lg-4 col-xl-3 my-3" key={item._id} >
                                    <div className="card">
                                        <div style={{ height: "200px", overflow: 'hidden' }}>
                                            <img src={APIURL + item.pic} className="card-img-top courseImg" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text text-secondary">{item.student.length}人學習</p>
                                            <h4 className='card-text'>NT$: {item.price}</h4>
                                            <div className="d-grid gap-2">
                                                <button type='button' onClick={handleGocourse} className="btn btn-primary ">前往學習</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default HomeScreen