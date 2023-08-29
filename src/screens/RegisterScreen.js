import React, { useState } from 'react'
import UserService from '../service/user-service'
import { useNavigate } from 'react-router-dom'

const RegisterScreen = () => {

    let [errMessage, setErrMessage] = useState('')
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        const form = document.querySelector("form");
        const formData = new FormData(form);

        UserService.register(formData)
            .then((res) => {
                if (res.data.msg === "success") {
                    window.alert('註冊成功')
                    navigate('/login')
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

            <div className="container-fluid topImg registerImg px-0">
                <h3 > 會員註冊</h3>
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
                                <label className="form-label">會員名稱：</label>
                                <input type="text" className="form-control form-control-lg" name='username' placeholder="username" />

                            </div>
                            <div className="mb-3">
                                <label className="form-label">會員信箱：</label>
                                <input type="email" className="form-control form-control-lg" name='email' placeholder="email" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">會員密碼：</label>
                                <input type="password" className="form-control form-control-lg" name='password' placeholder="password" />
                            </div>

                            <label className="form-label">用戶身份：</label>
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name='role'>
                                <option value="1">請選擇您的身份</option>
                                <option value="instructor">instructor</option>
                                <option value="student">student</option>
                            </select>


                            <div className="mb-3">
                                <label className="form-label">個人圖片：</label>
                                <input className="form-control form-control-lg" name="userpic" type="file" />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit btn-lg" onClick={handleRegister} className="btn btn-primary">會員註冊</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RegisterScreen