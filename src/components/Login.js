import React, { useState } from 'react'
import AuthService from '../service/auth-service'
import { useNavigate } from 'react-router-dom'


const Login = ({ currentUser, setCurrentUser }) => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [errMessage, setErrMessage] = useState(null)

    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {

        AuthService.Login(email, password)
            .then((res) => {
                if (res.data.msg == "success") {
                    window.alert("登入成功")
                    localStorage.setItem("user", JSON.stringify(res.data))
                    setCurrentUser(AuthService.getCurrentUser())
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
            <div className="topImg loginImg"></div>
            <div className="main">
                <div className="box">
                    <div className="title">會員登入</div>
                    {
                        errMessage &&
                        (
                            <div className="alert alert-success" role="alert">
                                {errMessage}
                            </div>
                        )
                    }

                    <div className="mb-3">
                        <label className="form-label">用戶信箱：</label>
                        <input onChange={handleEmail} type="email" className="form-control form-control-lg" name="email" placeholder="email" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">用戶密碼：</label>
                        <input onChange={handlePassword} type="password" className="form-control form-control-lg" name="password" placeholder="password" />
                    </div>

                    <button onClick={handleLogin} type="button" className="btn btn-success btn-lg">會員登入</button>


                </div>
            </div>
        </>
    )
}

export default Login