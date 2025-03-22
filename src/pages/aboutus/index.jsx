import React from 'react'
import Topbar from '../../components/common/Topbar/Topbar';
import Navbar from '../../components/common/navbar';
import AboutBanner from './AboutBanner';
import CareerJourney from './CareerJourney';
import CareerManagement from './CareerManagement';
import WeAreTeam from './WeAreTeam';
import Founders from './Founders';

function index() {
    return (
        <div className='font-omnesarabic'>
            {/* <Topbar />
            <Navbar /> */}
            <AboutBanner/>
            <CareerJourney/>
            <CareerManagement/>
            <WeAreTeam/>
            <Founders/>
        </div>
    )
}

export default index;