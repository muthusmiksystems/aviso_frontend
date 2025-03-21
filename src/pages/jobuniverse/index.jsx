import React from 'react';
import Topbar from '../../components/common/Topbar/Topbar';
import Navbar from '../../components/common/navbar';
import JobFair from '../../components/jobuniverse/Sidebar/JobFair';
import FilterSidebar from '../../components/jobuniverse/Filters/FilterSidebar';

function JobUniverse() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Topbar & Navbar */}
            <Topbar />
            <Navbar />

            {/* Main Layout */}
            {/* <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-4"> */}
                <FilterSidebar />
            {/* </div> */}
        </div>
    );
}

export default JobUniverse;
