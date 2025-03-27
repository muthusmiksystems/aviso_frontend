// import React from "react";
// import { FaGoogle } from "react-icons/fa";
// import AuthContainer from "../../components/AuthContainer";
// import { Link } from "react-router-dom";

// const Register = () => {
//   return (
//     <AuthContainer>
//       <div className="flex justify-center px-8 sm:px-20 py-16">
//         <div className="hidden md:flex flex-col justify-center items-start p-10 w-1/2 text-white">
//           <h2 className="text-3xl font-bold">Aviso Careers</h2>
//           <h1 className="text-6xl mt-3 font-bold">Create Account</h1>
//         </div>

//         <div className="w-full md:w-1/2 bg-white rounded-lg p-8">
//           <p className="text-sm text-center">
//             Already an Aviso member?{" "}
//             <Link to="/login" className="text-pink-500">Log in</Link>
//           </p>

//           <button className="w-full flex items-center justify-center gap-2 py-3 px-4 mt-4 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-md">
//             <FaGoogle className="text-lg" /> Sign Up with Google
//           </button>

//           <p className="text-sm text-gray-500 mt-4">Or sign up using your email address</p>

//           <form className="mt-4 space-y-4">
//             <div>
//               <label className="text-sm font-semibold">Your Name <span className="text-red-500">*</span></label>
//               <input type="text" placeholder="Enter your full name" className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 mt-2" />
//             </div>

//             <div>
//               <label className="text-sm font-semibold">Your Email <span className="text-red-500">*</span></label>
//               <input type="email" placeholder="Enter your email" className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 mt-2" />
//             </div>

//             <div>
//               <label className="text-sm font-semibold">Your Phone Number <span className="text-red-500">*</span></label>
//               <input type="tel" placeholder="Enter your phone number" className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 mt-2" />
//             </div>

//             <div>
//               <label className="text-sm font-semibold">Password <span className="text-red-500">*</span></label>
//               <input type="password" placeholder="7+ Characters" className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 mt-2" />
//             </div>

//             <div className="flex items-center">
//               <input type="checkbox" className="w-4 h-4" />
//               <p className="text-sm ml-2">
//                 I Accept <span className="font-semibold">Terms & Conditions.</span>
//               </p>
//             </div>

//             <button className="w-full py-3 text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">
//               Create Account
//             </button>
//           </form>
//           <hr className="border-gray-300 my-5" />
//           <p className="text-xs text-gray-500 text-center mt-4 px-6 md:px-10 lg:px-24">
//             I accept Aviso's <Link to="#" className="text-blue-500">Terms of Use</Link> and <Link to="#" className="text-blue-500">Privacy Notice</Link>.
//             <span>Having trouble <Link to="/login" className="text-blue-500">logging in?</Link> Contact help center</span>
//           </p>

//           <p className="text-xs text-gray-500 text-center mt-4 px-6 md:px-10 lg:px-24">
//             This site is protected by reCAPTCHA Enterprise and
//             the Google Privacy Policy and Terms of Service apply.
//           </p>

//         </div>
//       </div>
//     </AuthContainer>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContainer from "../../components/AuthContainer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/features/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    role: "student",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    mobileNo: "",
    country: "",
    nationality: "",
    password: "",
    gender: "",
    additionalInfo: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(registerUser(formData)).unwrap();
      navigate("/login"); // Redirect to dashboard on success
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <AuthContainer>
      <div className="flex justify-center px-8 lg:px-20 py-16">
        <div className="hidden md:flex flex-col justify-center items-start p-10 w-1/2 text-white">
          <h2 className="text-2xl font-semibold">Aviso Careers</h2>
          <h1 className="text-6xl mt-3 font-semibold">Create Account</h1>
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-lg p-8 mr-0 lg:mr-16">
          <p className="text-sm text-center font-regular">
            Already an Aviso member?{" "}
            <Link to="/login" className="text-pink-500 font-semibold">Log in</Link>
          </p>

          <button className="w-full flex items-center justify-center gap-2 py-3 px-4 mt-4 text-white bg-gradient-to-b from-[#FB46E8] to-[#A82884] rounded-full shadow-md">
            <FaGoogle className="text-lg" /> Sign Up with Google
          </button>

          <p className="text-sm font-regular text-gray-500 mt-4">Or sign up using your email address</p>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="text-lg font-semibold text-[#606060]">Your Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg mt-2 outline-none" style={{ backgroundColor: "rgba(148, 215, 244, 0.28)" }}
                required
              />
            </div>

            <div>
              <label className="text-lg font-semibold text-[#606060]">Your Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
		className="w-full p-3  rounded-lg mt-2 outline-none" style={{ backgroundColor: "rgba(148, 215, 244, 0.28)" }}	
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Your Phone Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                placeholder="Enter your phone number"
		className="w-full p-3  rounded-lg mt-2 outline-none" style={{ backgroundColor: "rgba(148, 215, 244, 0.28)" }}
                required
              />
            </div>

            <div>
              <label className="text-lg font-semibold text-[#606060]">Your Phone Number <span className="text-red-500">*</span></label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="7+ Characters"
		className="w-full p-3  rounded-lg mt-2 outline-none" style={{ backgroundColor: "rgba(148, 215, 244, 0.28)" }}
                required
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4" required />
              <p className="text-sm ml-2">
                I Accept <span className="text-[#606060] font-semibold">Terms & Conditions.</span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold text-white bg-[#29ABE2] rounded-full shadow-md shadow-pink-200 cursor-pointer"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
          </form>

          <hr className="border-gray-300 my-5" />
          <p className="font-[OmnesArabic] font-regular text-xs text-[#8E8E8E] text-center mt-4 px-6 md:px-10 lg:px-24">
            I accept Aviso's <Link to="#" className="text-[#606060] font-semibold">Terms of Use</Link> and <Link to="#" className="text-[#606060] font-semibold">Privacy Notice</Link>.
            <span>Having trouble <Link to="/login">logging in?</Link> Contact help center</span>
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

export default Register;
