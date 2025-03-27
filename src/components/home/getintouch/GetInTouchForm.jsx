import React from 'react'

function GetInTouchForm() {
    return (
        <div>
            <form>
                <div className='flex flex-col md:flex-row gap-10'>
                    <div className="w-full">
                        <label className="font-regular text-[19px] text-[#FFFFFF]">First Name</label>
                        <input
                            type="text"
                            name="firstname"
                            className="w-full bg-transparent border-b border-white text-white focus:outline-none py-2"
                        />
                    </div>
                    <div className="w-full">
                        <label className="font-regular text-[19px] text-[#FFFFFF]">Last Name</label>
                        <input
                            type="text"
                            name="lastname"
                            className="w-full bg-transparent border-b border-white text-white  focus:outline-none py-2"
                        />
                    </div>
                </div>
                <div className="w-full mt-10">
                    <label className="font-regular text-[19px] text-[#FFFFFF]">Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full bg-transparent border-b border-white text-white  focus:outline-none py-2"
                    />
                </div>
                <div className="w-full mt-10">
                    <label className="font-regular text-[19px] text-[#FFFFFF]">Phone number</label>
                    <input
                        type="number"
                        name="phonenumber"
                        className="w-full bg-transparent border-b border-white text-white  focus:outline-none py-2"
                    />
                </div>
                <div className="w-full mt-10">
                    <label className="font-regular text-[19px] text-[#FFFFFF]">Message</label>
                    <input
                        type="textarea"
                        name="message"
                        className="w-full bg-transparent border-b border-white text-white  focus:outline-none py-2 h-40"
                    />
                </div>
                <button className="w-full mt-12 px-6 py-4 border-2 bg-[#ffff] border-[#ffff] text-black font-semibold text-[19px] rounded-full  transition-all">
                    Send
                </button>
            </form>
        </div>
    )
}

export default GetInTouchForm