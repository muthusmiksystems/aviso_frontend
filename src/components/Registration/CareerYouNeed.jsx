



// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Navigation } from "swiper/modules";
// // import "./CareerYouNeed.css";

// const CareerYouNeed = () => {
//     const [selectedCareer, setSelectedCareer] = useState("ENGINEER");
//     const [progress, setProgress] = useState(0);
//     const [activeIndex, setActiveIndex] = useState(0);

//     const careers = [
//         { title: "ENGINEER", subtitle: "Civil & Construction" },
//         { title: "ARCHITECT", subtitle: "Interior & Landscape" },
//         { title: "PHP DEVELOPER", subtitle: "Softwares & Games" },
//         { title: "DATA SCIENTIST", subtitle: "AI & Machine Learning" },
//         { title: "GRAPHIC DESIGNER", subtitle: "UI/UX & Branding" },
//         { title: "ENGINEER1", subtitle: "Civil & Construction" },
//         { title: "ARCHITECT1", subtitle: "Interior & Landscape" },
//         { title: "PHP DEVELOPER1", subtitle: "Softwares & Games" },
//         { title: "DATA SCIENTIST1", subtitle: "AI & Machine Learning" },
//         { title: "GRAPHIC DESIGNER1", subtitle: "UI/UX & Branding" },
//     ];

//     return (
//         <div className="w-full">
//             <p className="text-gray-700 text-end">Step 1</p>
//             <h1 className="text-3xl font-bold text-gray-900 text-center mt-12">
//                 What kind of Career You Need?
//             </h1>
//             <p className="text-gray-500 text-center mb-8">
//                 Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
//             </p>

//             {/* Progress Bar */}


//             <div className="flex items-center justify-center gap-6">
//                 <button
//                     className={`w-10 h-10 rounded-full flex items-center justify-center text-white p-5 swiper-button-prev ${progress === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-[#29ABE2]"}`}
//                     onClick={() => setProgress(progress >= 0 ? progress  : 0)}
//                     disabled={progress === 0}
//                 >
//                 </button>

//                 <Swiper
//                     modules={[Pagination, Navigation]}
//                     spaceBetween={30}
//                     slidesPerView={1}
//                     breakpoints={{
//                         640: { slidesPerView: 2 },
//                         1024: { slidesPerView: 3 },
//                     }}
//                     navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
//                     onSlideChange={(swiper) => setProgress(swiper.activeIndex)}
//                     className=""
//                 >
//                     {careers.map((career, index) => (
//                         <SwiperSlide key={career.title}>
//                             <div
//                                 onClick={() => setSelectedCareer(career.title)}
//                                 className={`border-2 rounded-lg p-6 cursor-pointer transition ${selectedCareer === career.title ? "border-[#29ABE2]" : "border-gray-300"}`}
//                             >
//                                 <div className="flex justify-end mt-2">
//                                     <input type="radio" checked={selectedCareer === career.title} readOnly className="hidden peer" />
//                                     <label className="w-5 h-5 block rounded-full border-2 border-gray-300 peer-checked:border-[#29ABE2] peer-checked:bg-[#29ABE2]"></label>
//                                 </div>
//                                 <div className="w-20 h-20 bg-gray-300 rounded-full mb-4 mx-auto"></div>
//                                 <h3 className="font-bold text-lg text-center">{career.title}</h3>
//                                 <p className="text-gray-500 text-sm text-center">{career.subtitle}</p>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 <button
//                     className={`w-10 h-10 rounded-full flex items-center justify-center text-white p-5 swiper-button-next ${progress === careers.length - 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#29ABE2]"}`}
//                     onClick={() => setProgress(progress < careers.length - 1 ? progress + 1 : careers.length - 1)}
//                     disabled={progress === careers.length - 1}
//                 >
//                 </button>
//             </div>
//             {/* <div className="w-full flex items-center justify-center mt-6">
//                 <div className="relative w-2/3 h-2 bg-gray-300 rounded-full">
//                     <div
//                         className="absolute h-2 bg-[#29ABE2] rounded-full transition-all"
//                         style={{ width: `${(progress / (careers.length - 1)) * 100}%` }}
//                     ></div>
//                 </div>
//             </div> */}
//             <div className="w-full flex items-center justify-center my-4">
//                 <div className="relative w-2/3 h-2 bg-gray-300 rounded-full">
//                     <div
//                         className="absolute h-2 bg-[#29ABE2] rounded-full transition-all"
//                         style={{ width: `${((activeIndex + 1) / careers.length) * 100}%` }}
//                     ></div>
//                     {/* Small bullet at the end */}
//                     <div
//                         className="absolute w-4 h-4 bg-[#29ABE2] rounded-full transition-all"
//                         style={{ left: `calc(${((activeIndex + 1) / careers.length) * 100}% - 8px)`, top: "-4px" }}
//                     ></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CareerYouNeed;


import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import "./CareerYouNeed.css";

const CareerYouNeed = () => {
    const [selectedCareer, setSelectedCareer] = useState("ENGINEER");
    const [activeIndex, setActiveIndex] = useState(0);

    const careers = [
        { title: "ENGINEER", subtitle: "Civil & Construction" },
        { title: "ARCHITECT", subtitle: "Interior & Landscape" },
        { title: "PHP DEVELOPER", subtitle: "Softwares & Games" },
        { title: "DATA SCIENTIST", subtitle: "AI & Machine Learning" },
        { title: "GRAPHIC DESIGNER", subtitle: "UI/UX & Branding" },
        { title: "ENGINEER1", subtitle: "Civil & Construction" },
        { title: "ARCHITECT1", subtitle: "Interior & Landscape" },
        { title: "PHP DEVELOPER1", subtitle: "Softwares & Games" },
        { title: "DATA SCIENTIST1", subtitle: "AI & Machine Learning" },
        { title: "GRAPHIC DESIGNER1", subtitle: "UI/UX & Branding" }
    ];

    return (
        <div className="w-full">
            <p className="text-gray-700 text-end">step 1</p>
            <h1 className="text-3xl font-bold text-gray-900 text-center mt-12">
                What kind of Career You Need?
            </h1>
            <p className="text-gray-500 text-center mb-8">
                Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
            </p>

            {/* Progress Bar */}


            <div className="flex items-center justify-center gap-6">
                {/* Previous Button */}
                <button
                    className={`cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-white p-5 transition swiper-button-prev ${activeIndex === 0 ? "bg-gray-400" : "bg-[#29ABE2]"}`}
                    onClick={() => setActiveIndex(prev => Math.max(prev - 1, 0))}
                    disabled={activeIndex === 0}
                >
                 
                </button>

                {/* Swiper Component */}
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className=""
                >
                    {careers.map((career) => (
                        <SwiperSlide key={career.title}>
                            <div
                                onClick={() => setSelectedCareer(career.title)}
                                className={`border-2 rounded-lg p-6 cursor-pointer transition ${selectedCareer === career.title ? "border-[#29ABE2]" : "border-gray-300"
                                    }`}
                            >
                                <div className="flex justify-end mt-2">
                                    <input type="radio" checked={selectedCareer === career.title} readOnly className="hidden peer" />
                                    <label className="w-5 h-5 block rounded-full border-2 border-gray-300 peer-checked:border-[#29ABE2] peer-checked:bg-[#29ABE2]"></label>
                                </div>
                                <div className="w-20 h-20 bg-gray-300 rounded-full mb-4 mx-auto"></div>
                                <h3 className="font-bold text-lg text-center">{career.title}</h3>
                                <p className="text-gray-500 text-sm text-center">{career.subtitle}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Next Button */}
                <button
                    className={`cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-white p-5 transition swiper-button-next ${activeIndex === careers.length - 1 ? "bg-gray-400" : "bg-[#29ABE2]"}`}
                    onClick={() => setActiveIndex(prev => Math.min(prev + 1, careers.length - 1))}
                    disabled={activeIndex === careers.length - 1}
                >
                </button>
            </div>
            <div className="w-full flex items-center justify-center my-4">
                <div className="relative w-2/3 h-2 bg-gray-300 rounded-full">
                    <div
                        className="absolute h-2 bg-[#29ABE2] rounded-full transition-all"
                        style={{ width: `${((activeIndex + 1) / careers.length) * 100}%` }}
                    ></div>
                    {/* Small bullet at the end */}
                    <div
                        className="absolute w-4 h-4 bg-[#29ABE2] rounded-full transition-all"
                        style={{ left: `calc(${((activeIndex + 1) / careers.length) * 100}% - 8px)`, top: "-4px" }}
                    ></div>
                </div>
            </div>
            {/* <div className="swiper-pagination"></div> */}
        </div>
    );
};

export default CareerYouNeed;



