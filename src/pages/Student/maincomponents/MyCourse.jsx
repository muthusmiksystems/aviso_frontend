import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const VideoCard = () => (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md">
        <div className="relative">
            <img src="/video-thumbnail.jpg" alt="Video Thumbnail" className="rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                <FaPlay className="text-white text-3xl" />
            </div>
        </div>
        <h3 className="text-lg font-semibold mt-3">Fundamentals of Engineering 101</h3>
        <p className="text-sm text-gray-500">Bessie Cooper at VoS company. <span className="text-blue-500">follow</span></p>
    </div>
);

const LessonExercise = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <div className="flex items-center">
                <div>
                    <h3 className="text-lg font-semibold">Lesson Exercise</h3>
                    <p className="text-sm text-gray-500">Learning journey with our comprehensive lesson exercise courses.</p>
                </div>
                <Link to={"#"} className="text-blue-700">See all</Link>
            </div>
            <div className="mt-3 space-y-2">
                <div className="flex justify-between text-sm font-medium">
                    <span>1. Application</span>
                    <span className="text-green-500">Completed</span>
                </div>
            </div>
        </div>
    );
};

const Performance = () => (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md">
        <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Performance</h3>
            <BsThreeDotsVertical />
        </div>
        <p className="text-sm text-gray-500">6 Certificates</p>
        <p className="text-green-500 mt-2">+3.63%</p>
    </div>
);

const TaskProgress = () => (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md">
        <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Task Progress</h3>
            <BsThreeDotsVertical />
        </div>
        <p className="text-sm text-gray-500">12 Completed</p>
        <div className="w-24 h-24 mx-auto mt-3">
            <CircularProgressbar value={46} text={`46%`} styles={buildStyles({ textColor: "#101010", pathColor: "#29ABE2" })} />
        </div>
    </div>
);

const Calendar = () => {
    const [selectedDay, setSelectedDay] = useState(7);
    return (
        <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md">
            <div className="flex justify-between items-center">
                <IoIosArrowBack className="cursor-pointer" />
                <h3 className="text-lg font-semibold">July 2025</h3>
                <IoIosArrowForward className="cursor-pointer" />
            </div>
            <div className="grid grid-cols-7 gap-2 mt-3">
                {[...Array(31)].map((_, i) => (
                    <div
                        key={i}
                        className={`p-2 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ${selectedDay === i + 1 ? "bg-blue-500 text-white" : "text-gray-500"
                            }`}
                        onClick={() => setSelectedDay(i + 1)}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function MyCourse() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <VideoCard />
            <LessonExercise />
            <div className="flex flex-col gap-4">
                <Performance />
                <TaskProgress />
            </div>
            <Calendar />
        </div>
    );
}
