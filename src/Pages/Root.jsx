import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../Components/Topbar/Topbar'
import Logo from '../Components/Logo/Logo'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

function Root() {
  return (
        <>  
        <Topbar />
            <main className='container'>
                <Logo />
                {/* <Navbar /> */}

            </main>
                <Outlet />
                <Footer />
        </>
  )
}

export default Root