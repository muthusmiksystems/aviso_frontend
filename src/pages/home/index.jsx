import React from 'react'
import Topbar from '../../components/common/Topbar/Topbar'
import Navbar from '../../components/common/navbar/index'
import HeroSection from './HeroSection'
import Clients from './Clients'
function index() {
    return (
        <div className='font-omnesarabic'>
            <Topbar />
            <Navbar />
            <HeroSection />
            <Clients />
        </div>
    )
}

export default index