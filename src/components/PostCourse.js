import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CourseService from '../service/course-service'

const PostCourse = ({ currentUser, setCurrentUser }) => {

    let [errMessage, setErrMessage] = useState(null)

    const navigate = useNavigate()
    const handleGoLogin = () => {
        navigate('/login')
    }

    const handlePost = (e) => {
        e.preventDefault()

        const form = document.querySelector("form");
        const formData = new FormData(form);

        CourseService.postCourse(formData)
            .then((res) => {
                if (res.data.msg == "success") {
                    window.alert("新增課程成功")
                    navigate('/profile')
                }
                else {
                    setErrMessage(res.data.error)
                }
            })
            .catch((err) => {
                setErrMessage(err.error)
            })
    }


    return (
        <>
            <div className="topImg postImg"></div>
            <div className="main">
                <div className="box">
                    <div className="title">新增課程</div>

                    {
                        errMessage &&
                        (
                            <div className="alert alert-success" role="alert">
                                {errMessage}
                            </div>
                        )
                    }


                    {
                        !currentUser && (
                            <div className="notLogin">
                                <h2 >您尚未登入系統，請先登入.</h2>
                                <button onClick={handleGoLogin} type="button" className="btn btn-success btn-lg goLogin">前往登入</button>
                            </div>
                        )
                    }
                    {
                        currentUser && currentUser.user.role != "instructor" && (
                            <div className="notLogin">
                                <h2 >只有講師可以新增課程.</h2>
                            </div>
                        )
                    }

                    {
                        currentUser && currentUser.user.role == "instructor" && (
                            <form action="">
                                <div className="mb-3">
                                    <label className="form-label">課程標題：</label>
                                    <input type="text" className="form-control form-control-lg" name="title" placeholder="title" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">課程介紹：</label>
                                    <textarea className="form-control" rows="3" name="description" placeholder="description"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">課程價格：</label>
                                    <input type="text" className="form-control form-control-lg" name="price" placeholder="price" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">課程圖片：</label>
                                    <input className="form-control form-control-lg" name="pic" type="file" />
                                </div>

                                <button onClick={handlePost} type="submit" className="btn btn-success btn-lg">確定新增</button>

                            </form>
                        )
                    }



                </div>
            </div>
        </>
    )
}

export default PostCourse