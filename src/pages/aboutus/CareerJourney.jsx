// import React from "react";
// import Images from "../../assets/images/Image";


// const CareerJourney = () => {
//     return (
//         <section className="font-[OmnesArabic] pt-36 pb-12 px-6 md:px-12 lg:px-20">
//             {/* Heading and Text Section */}
//             <div className="text-left md:flex md:items-center md:justify-between">
//                 <div className="md:w-1/2">
//                     <h4 className="text-[#C152D2] font-semibold uppercase">About Us</h4>
//                     <h2 className="text-4xl md:text-5xl font-bold mt-2 text-black leading-tight">
//                         We Help You with <br /> Your Career Journey
//                     </h2>
//                 </div>
//                 <div className="md:w-1/2 mt-6 md:mt-0">
//                     <h1 className="text-2xl text-bold text-[#131313] pb-2">Lorem ipsum dolor sit amet consectetur. Enim eros enim elit condimentum.</h1>
//                     <p className="text-gray-600 text-lg pb-2">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                         incididunt ut labore et dolore magna aliqua.
//                     </p>
//                     {/* Stats Section */}
//                     <div className="flex flex-wrap justify-between text-black">
//                         <div>
//                             <h4 className="text-sm font-bold">Professionals</h4>
//                             <p className="text-2xl font-bold bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] bg-clip-text text-transparent">300+</p>
//                         </div>
//                         <div>
//                             <h4 className="text-sm font-bold">Year Founded</h4>
//                             <p className="text-2xl font-bold bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] bg-clip-text text-transparent">2024</p>
//                         </div>
//                         <div>
//                             <h4 className="text-sm font-bold">Aviso Management</h4>
//                             <p className="text-2xl font-bold bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] bg-clip-text text-transparent">
//                                 $20.5B
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             <div className="mt-10 flex flex-col md:flex-row gap-8">
//                 <div className="md:w-3/5">
//                     <img
//                         src={Images.careerJourneyMain}
//                         alt="Career Journey"
//                         className="w-full rounded-lg shadow-md"
//                     />
//                 </div>

//                 <div className="">
//                     <img src={Images.careerJourney} alt="Team Collaboration" className="rounded-lg shadow-md w-full" />
//                     <img src={Images.careerJourney1} alt="Creative Work" className="rounded-lg shadow-md w-full" />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CareerJourney;


import React from "react";
import Images from "../../assets/images/Image";

const careerJourneyData = {
    title: "We Help You with Your Career Journey",
    description: "Lorem ipsum dolor sit amet consectetur. Enim eros enim elit condimentum.",
    professionals: "300+",
    foundedYear: "2024",
    management: "$20.5B",
    images: {
        main: Images.careerJourneyMain,
        teamCollaboration: Images.careerJourney,
        creativeWork: Images.careerJourney1,
    },
};

const CareerJourney = () => {
    const {
        title,
        description,
        professionals,
        foundedYear,
        management,
        images,
    } = careerJourneyData;

    return (
        <section className="font-[OmnesArabic] md:pt-36 pt-10 pb-12 px-6 md:px-12 lg:px-20">
            <div className="text-left md:flex md:items-center md:justify-between">
                <div className="md:w-1/2">
                    <h4 className="text-[#C152D2] font-semibold uppercase">About Us</h4>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-black leading-tight">
                        {title}
                    </h2>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <h1 className="text-2xl font-bold text-[#131313] pb-2">{description}</h1>
                    <p className="text-gray-600 text-lg pb-2">
                        {description}
                    </p>
                    <div className="flex flex-wrap justify-between text-black">
                        <div>
                            <h4 className="text-sm font-bold">Professionals</h4>
                            <p className="text-2xl font-bold bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] bg-clip-text text-transparent">
                                {professionals}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold">Year Founded</h4>
                            <p className="text-2xl font-bold bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] bg-clip-text text-transparent">
                                {foundedYear}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold">Aviso Management</h4>
                            <p className="text-2xl font-bold bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] bg-clip-text text-transparent">
                                {management}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-row gap-10">
                <div className="md:w-3/5">
                    <img
                        src={images.main}
                        alt="Career Journey"
                        className="w-full h-[620px] rounded-lg  object-cover"
                    />
                </div>
                <div className="md:w-2/5 flex flex-col gap-10">
                    <img
                        src={images.teamCollaboration}
                        alt="Team Collaboration"
                        className="w-full h-[289px] rounded-lg  object-cover"
                    />
                    <img
                        src={images.creativeWork}
                        alt="Creative Work"
                        className="w-full h-[289px] rounded-lg object-cover"
                    />
                </div>
            </div>

        </section>
    );
};

export default CareerJourney;

