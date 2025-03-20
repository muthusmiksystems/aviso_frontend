import React from "react";
import Topbar from "../../components/common/Topbar/Topbar";
import Navbar from "../../components/common/navbar/index";
import HeroSection from "./HeroSection";
import Clients from "./Clients";
import Footer from "../../components/common/Footer";
function index() {
  return (
    <div className="font-omnesarabic">
      <Topbar />
      <Navbar />
      <HeroSection />
      {/* <Clients /> */}
      <Footer />
    </div>
  );
}

export default index;
