import React, { useState } from 'react'
import UserService from '../service/user-service'
import { useNavigate } from 'react-router-dom'

const LoginScreen = ({ setCurrentUser }) => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [errMessage, setErrMessage] = useState('')

    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        UserService.login(email, password)
            .then((res) => {
                if (res.data.msg === "success") {
                    localStorage.setItem('user', JSON.stringify(res.data))
                    setCurrentUser(UserService.getCurrentUser())
                    window.alert('登入入成功')
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
            <div className="container-fluid topImg loginImg px-0">
                <h3 > 會員登入</h3>
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
                        <div className="mb-3">
                            <label className="form-label">會員信箱：</label>
                            <input onChange={handleEmail} type="email" className="form-control form-control-lg" name='email' placeholder="email" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">會員密碼：</label>
                            <input onChange={handlePassword} type="password" className="form-control form-control-lg" name='password' placeholder="password" />
                        </div>

                        <div className="d-grid gap-2">
                            <button type="submit btn-lg" onClick={handleLogin} className="btn btn-primary">會員登入</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginScreen