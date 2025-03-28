import React from 'react'
import AboutBanner from './AboutBanner';
import CareerJourney from './CareerJourney';
import CareerManagement from './CareerManagement';
import WeAreTeam from './WeAreTeam';
import Founders from './Founders';

function index() {
    return (
        <div className='font-[OmnesArabic]'>
            <AboutBanner/>
            <CareerJourney/>
            <CareerManagement/>
            <WeAreTeam/>
            <Founders/>
        </div>
    )
}

export default index;
