import React from "react";
import AuthContainer from "../../components/AuthContainer";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <AuthContainer>
            <div className="flex justify-center px-8 sm:px-20 py-16">

                <div className="hidden md:flex flex-col justify-center items-start p-10 w-1/2 text-white">
                    <h2 className="text-3xl font-bold">Aviso Careers</h2>
                    <h1 className="text-6xl mt-3 font-bold">Login</h1>
                </div>


                <div className="w-full md:w-1/2 bg-white rounded-lg p-8">
                    <h2 className="text-center text-3xl font-bold text-pink-600 mb-6">Welcome Back!</h2>
                    <hr className="border-gray-300 my-5 mx-auto w-3/4" />

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Your Email *</label>
                        <input type="email" placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Password *</label>
                        <input type="password" placeholder="Enter your password" className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-gray-600">Remember me</label>
                    </div>

                    <button className="w-full bg-blue-500 text-white py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition">Login</button>

                    <div className="text-center my-4 text-gray-500">or</div>

                    <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-semibold text-lg flex items-center justify-center hover:opacity-90 transition">
                        <span className="mr-2 text-xl"><FaGoogle className="text-lg" /></span> Continue with Google
                    </button>

                    <p className="text-center mt-6 text-gray-600">New to Aviso? <Link to="/register" className="text-pink-500 font-semibold cursor-pointer">Sign up</Link></p>
                    <hr className="border-gray-300 my-5 mx-auto w-3/4" />
                    <p className="text-xs text-gray-500 text-center mt-4 px-6 md:px-10 lg:px-24">
                        <span>Having trouble <Link to="/login" className="text-blue-500">logging in?</Link> Contact help center</span>
                    </p>

                    <p className="text-xs text-gray-500 text-center mt-4 px-6 md:px-10 lg:px-24">
                        This site is protected by reCAPTCHA Enterprise and
                        the Google <Link to="/login" className="text-black text-extrabold">Privacy Policy</Link> and <Link to="/login" className="text-black text-extrabold">Terms of Service</Link> apply.
                    </p>
                </div>
            </div>
        </AuthContainer>
    );
};

export default Login;

