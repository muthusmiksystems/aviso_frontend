// import React from "react";
// import Images from "../../assets/images/Image";

// const foundersData = [
//     {
//         id: 1,
//         name: "Rachid",
//         role: "CEO",
//         image: Images.Founder1,
//     },
//     {
//         id: 2,
//         name: "Georges",
//         role: "CMO",
//         image: Images.Founder2,
//     },
// ];

// const Founders = () => {
//     return (
//         <section className="text-center py-16">
//             <div style={{ backgroundImage: `url(${Images.FounderBack})` }} className="bg-cover bg-center px-6 md:px-12 lg:px-20 ">
//                 <h3 className="text-sm bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] bg-clip-text text-transparent font-bold">FOUNDERS</h3>
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
//                     Meet The Executives Guiding <br /> Us To Success At Aviso Careers
//                 </h2>
//                 <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
//                     Our Team
//                 </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {foundersData.map((founder) => (
//                     <div key={founder.id} className="bg-blue-100 p-6 rounded-lg shadow-md">
//                         <img
//                             src={founder.image}
//                             alt={founder.name}
//                             className="mx-auto w-40 h-40 object-cover rounded-lg"
//                         />
//                         <div className="mt-4">
//                             <h3 className="text-xl font-semibold text-gray-900">{founder.name}</h3>
//                             <p className="text-blue-600 text-sm">{founder.role}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         </section>
//     );
// };
// export default Founders;



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
        <section className="relative mb-20 text-center h-[650px] font-[OmnesArabic]">
            <div style={{ backgroundImage: `url(${Images.FounderBack})`, backgroundSize: '100% 100%' }} className="h-[550px] pt-10">
                <h3 className="text-sm font-bold text-blue-500 tracking-wider">FOUNDERS</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
                    Meet The Executives Guiding <br /> Us To Success At Aviso Careers
                </h2>
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition">
                    Our Team
                </button>
            </div>
            <div className="absolute left-0 sm:left-1/2 transform translate-x-0 sm:-translate-x-1/2 md:flex flex justify-center gap-10 mt-20 bottom-0">
                {foundersData.map((founder) => (
                    <div key={founder.id} className="w-64 text-center relative  overflow-hidden">
                        <div className="py-6">
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="mx-auto w-72 h-80 object-cover rounded-lg"
                            />
                        </div>
                        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] text-white py-2 px-20 rounded-xl shadow-md">
                            <h3 className="text-lg font-semibold">{founder.name}</h3>
                            <p className="text-sm opacity-80">{founder.role}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Founders;
