import React, { useEffect, useState } from 'react'
import UserService from '../service/user-service'

const UserListScreen = () => {

    let [userList, setUserList] = useState([])

    useEffect(() => {
        UserService.getUserList()
            .then((res) => {
                setUserList(res.data.userList)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className="container-fluid topImg profileImg px-0">
                <h3 > 用戶管理</h3>
            </div>

            <div className="container my-5">
                <div className="row">
                    <table className="table">

                        <thead>
                            <tr className='table-primary'>
                                <th scope="col">ID</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList && userList.map((item) => {
                                    return (
                                        <tr className={item.role === 'instructor' ? 'table-light' : ''} >
                                            <td >{item._id}</td>
                                            <td >{item.username}</td>
                                            <td >{item.email}</td>
                                            <td className={item.role == 'instructor' ? 'text-warning' : ''}>{item.role}</td>
                                            <td >
                                                {
                                                    item.isAdmin ?
                                                        <i className="fa-solid fa-check text-success"></i>
                                                        :
                                                        <i className="fa-solid fa-x text-danger"></i>
                                                }


                                            </td>
                                        </tr>
                                    )
                                })

                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}

export default UserListScreen