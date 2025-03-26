import React from 'react'
import Images from '../../assets/images/Image'

function Bubble() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative pb-24 h-auto ">
            <div className="absolute hidden lg:block inset-0 z-0">
                {/* Horizontal line */}
                <img
                    src={Images.vector6}
                    alt="Connecting line"
                    // width={150}
                    height={10}
                    className="absolute top-[25%] left-[19%] w-[10%] transform -translate-y-1/2"
                />

                {/* Diagonal line */}
                <img
                    src={Images.vector7}
                    alt="Connecting line"
                    // width={160}
                    height={10}
                    className="absolute top-1/6 right-[45%] transform w-[10%]"
                    style={{ transformOrigin: "right center" }}
                />
                <img
                    src={Images.vector8}
                    alt="Connecting line"
                    width={150}
                    height={10}
                    className="absolute top-[12%] right-[19%] transform "
                    style={{ transformOrigin: "right center" }}
                />
                {/* Yellow dot */}
                <div className="absolute xxl:top-[33%] xl:top-[30%] lg:top-[30%] right-[25%] xl:right-[24%] w-8 h-8 rounded-full bg-yellow-300 -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Feature 1 - Personalized Learning Paths */}
            <div className="flex flex-col items-center text-center mb-5">
                <div className="relative w-34 md:w-2/3  mb-4">
                    <img
                        src={Images.vector5}
                        alt="Purple blob"
                        className=" inset-0"
                    />
                    <div className="absolute inset-0 flex justify-center">
                        <img src={Images.vector12} alt='vector12' className='md:w-24 md:h-30 w-10 h-10  mt-10 md:mt-14 lg:mt-8 xl:mt-14' />
                    </div>

                </div>
                <div className='px-6'>
                    <h3 className="text-white text-xl font-semibold mb-2">Personalized Learning Paths</h3>
                    <p className="text-white font-semibold text-sm">
                        Lorem ipsum dolor sit amet consectetur. Aliquam senectus et id montes. Congue lobortis placerat.
                    </p>
                </div>
            </div>

            {/* Feature 2 - Dedicated Educator Guidance */}
            <div className="flex flex-col items-center justify-center text-center mb-5 mt-0 md:mt-24">
                <div className="relative  w-34 md:w-2/3 md:h-2/3 mb-4">
                    <img
                        src={Images.vector1}
                        alt="Blue blob"
                        className=" inset-0"
                    />
                    <div className="absolute inset-0 flex  justify-center">
                        {/* <User className="w-16 h-16 text-white" /> */}
                        <img src={Images.vector9} alt='vector9' className='md:w-14 md:h-18 w-10 h-10  mt-10 md:mt-14 lg:mt-12 xxl:mr-10 mr-2 md:mr-8 lg:mr-2' />
                    </div>

                </div>
                <div className=''>
                    <h3 className="text-white text-xl font-semibold mb-2">Dedicated Educator Guidance</h3>
                    <p className="text-white font-semibold text-sm">
                        Lorem ipsum dolor sit amet consectetur. Fames ut quisque morbi sit. Scelerisque nibh faucibus donec vitae
                        elit. In amet tempor elit.
                    </p>
                </div>
            </div>

            {/* Feature 3 - Expertly Curated Resources */}
            <div className="flex flex-col items-center text-center mb-5">
                <div className="relative  w-34 md:w-2/3 mb-4">
                    <img
                        src={Images.vector3}
                        alt="Cyan blob"
                        className=" inset-0"
                    />
                    <div className="absolute inset-0 flex  justify-center">
                        <img src={Images.vector10} alt='vector10' className='md:w-14 md:h-18 w-10 h-10 mt-10 md:mt-14 lg:mt-8 xl:mt-14' />
                    </div>

                </div>
                <div className='px-6'>
                    <h3 className="text-white text-xl font-semibold mb-2">Expertly Curated Resources</h3>
                    <p className="text-white font-semibold text-sm">
                        Lorem ipsum dolor sit amet consectetur. Odio diam pellentesque porta eget donec lectus sit vitae. Ut nunc
                        facilisis diam sit diam diam. Faucet commodi.
                    </p>
                </div>
            </div>

            {/* Feature 4 - Supportive Community */}
            <div className="flex flex-col items-center text-center mb-5 mt-0 md:mt-28">
                <div className="relative  w-34 md:w-2/3  mb-4">
                    <img
                        src={Images.vector2}
                        alt="Pink blob"
                        className=" inset-0"
                    />
                    <div className="absolute inset-0 flex justify-center w-full">
                        <img src={Images.vector11} alt='vector11' className='md:w-16 md:h-16 w-10 h-10 mt-10 md:mt-14 lg:mt-10' />
                    </div>

                </div>
                <div className='px-6'>
                    <h3 className="text-white text-xl font-semibold mb-2">Supportive Community</h3>
                    <p className="text-white font-semibold text-sm">
                        Lorem ipsum dolor sit amet consectetur. Aliquam senectus et id montes. Congue lobortis placerat eros et.
                        Faucet commodi.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Bubble
