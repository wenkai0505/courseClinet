import React from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../service/auth-service'

const HeaderNav = ({ currentUser, setCurrentUser }) => {


    const handleLogout = () => {
        AuthService.Logout()
        setCurrentUser(AuthService.getCurrentUser())
    }

    return (
        <>
            <div className="nav">
                <div className="logo">COURSE SYSTEM</div>
                <div className="list">
                    <Link to='/'>首頁</Link>
                    {
                        currentUser &&
                        (
                            <>
                                <Link to='/course'>所有課程</Link>
                                <Link to='/profile'>個人資訊</Link>
                                <Link to='/postCourse'>新增課程</Link>
                                <Link onClick={handleLogout} to='/'>登出</Link>
                            </>
                        )
                    }
                    {
                        !currentUser &&
                        (
                            <>
                                <Link to='/register'>會員註冊</Link>
                                <Link to='/login'>登入</Link>
                            </>
                        )
                    }


                </div>
            </div>
        </>
    )
}

export default HeaderNav