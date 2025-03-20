import React from 'react'
import Topbar from '../../components/common/Topbar/Topbar';
import Navbar from '../../components/common/navbar';
import AboutBanner from './AboutBanner';

function index() {
    return (
        <div className='font-omnesarabic'>
            <Topbar />
            <Navbar />
            <AboutBanner/>
        </div>
    )
}

export default index;