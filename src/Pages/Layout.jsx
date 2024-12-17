import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { ToastContainer } from 'react-toastify';

const Layout = () => {
    return (
        <>

<ToastContainer/>

        
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
