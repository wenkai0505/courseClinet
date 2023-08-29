import React, { useState } from 'react'
import CourseService from '../service/course-service'
import { useNavigate } from 'react-router-dom'

const PostCourseScreen = () => {

    let [errMessage, setErrMessage] = useState("")

    const navigate = useNavigate()
    const handlePostCourse = (e) => {
        e.preventDefault()

        const form = document.querySelector("form");
        const formData = new FormData(form);

        CourseService.postCourse(formData)
            .then((res) => {
                if (res.data.msg === 'success') {
                    console.log(res.data)
                    window.alert('新增課程成功')
                    navigate('/profile')
                }
                else {
                    setErrMessage(res.data.error)
                }

            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <>
            <div className="container-fluid topImg postImg px-0">
                <h3 > 新增課程</h3>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col col-md-12 col-lg-6 mx-auto">
                        {
                            errMessage &&
                            <div className="alert alert-danger" role="alert">
                                {errMessage}
                            </div>
                        }

                        <form>
                            <div className="mb-3">
                                <label className="form-label">課程名稱：</label>
                                <input type="text" className="form-control form-control-lg" name='title' placeholder="title" />

                            </div>
                            <div className="mb-3">
                                <label className="form-label">課程介紹：</label>
                                <input type="text" className="form-control form-control-lg" name='description' placeholder="description" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">課程售價：</label>
                                <input type="text" className="form-control form-control-lg" name='price' placeholder="price" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">課程圖片：</label>
                                <input className="form-control form-control-lg" name="pic" type="file" />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit btn-lg" onClick={handlePostCourse} className="btn btn-primary">新增課程</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PostCourseScreen