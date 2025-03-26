import React from 'react'
import { Img } from '../../components/common/Img'
import Images from '../../assets/images/Image'
import GetInTouchForm from '../../components/home/getintouch/GetInTouchForm'

function GetInTouch() {
    return (
        <div className='px-5 py-6 md:px-12 md:py-10 font-[OmnesArabic]'>
            <div className='bg-[#25A1DD] rounded-3xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    <div className='hidden md:block'>
                        <Img src={Images.GetTouch} alt="getintouch" className="h-full" />
                    </div>
                    <div className=' py-20 md:px-12 px-8' >
                        <h2 className="text-3xl md:text-5xl text-white font-bold mb-5">Get in Touch</h2>
                        <p className="mt-2 text-white text-2xl font-semibold mb-5">
                            Feel free to reach out using the form below or explore our contact options
                        </p>
                        <div className=''>
                            <GetInTouchForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
