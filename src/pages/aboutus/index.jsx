import React from 'react'
import AboutBanner from './AboutBanner';
import CareerJourney from './CareerJourney';
import CareerManagement from './CareerManagement';
import WeAreTeam from './WeAreTeam';
import Founders from './Founders';
import Footer from '../../components/common/Footer';

function index() {
    return (
        <div className='font-[OmnesArabic]'>
            <AboutBanner/>
            <CareerJourney/>
            <CareerManagement/>
            <WeAreTeam/>
            <Founders/>
            <Footer/>
        </div>
    )
}

export default index;
