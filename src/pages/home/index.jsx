import React from "react";
import HeroSection from "./HeroSection";
import Clients from "./Clients";
import WhyChoiceUs from "./WhyChoiceUs";
import AboutComponent from "./AboutComponent";
import JobList from "./JobList";
import GetInTouch from "./GetInTouch";
import ConnectUS from "../home/Connectus";
import Testimonials from "./Testimonial";
import LearningJourney from "./LearningJourney";
function index() {
  return (
    <div className="font-[OmnesArabic]">
      <HeroSection />
      <Clients />
      <WhyChoiceUs />
      <AboutComponent />
      <JobList />
      <GetInTouch />
      <LearningJourney />
      <Testimonials />
      <ConnectUS />
    </div>
  );
}

export default index;
