

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
        <section className="relative mb-20 text-center h-[650px] ">
            <div style={{ backgroundImage: `url(${Images.FounderBack})`, backgroundSize: '100% 100%' }} className="h-[550px] pt-10">
                <h3 className="text-sm font-semibold bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] text-transparent bg-clip-text">
                    FOUNDERS
                </h3>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
                    Meet The Executives Guiding <br /> Us To Success At Aviso Careers
                </h2>
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition">
                    Our Team
                </button>
            </div>
            <div className="absolute  left-1/2 transform  -translate-x-1/2 sm:flex flex justify-center gap-4 sm:gap-10 mt-0 sm:mt-20 bottom-0">
                {foundersData.map((founder) => (
                    <div key={founder.id} className="w-40 sm:w-64 text-center relative  overflow-hidden">
                        <div className="py-6">
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="mx-auto w-48 sm:w-72 h-54 sm:h-80 object-cover rounded-lg"
                            />
                        </div>
                        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] text-white py-2 px-8 sm:px-20 rounded-xl shadow-md">
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
