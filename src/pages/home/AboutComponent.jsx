import React from 'react';
import { Img } from '../../components/common/Img';
import Images from '../../assets/images/Image';
import Bubble from '../../components/home/Bubble';

const WhatWeProvide = () => {

    return (
        <div className="bg-[#ffff] relative w-full h-full font-[OmnesArabic] mt-16">
            <Img
                src={Images.BgEffect}
                alt="background effect"
                className=" hidden lg:block absolute inset-0 h-[100%] w-full"
            />
            <div className=" lg:hidden bg-gradient-to-r from-[#B82D97] via-[#57B3D3] to-[#76ABFC] absolute inset-0 h-[100%] w-full"></div>
            {/* Content Container */}
            <div className="relative z-10 container mx-auto  py-16">
                {/* Header Section */}
                <div className="text-center text-white mt-2 md:mt-4 lg:mt-24 mb-5">
                    <h1 className="text-xl md:text-6xl font-semibold mb-2 md:mb-6 pt-16">What We Provide</h1>
                    <p className="text-[10px] sm:text-2xl font-semibold text-nowrap sm:text-wrap">
                        Elevate Your Learning Journey with Our Exclusive Offerings
                    </p>
                </div>
                <Bubble />
            </div>
        </div>
    );
};

export default WhatWeProvide;

