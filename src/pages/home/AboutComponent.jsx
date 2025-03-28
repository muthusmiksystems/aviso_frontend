import React from 'react';
import { Img } from '../../components/common/Img';
import Images from '../../assets/images/Image';
import Bubble from '../../components/home/Bubble';

const WhatWeProvide = () => {

    return (
        <div className="bg-[#ffff] relative w-full h-full font-[OmnesArabic]">
            <Img
                src={Images.BgEffect}
                alt="background effect"
                className=" hidden lg:block absolute inset-0 h-[100%] w-full"
            />
            <div className=" lg:hidden bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] absolute inset-0 h-[100%] w-full"></div>
            {/* Content Container */}
            <div className="relative z-10 container mx-auto  py-16">
                {/* Header Section */}
                <div className="text-center text-white mt-2 md:mt-4 lg:mt-24 mb-10">
                    <h1 className="text-xl md:text-6xl font-semibold mb-2 md:mb-4">What We Provide</h1>
                    <p className="text-[10px] sm:text-2xl font-semibold text-nowrap sm:text-wrap">
                        Elevate Your Learning Journey with Our Exclusive Offerings
                    </p>
                </div>
                {/* <div className=''> */}
                <Bubble />
                {/* </div> */}
                {/* <div className="">
                    <div className="flex items-center h-full">
                        <Img
                            src={Images.Effect}
                            alt="partner logos"
                            className="max-w-6xl mt-[200px] sm:mt-[210px] md:mt-[280px] mx-auto w-full  absolute inset-0"
                        />
                    </div>
                    <div className=' relative z-10 container mx-auto grid grid-cols-4 gap-6 mt-[20%] md:mt-[20%] max-w-6xl mx-auto w-full place-items-center text-white pb-10 sm:pb-15 md:pb-30'>
                        <div className='mt-5'>
                            <h3 className="text-[10px] sm:text-xs md:text-xl font-semibold mb-3 ">Personalized <br />Learning Paths</h3>
                            <p className="text-[8px] sm:text-xs md:text-sm font-medium opacity-90">Lorem ipsum dolor sit amet consectetur. Aliquam aenean et id montes.</p>
                        </div>
                        <div className='mt-18 md:mt-20'>
                            <h3 className="text-[10px] sm:text-xs md:text-xl font-semibold mb-3">Dedicated Educator Guidance</h3>
                            <p className="text-[8px] sm:text-xs md:text-sm font-medium opacity-90">Lorem ipsum dolor sit amet consectetur. Aliquam aenean et id montes.</p>
                        </div>
                        <div className='mt-10'>
                            <h3 className="text-[10px] sm:text-xs md:text-xl font-semibold mb-3">Expertly Curated Resources</h3>
                            <p className="text-[8px] sm:text-xs md:text-sm font-medium opacity-90">Lorem ipsum dolor sit amet consectetur. Aliquam aenean et id montes.</p>
                        </div>
                        <div className='mt-24 md:mt-40'>
                            <h3 className="text-[10px] sm:text-xs md:text-xl font-semibold mb-3">Supportive Community</h3>
                            <p className="text-[8px] sm:text-xs md:text-sm font-medium opacity-90">Lorem ipsum dolor sit amet consectetur. Aliquam aenean et id montes.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default WhatWeProvide;

