import React, { useEffect, useState } from "react";
import axios from "axios";
import Images from "../../assets/images/Image";

const CareerJourney = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/data/careerJourneyData.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  return (
    <section className="font-[OmnesArabic] mt-10 md:pt-36 pt-10 pb-20 px-6 md:px-12 lg:px-20">
      <div className="text-left md:flex md:items-center md:justify-between">
        <div className="md:w-1/2">
          <h4 className="text-[#B82D97] font-semibold uppercase text-[24px]">
            About Us
          </h4>
          <h2 className="text-4xl text-[#131313] lg:text-[50px] xl:text-[64px] font-semibold mt-2 leading-tight">
            {data.title}
          </h2>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-2xl lg:text-[28px] xl:text-[32px] font-semibold text-[#131313] pb-4">
            {data.description}
          </h1>
          <p className="text-[#606060] font-regular text-base pb-4">
            {data.description}
          </p>
          <div className="flex flex-wrap justify-between text-black">
            <div>
              <h4 className="text-[#606060] font-bold text-base">
                Professionals
              </h4>
              <p className="text-[40px] font-semibold bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] bg-clip-text text-transparent">
                {data.professionals}
              </p>
            </div>
            <div>
              <h4 className="text-[#606060] font-bold text-base">
                Year Founded
              </h4>
              <p className="text-[40px] font-semibold bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] bg-clip-text text-transparent">
                {data.foundedYear}
              </p>
            </div>
            <div>
              <h4 className="text-[#606060] font-bold text-base">
                Aviso Management
              </h4>
              <p className="text-[40px] font-semibold bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] bg-clip-text text-transparent">
                {data.management}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="mt-10 flex flex-col md:flex-row gap-10">
        <div className="md:w-3/5">
          <img
            // src={data?.images?.main}
            src={Images[data.images.main]}
            alt="Career Journey"
            className="w-full h-[620px] rounded-lg object-cover"
          />
        </div>
        <div className="md:w-2/5 flex flex-col gap-10">
          <img
            src={Images[data.images.teamCollaboration]}
            alt="Team Collaboration"
            className="w-full h-[289px] rounded-lg object-cover"
          />
          <img
            src={Images[data.images.creativeWork]}
            alt="Creative Work"
            className="w-full h-[289px] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;
