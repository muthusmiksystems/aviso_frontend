import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DescriptionBanner from './DescriptionBanner'
import Testimonial from './Testimonial'
import JobList from '../../components/jobuniverse/JobCards/JobList'
import JobCard from './JobCard'
const jobdata = [
    {
        "title": "Marketing",
        "reference": "NOC6547",
        "location": "Paris, France",
        "tags": ["Large library", "Good facilities", "Financial aid"],
        "rating": 8.5,
        "ranking": 15,
        "estimated_cost": "16,000$/year",
        "extracurricular_activities": "8.5/10",
        "website": "https://www.paris5.fr",
        "logo": "https://example.com/paris5-logo.png"
    },
    {
        "title": "Sales",
        "reference": "NOC0237",
        "location": "Cambridge, USA",
        "tags": ["Ivy League", "World-class faculty", "Scholarships"],
        "rating": 9.8,
        "ranking": 1,
        "estimated_cost": "50,000$/year",
        "extracurricular_activities": "9.7/10",
        "website": "https://www.harvard.edu",
        "logo": "https://example.com/harvard-logo.png"
    },
    {
        "title": "Engineering",
        "reference": "NOC8563",
        "tags": ["Historic", "Research-intensive", "Scholarships"],
        "rating": 9.7,
        "ranking": 2,
        "estimated_cost": "45,000$/year",
        "extracurricular_activities": "9.6/10",
        "website": "https://www.ox.ac.uk",
        "logo": "https://example.com/oxford-logo.png"
    },
    {
        "title": "IT",
        "reference": "NOC2354",
        "location": "Stanford, USA",
        "tags": ["Tech hub", "Innovative research", "Start-up culture"],
        "rating": 9.6,
        "ranking": 3,
        "estimated_cost": "52,000$/year",
        "extracurricular_activities": "9.5/10",
        "website": "https://www.stanford.edu",
        "logo": "https://example.com/stanford-logo.png"
    },
    {
        "title": "IT",
        "reference": "NOC2354",
        "location": "Cambridge, USA",
        "tags": ["STEM-focused", "High-tech labs", "Entrepreneurship"],
        "rating": 9.5,
        "ranking": 4,
        "estimated_cost": "53,000$/year",
        "extracurricular_activities": "9.4/10",
        "website": "https://www.mit.edu",
        "logo": "https://example.com/mit-logo.png"
    },
    {
        "title": "IT",
        "reference": "NOC2354",
        "location": "Tokyo, Japan",
        "tags": ["Cutting-edge research", "Asian leader", "Scholarships"],
        "rating": 9.0,
        "ranking": 12,
        "estimated_cost": "10,000$/year",
        "extracurricular_activities": "8.8/10",
        "website": "https://www.u-tokyo.ac.jp",
        "logo": "https://example.com/tokyo-logo.png"
    },
    {
        "title": "IT",
        "reference": "NOC2354",
        "location": "Toronto, Canada",
        "tags": ["Diverse community", "Research leader", "Financial aid"],
        "rating": 8.8,
        "ranking": 18,
        "estimated_cost": "20,000$/year",
        "extracurricular_activities": "8.7/10",
        "website": "https://www.utoronto.ca",
        "logo": "https://example.com/toronto-logo.png"
    },
    {
        "title": "IT",
        "reference": "NOC2354",
        "location": "Zurich, Switzerland",
        "tags": ["Engineering focus", "World-class research", "Affordable"],
        "rating": 9.2,
        "ranking": 7,
        "estimated_cost": "1,500$/year",
        "extracurricular_activities": "8.9/10",
        "website": "https://www.ethz.ch",
        "logo": "https://example.com/ethz-logo.png"
    },
    {
        "title": "IT",
        "reference": "NOC2354",
        "location": "Singapore",
        "tags": ["Asian excellence", "Research hub", "Entrepreneurship"],
        "rating": 9.1,
        "ranking": 10,
        "estimated_cost": "12,000$/year",
        "extracurricular_activities": "9.0/10",
        "website": "https://www.nus.edu.sg",
        "logo": "https://example.com/nus-logo.png"
    },
    {
        "title": "IT",
        "reference": "NOC2354",
        "location": "Melbourne, Australia",
        "tags": ["Top-ranked", "Diverse campus", "Scholarships"],
        "rating": 8.9,
        "ranking": 14,
        "estimated_cost": "22,000$/year",
        "extracurricular_activities": "8.6/10",
        "website": "https://www.unimelb.edu.au",
        "logo": "https://example.com/melbourne-logo.png"
    }
]

function index() {
    const navigation = useNavigate()
    const location = useLocation()
    const data = location.state
    const handleDescription = (item) => {
        navigation('/job-description', { state: item })
    }
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 6;

    // Pagination Logic
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobdata.slice(indexOfFirstJob, indexOfLastJob);
    return (
        <div>
            <DescriptionBanner data={data} />
            <Testimonial data={data} />
            <div className='p-10 bg-gray-100'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {currentJobs.map((job, index) => (
                        <JobCard key={index} job={job} jobdescription={handleDescription} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default index