import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import UserService from '../service/user-service'


const HeaderComponent = ({ currentUser, setCurrentUser }) => {

    const location = useLocation()
    const INDEX = location.pathname === '/'
    const PROFILE = location.pathname === '/profile'


    const handleLogout = () => {
        UserService.logout()
        setCurrentUser(UserService.getCurrentUser())
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <h3 className=" text-warning mb-0 me-3" ><i className="fa-solid fa-hat-cowboy me-2"></i>COURSE <span className='text-white'>SYSTEM</span></h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className={`nav-link ${INDEX ? 'active' : ''}`} to="/"><i className="fa-solid fa-house me-2"></i>首頁
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            {
                                currentUser && currentUser ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/course">
                                                <i className="fa-solid fa-list me-2"></i>
                                                所有課程
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className={`nav-link ${PROFILE ? 'active' : ''}`} to="/profile">
                                                <i className="fa-solid fa-circle-info me-2"></i>
                                                個人資訊
                                            </Link>
                                        </li>

                                        {
                                            currentUser.user.role === 'instructor' ?
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/postCourse">
                                                        <i className="fa-solid fa-keyboard me-2"></i>
                                                        新增課程
                                                    </Link>
                                                </li>
                                                :
                                                <></>
                                        }
                                        {
                                            currentUser.user.isAdmin === true ?
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/userList" >
                                                        <i className="fa-solid fa-address-book me-2"></i>
                                                        會員管理
                                                    </Link>
                                                </li>
                                                :
                                                <></>
                                        }

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/" onClick={handleLogout}>
                                                <i className="fa-solid fa-right-from-bracket me-2"></i>
                                                登出
                                            </Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">
                                                <i className="fa-solid fa-address-card me-2"></i>
                                                會員註冊
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">
                                                <i className="fa-solid fa-right-to-bracket me-2"></i>
                                                登入
                                            </Link>
                                        </li>
                                    </>
                            }

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default HeaderComponent