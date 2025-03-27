import React from 'react'

function GetInTouchForm() {
    return (
        <div>
            <form>
                <div className='flex flex-col md:flex-row gap-10'>
                    <div className="w-full">
                        {/* <label className="block text-white text-sm mb-1">First Name</label> */}
                        <input
                            type="text"
                            name="firstname"
                            className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="w-full">
                        {/* <label className="block text-white text-sm mb-1">Last Name</label> */}
                        <input
                            type="text"
                            name="lastname"
                            className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div className="w-full mt-10">
                    {/* <label className="block text-white text-sm mb-1">Last Name</label> */}
                    <input
                        type="email"
                        name="email"
                        className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                        placeholder="Email"
                    />
                </div>
                <div className="w-full mt-10">
                    {/* <label className="block text-white text-sm mb-1">Last Name</label> */}
                    <input
                        type="number"
                        name="phonenumber"
                        className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                        placeholder="Phone Number"
                    />
                </div>
                <div className="w-full mt-10">
                    {/* <label className="block text-white text-sm mb-1">Last Name</label> */}
                    <input
                        type="textarea"
                        name="message"
                        className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2 h-34"
                        placeholder="Message"
                    />
                </div>
                <button className="w-full mt-12 px-6 py-4 border-2 bg-[#ffff] border-[#ffff] text-black font-semibold rounded-full  transition-all">
                    send
                </button>
            </form>
        </div>
    )
}

export default GetInTouchForm