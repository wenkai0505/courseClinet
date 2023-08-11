import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderNav from './HeaderNav'
import Footer from './Footer'

const Layout = ({ currentUser, setCurrentUser }) => {
    return (
        <>
            <HeaderNav currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout