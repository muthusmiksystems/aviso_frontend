import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProfileDashboard from "./ProfileDashboard";
import { Route, Routes } from "react-router-dom";
import MyCourse from "./maincomponents/MyCourse";
const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex font-[OmnesArabic]">
      <div className="w-[250px]  ">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      <div className="w-[890px] px-8">
        <Header />
          <Routes>
            {/* <Route path="/overview" element={<Overview />} /> */}
            <Route path="/my-course" element={<MyCourse />} />
            {/* <Route path="/community" element={<Community />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/report" element={<Report />} />
              <Route path="/settings" element={<AccountSettings />} /> */}
          </Routes>
      </div>

      <div className="w-[302px]">
        <ProfileDashboard />
      </div>
    </div>
  );
};

export default StudentDashboard;
