import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosMore } from "react-icons/io";
import Images from "../../assets/images/Image";
import { Img } from "../../components/common/Img";

const ProfileCard = () => {
    return (
        <div className="relative">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-[20px] text-[#101010] font-semibold">My Profile</h2>
                <IoIosMore className="text-[#000000] text-[20px]" />
            </div>

            {/* Background Card */}
            <div className="relative rounded-xl p-6 text-white mt-4 h-60" style={{ backgroundImage: `url(${Images.Profilebg})`, backgroundSize: '100% 100%' }}>
                {/* Ranking & Courses Section */}
                <div className="flex justify-between items-center text-center bg-black/20 backdrop-blur-lg py-4 px-6 rounded-b-xl absolute bottom-0 left-0 w-full">
                    <div>
                        <p className="text-[20px] font-semibold">91</p>
                        <p className="text-[16px] font-semibold">Ranking</p>
                    </div>
                    <div>
                        <p className="text-[20px] font-semibold">20</p>
                        <p className="text-[16px] font-semibold">Courses</p>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
                    <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="User"
                        className="w-24 h-24 rounded-full border-4 border-white"
                    />
                </div>
            </div>

            {/* User Info */}
            <div className="mt-12 text-center">
                <h3 className="text-[16px] font-semibold text-[#101010] flex items-center justify-center">
                    Aviso User Account
                    <Img src={Images.VerifiedBadge} alt="Dropdown" className="ml-2"/>
                </h3>
                <p className="text-[14px] font-semibold text-[#96A0B5]">Engineer</p>
            </div>
        </div>
    );
};

const CalendarNavigation = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(new Date().getDate());
    const [startIndex, setStartIndex] = useState(0);

    const currentYear = currentDate.getFullYear();
    const currentMonthIndex = currentDate.getMonth();
    const currentMonth = currentDate.toLocaleString("default", { month: "long" });
    const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const getWeekday = (day) => {
        return new Date(currentYear, currentMonthIndex, day).toLocaleString("default", { weekday: "short" });
    };

    const changeMonth = (step) => {
        const newDate = new Date(currentYear, currentMonthIndex + step, 1);
        setCurrentDate(newDate);
        setStartIndex(0);
    };

    if (startIndex + 5 < daysArray.length && selectedDay === daysArray[startIndex + 4]) {
        setStartIndex(startIndex + 1);
    }

    return (
        <div className="my-8 text-center">
            <div className="flex items-center justify-between w-full">
                <button onClick={() => changeMonth(-1)} className="w-10 h-10 border border-[#E8EAEE] rounded-full flex items-center justify-center">
                    <IoIosArrowBack className="text-[#292D32]" />
                </button>
                <p className="text-[20px] text-[#101010] font-semibold">{currentMonth}</p>
                <button onClick={() => changeMonth(1)} className="w-10 h-10 border border-[#E8EAEE] rounded-full flex items-center justify-center">
                    <IoIosArrowForward className="text-[#292D32]" />
                </button>
            </div>
            <div className="flex justify-between gap-2 my-3 w-full overflow-x-auto">
                {daysArray.slice(startIndex, startIndex + 5).map((day, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <button
                            className={`px-3 py-3 w-14 rounded-lg text-center text-sm font-semibold cursor-pointer font-semibold
              ${day === selectedDay ? "bg-[#29ABE2]" : ""}`}
                            onClick={() => setSelectedDay(day)}
                        >
                            <span className={`text-[12px] ${day === selectedDay ? "text-white" : "text-[#96A0B5]"}`}>{getWeekday(day)}</span><br />
                            <p className={`text-[24px] ${day === selectedDay ? "text-white" : "text-[#96A0B5]"}`}>{day}</p>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const UpcomingClass = ({ title, instructor, duration, students }) => {
    return (
        <div className="p-3 rounded-lg flex justify-between items-end mb-2  cursor-pointer">
            <div className="flex items-center">
                <img src={Images.Logo} alt="logo" className="w-20 h-20 object-fit" />
                <div className="ml-3">
                    <h3 className="text-[#101010] text-[14px] font-semibold">{title}</h3>
                    <p className="text-[#96A0B5] text-[12px] font-regular">{instructor}</p>
                    <p className="text-xs text-[#96A0B5] text-[12px] font-semibold pt-3">
                        <span className="text-[#29ABE2]">{duration}</span>. {students} Student{students > 1 ? "s" : ""}
                    </p>
                </div>
            </div>
            <IoIosMore className="text-[#000000] text-[20px]" />
        </div>
    );
};

const ProfileDashboard = () => {
    return (
        <div className="bg-white py-5">
            <ProfileCard />
            <CalendarNavigation />
            <h2 className="font-semibold text-[20px] text-[#101010] my-6">Upcoming Class</h2>
            <UpcomingClass title="Build your Career" instructor="Marvin McKinney" duration="1h 34min" students={191} />
            <UpcomingClass title="Create a Career System" instructor="Kathryn Murphy" duration="2h 17min" students={182} />
            <UpcomingClass title="Master Application" instructor="Annette Black" duration="1h 25min" students={214} />
        </div>
    );
};

export default ProfileDashboard;
