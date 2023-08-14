import React, { useEffect, useState } from 'react'
import CourseService from '../service/course-service'
import AuthService from '../service/auth-service'
import rightImg from '../images/gooterbg.png'

const Home = ({ API_URL }) => {

    let [filterCourse, setFilterCourse] = useState('')
    let [filterInstructor, setFilterInstructor] = useState('')

    useEffect(() => {
        CourseService.getFilterCourse()
            .then((res) => {
                setFilterCourse(res.data.course)
            })
            .catch((err) => {
                console.log(err)
            })
        AuthService.getfilterInstructor()
            .then((res) => {
                setFilterInstructor(res.data.user)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className="home">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active banner1"></div>
                        <div className="carousel-item banner2"></div>
                        <div className="carousel-item banner3"></div>
                    </div>
                    <div className="solgen">
                        為自己學習最迷人
                        <span>線上學習的型態不只一種<br />
                            在線上學習平台找到適合你自學的方式，迎接新改變！</span>
                    </div>
                </div>



                <div className="main ">
                    <div className="box">
                        <div className="title">熱門講師</div>
                        <div className="innsBox">

                            {
                                filterInstructor && filterInstructor.map((item, idx) => {
                                    return (
                                        <div className="ins" key={idx}>
                                            <img src={API_URL + item.userPic} alt="" />
                                            <div className="insinfo">{item.username}</div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>



                    <div className='box'>
                        <div className="title">精選課程</div>
                        <div className="cardBox">
                            {
                                filterCourse && filterCourse.map((item, idx) => {
                                    return (
                                        <div className="card" key={idx}>
                                            <div className='pic'>
                                                <img src={API_URL + item.pic} alt=''></img>
                                            </div>
                                            <div className="ctitle">{item.title}</div>
                                            <div className="instructor">{item.instructor.username}</div>
                                            <div className="student">{item.student.length}人學習</div>
                                            <div className="price">NT&:{item.price}</div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>
                <div className="box2">
                    <div className="box2Wrap">
                        <div className="text">
                            <div className="textone">豐富的教學形式，讓學習融合生活</div>
                            <div className="line"></div>
                            <div className="text2">
                                線上教學內容以最佳形式呈現，課程平台不受限影音、圖文，無論你是哪種類型的學習者，多樣化的內容形式，滿足你所有的學習場景。
                            </div>
                        </div>
                        <div className="rightImg">
                            <img src={rightImg} alt="" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home