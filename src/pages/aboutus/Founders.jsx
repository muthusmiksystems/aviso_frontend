

import React from "react";
import Images from "../../assets/images/Image";

const foundersData = [
    {
        id: 1,
        name: "Rachid",
        role: "CEO",
        image: Images.Founder1,
    },
    {
        id: 2,
        name: "Georges",
        role: "CMO",
        image: Images.Founder2,
    },
];

const Founders = () => {
    return (
        <section className="relative mb-20 text-center h-[600px] md:h-[800px] font-[OmnesArabic]">
            <div style={{ backgroundImage: `url(${Images.FounderBack})`, backgroundSize: '100% 100%' }} className="h-[550px] pt-16">
                <h3 className="text-[24px] font-semibold bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] text-transparent bg-clip-text">
                    FOUNDERS
                </h3>

                <h2 className="text-4xl md:text-[50px] lg:text-[58px] xl:text-[64px] font-semibold text-[#131313] mt-2 ">
                    Meet The Executives Guiding <br /> Us To Success At Aviso Careers
                </h2>
                <button className="mt-6 bg-[#29ABE2] text-white px-10 py-2 font-bold text-[#FAFAFA] rounded-full shadow-md">
                    Our Team
                </button>
            </div>
            <div className="absolute  left-1/2 top-[50%] md:top-[40%] transform  -translate-x-1/2 sm:flex flex justify-center gap-4 sm:gap-10  bottom-0">
                {foundersData.map((founder) => (
                    <div key={founder.id} className="w-40 sm:w-64 text-center relative  overflow-hidden">
                        <div className="mt-10">
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="mx-auto w-48 sm:w-72 h-54 sm:h-80 object-cover rounded-lg"
                            />
                        </div>
                        <div className="absolute left-1/2 bottom-0 md:bottom-20 transform -translate-x-1/2 bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] text-white py-2 px-8 sm:px-20 rounded-xl shadow-md">
                            <h3 className="text-sm sm:text-lg font-semibold">{founder.name}</h3>
                            <p className="text-sm text-regular opacity-100">{founder.role}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Founders;
