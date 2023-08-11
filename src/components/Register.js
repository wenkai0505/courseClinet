import React, { useState } from 'react'
import AuthService from '../service/auth-service'
import { useNavigate } from 'react-router-dom'

const Register = () => {


    let [errMessage, setErrMessage] = useState(null)

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        const form = document.querySelector("form");
        const formData = new FormData(form);

        AuthService.Register(formData)
            .then((res) => {
                if (res.data.msg == "success") {
                    window.alert("註冊成功，請前往登入")
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
            <div className="topImg registerImg"></div>
            <div className="main">
                <div className="box">
                    <div className="title">會員註冊</div>

                    {
                        errMessage &&
                        (
                            <div className="alert alert-success" role="alert">
                                {errMessage}
                            </div>
                        )
                    }

                    <form >
                        <div className="mb-3">
                            <label className="form-label">用戶名稱：</label>
                            <input type="text" className="form-control form-control-lg" name="username" placeholder="username" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">用戶信箱：</label>
                            <input type="email" className="form-control form-control-lg" name="email" placeholder="email" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">用戶密碼：</label>
                            <input type="password" className="form-control form-control-lg" name="password" placeholder="password" />
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

                        <button onClick={handleRegister} type="submit" className="btn btn-success btn-lg">確定註冊</button>
                    </form>
                </div>
            </div >
        </>
    )

}


export default Register