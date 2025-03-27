// import React from "react";
// import AuthContainer from "../../components/AuthContainer";
// import { Link } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";

// const Login = () => {
//     return (
//         <AuthContainer>
//             <div className="flex justify-center px-8 sm:px-20 py-16">

//                 <div className="hidden md:flex flex-col justify-center items-start p-10 w-1/2 text-white">
//                     <h2 className="text-3xl font-bold">Aviso Careers</h2>
//                     <h1 className="text-6xl mt-3 font-bold">Login</h1>
//                 </div>


//                 <div className="w-full md:w-1/2 bg-white rounded-lg p-8">
//                     <h2 className="text-center text-3xl font-bold text-pink-600 mb-6">Welcome Back!</h2>
//                     <hr className="border-gray-300 my-5 mx-auto w-3/4" />

//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-semibold">Your Email *</label>
//                         <input type="email" placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400" />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-semibold">Password *</label>
//                         <input type="password" placeholder="Enter your password" className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400" />
//                     </div>

//                     <div className="mb-4 flex items-center">
//                         <input type="checkbox" id="remember" className="mr-2" />
//                         <label htmlFor="remember" className="text-gray-600">Remember me</label>
//                     </div>

//                     <button className="w-full bg-blue-500 text-white py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition">Login</button>

//                     <div className="text-center my-4 text-gray-500">or</div>

//                     <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-semibold text-lg flex items-center justify-center hover:opacity-90 transition">
//                         <span className="mr-2 text-xl"><FaGoogle className="text-lg" /></span> Continue with Google
//                     </button>

//                     <p className="text-center mt-6 text-gray-600">New to Aviso? <Link to="/register" className="text-pink-500 font-semibold cursor-pointer">Sign up</Link></p>
//                     <hr className="border-gray-300 my-5 mx-auto w-3/4" />
//                     <p className="text-xs text-gray-500 text-center mt-4 px-6 md:px-10 lg:px-24">
//                         <span>Having trouble <Link to="/login" className="text-blue-500">logging in?</Link> Contact help center</span>
//                     </p>

//                     <p className="text-xs text-gray-500 text-center mt-4 px-6 md:px-10 lg:px-24">
//                         This site is protected by reCAPTCHA Enterprise and
//                         the Google <Link to="/login" className="text-black text-extrabold">Privacy Policy</Link> and <Link to="/login" className="text-black text-extrabold">Terms of Service</Link> apply.
//                     </p>
//                 </div>
//             </div>
//         </AuthContainer>
//     );
// };

// export default Login;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { loginUser } from "../../redux/features/authSlice";
import AuthContainer from "../../components/AuthContainer";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { loading, error } = useSelector((state) => state.auth);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }))
            .unwrap()
            .then(() => navigate("/dashboard")) 
            .catch(() => {}); 
    };

    return (
        <AuthContainer>
        <div className="flex justify-center px-8 lg:px-20 py-16">
            <div className="hidden md:flex flex-col justify-center items-start p-10 w-1/2 text-white">
                <h2 className="text-3xl font-bold ">Aviso Careers</h2>
                <h1 className="text-6xl mt-3 font-bold">Login</h1>
            </div>

            <div className="w-full md:w-1/2 bg-white rounded-lg p-8 mr-0 lg:mr-16">
                <h2 className="text-center text-3xl font-bold bg-gradient-to-b from-[#FB46E8] to-[#A82884] text-transparent bg-clip-text mb-6">Welcome Back!</h2>
                <hr className="border-gray-300 my-5 mx-auto w-3/4" />

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="text-lg font-semibold text-[#606060]">Your Email *</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3  rounded-lg mt-1 outline-none" 
			    style={{ backgroundColor: "rgba(148, 215, 244, 0.28)" }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-lg font-semibold text-[#606060]">Password *</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3  rounded-lg mt-1 outline-none" 
			    style={{ backgroundColor: "rgba(148, 215, 244, 0.28)" }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#29ABE2] shadow-md shadow-pink-200 text-white py-3 rounded-full font-semibold text-lg "
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="text-center my-4 text-gray-500">or</div>

                <button className="w-full bg-gradient-to-b from-[#FB46E8] to-[#A82884] text-white py-3 rounded-full font-semibold text-lg flex items-center justify-center hover:opacity-90 transition">
                        <span className="mr-2 text-xl"><FaGoogle className="text-lg" /></span> Continue with Google
                    </button>

                <p className="text-center mt-6 text-gray-600">New to Aviso? <Link to="/register" className="text-pink-500 font-semibold cursor-pointer">Sign up</Link></p>
                <hr className="border-gray-300 my-5 mx-auto w-3/4" />
		<p className="text-xs text-[#8E8E8E] font-regular text-center mt-4 px-6 md:px-10 lg:px-24">
                        <span className="text-regular">Having trouble <Link to="/login">logging in?</Link> Contact help center</span>
                    </p>

                    <p className="font-[OmnesArabic] font-regular text-xs text-[#8E8E8E] text-center mt-4 px-6 md:px-10 lg:px-24">
                        This site is protected by reCAPTCHA Enterprise and
                        the Google <Link to="#" className="text-[#606060] font-semibold">Privacy policy</Link> and <Link to="#" className="text-[#606060] font-semibold">Terms of Service</Link> apply.
                    </p>
            </div>
        </div>
        </AuthContainer>
    );
};

export default Login;


