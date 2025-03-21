"use client"

import Images from "../../../assets/images/Image"

export default function WhatWeProvide() {
    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-400 py-20">
            {/* Top curved shape */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-white rounded-b-[50%] w-full"></div>

            {/* Bottom curved shape */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-white rounded-t-[50%] w-full"></div>

            <div className="container mx-auto px-4 pt-10 pb-16 relative z-10">
                {/* Heading */}
                <div className="text-center text-white mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">What We Provide</h2>
                    <p className="text-xl">Elevate Your Learning Journey with Our Exclusive Offerings</p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
                    {/* Connecting lines */}
                    <div className="absolute hidden lg:block inset-0 z-0">
                        {/* Horizontal line */}
                        <img
                            src={Images.vector6}
                            alt="Connecting line"
                            width={100}
                            height={2}
                            className="absolute top-1/3 left-50 transform -translate-y-1/2"
                        />

                        {/* Diagonal line */}
                        <img
                            src={Images.vector7}
                            alt="Connecting line"
                            width={300}
                            height={2}
                            className="absolute top-1/3 right-1/4 transform rotate-45"
                            style={{ transformOrigin: "right center" }}
                        />

                        {/* Yellow dot */}
                        <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-yellow-300 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    {/* Feature 1 - Personalized Learning Paths */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-2/3 h-2/3 mb-4">
                            <img
                                src={Images.vector5}
                                alt="Purple blob"
                                className="absolute inset-0 h-full w-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* <Book className="w-16 h-16 text-white" /> */}
                            </div>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-2">Personalized Learning Paths</h3>
                        <p className="text-white/80 text-sm">
                            Lorem ipsum dolor sit amet consectetur. Aliquam senectus et id montes. Congue lobortis placerat.
                        </p>
                    </div>

                    {/* Feature 2 - Dedicated Educator Guidance */}
                    <div className="flex flex-col items-center text-center mt-10 lg:mt-34">
                        <div className="relative w-2/3 h-2/3 mb-4">
                            <img
                                src={Images.vector1}
                                alt="Blue blob"
                                className="absolute inset-0 h-full w-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* <User className="w-16 h-16 text-white" /> */}
                            </div>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-2">Dedicated Educator Guidance</h3>
                        <p className="text-white/80 text-sm">
                            Lorem ipsum dolor sit amet consectetur. Fames ut quisque morbi sit. Scelerisque nibh faucibus donec vitae
                            elit. In amet tempor elit.
                        </p>
                    </div>

                    {/* Feature 3 - Expertly Curated Resources */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-40 h-32 mb-4">
                            <img
                                src={Images.vector3}
                                alt="Cyan blob"
                                width={160}
                                height={128}
                                className="absolute inset-0"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* <Award className="w-16 h-16 text-white" /> */}
                            </div>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-2">Expertly Curated Resources</h3>
                        <p className="text-white/80 text-sm">
                            Lorem ipsum dolor sit amet consectetur. Odio diam pellentesque porta eget donec lectus sit vitae. Ut nunc
                            facilisis diam sit diam diam. Faucet commodi.
                        </p>
                    </div>

                    {/* Feature 4 - Supportive Community */}
                    <div className="flex flex-col items-center text-center mt-8 lg:mt-24">
                        <div className="relative w-36 h-36 mb-4">
                            <img
                                src={Images.vector2}
                                alt="Pink blob"
                                width={144}
                                height={144}
                                className="absolute inset-0"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* <Users className="w-16 h-16 text-white" /> */}
                            </div>
                        </div>
                        <h3 className="text-white text-xl font-semibold mb-2">Supportive Community</h3>
                        <p className="text-white/80 text-sm">
                            Lorem ipsum dolor sit amet consectetur. Aliquam senectus et id montes. Congue lobortis placerat eros et.
                            Faucet commodi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

