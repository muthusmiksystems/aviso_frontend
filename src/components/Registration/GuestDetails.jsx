import React, { useState } from "react";
import { FaUser, FaPhone, FaCity, FaMapMarkerAlt, FaFeather, FaBuilding, FaFlagCheckered, FaTransgender } from "react-icons/fa";
import { MdEmail, MdFlag, MdCalendarToday, MdWork } from "react-icons/md";
import { IoIosMale, IoIosFemale } from "react-icons/io";
import { BsUpload } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import { FaHandFist } from "react-icons/fa6";
import { ImLeaf } from "react-icons/im";

const GuestDetails = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    birthDate: "",
    gender: "",
    address: "",
    position: "",
    additionalInfo: "",
    image: null,
  });

  const [isFocused, setIsFocused] = useState({
    firstName: false,
    lastName: false,
    email: false,
    mobile: false,
    country: false,
    city: false,
    birthDate: false,
    address: false,
    position: false,
    additionalInfo: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormValue((prev) => ({ ...prev, image: file }));
    }
  };

  const handleFocus = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
  };


  const handleBlur = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: formValue[field] !== "" }));
  };
  return (

    <>
      <p className="text-gray-700 text-end font-semibold">Step 2</p>


      <h1 className="text-3xl font-bold text-gray-900 text-center mt-2">
        Please Fill in your details
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <tbody>
            <tr>
              <td className="px-3 py-4">
                <div className="relative">
                  {(isFocused.firstName || formValue.firstName) && (
                    <label className="absolute -top-3 left-3 bg-[#29ABE2] text-white text-xs px-2 py-1 rounded-lg transition-all">
                      First Name
                    </label>
                  )}
                  <div className="bg-white shadow-lg flex items-center  p-3 focus-within:border border-[#29ABE2] ">
                    <FaUser className={`${isFocused.firstName ? 'text-[#29ABE2]' : 'text-gray-400'} mr-3`} />

                    <input
                      type="text"
                      name="firstName"
                      value={formValue.firstName}
                      onFocus={() => handleFocus("firstName")}
                      onBlur={() => handleBlur("firstName")}
                      onChange={handleInputChange}
                      placeholder={!isFocused.firstName && !formValue.firstName ? "First Name" : ""}
                      className="w-full outline-none text-gray-600"
                    />
                  </div>
                </div>
              </td>


              <td className="p-3">
                <div className="relative">
                  {(isFocused.lastName || formValue.lastName) && (
                    <label className="absolute -top-3 left-3 bg-[#29ABE2] text-white text-xs px-2 py-1 rounded-lg transition-all">
                      Last Name
                    </label>
                  )}

                  <div className="bg-white shadow-lg flex items-center  p-3 focus-within:border border-[#29ABE2]">
                    <FaUser className={`${isFocused.lastName ? 'text-[#29ABE2]' : 'text-gray-400'} mr-3`} />
                    <input
                      type="text"
                      name="lastName"
                      value={formValue.lastName}
                      onFocus={() => handleFocus("lastName")}
                      onBlur={() => handleBlur("lastName")}
                      onChange={handleInputChange}
                      placeholder={!isFocused.lastName && !formValue.lastName ? "Last Name" : ""}
                      className="w-full outline-none text-gray-600"
                    />
                  </div>
                </div>
              </td>
              <td className="p-3">
                <div className="relative">
                  {(isFocused.email || formValue.email) && (
                    <label className="absolute -top-3 left-3 bg-[#29ABE2] text-white text-xs px-2 py-1 rounded-lg transition-all">
                      Email
                    </label>
                  )}

                  <div className="bg-white shadow-lg flex items-center  p-3 focus-within:border border-[#29ABE2]">
                    <MdEmail className={`${isFocused.email ? 'text-[#29ABE2]' : 'text-gray-400'} mr-3`} />
                    <input
                      type="email"
                      name="email"
                      value={formValue.email}
                      onFocus={() => handleFocus("email")}
                      onBlur={() => handleBlur("email")}
                      onChange={handleInputChange}
                      placeholder={!isFocused.email && !formValue.email ? "Email" : ""}
                      className="w-full outline-none text-gray-600"
                    />
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td className="p-3">
                <div className="relative">
                  {(isFocused.mobile || formValue.mobile) && (
                    <label className="absolute -top-3 left-3 bg-[#29ABE2] text-white text-xs px-2 py-1 rounded-lg transition-all">
                      Mobile No:
                    </label>
                  )}

                  <div className="bg-white shadow-lg flex items-center  p-3 focus-within:border border-[#29ABE2]">
                    <FaPhone className={`${isFocused.mobile ? 'text-[#29ABE2]' : 'text-gray-400'} mr-3`} />
                    <input
                      type="text"
                      name="mobile"
                      value={formValue.mobile}
                      onFocus={() => handleFocus("mobile")}
                      onBlur={() => handleBlur("mobile")}
                      onChange={handleInputChange}
                      placeholder={!isFocused.mobile && !formValue.mobile ? "Phone" : ""}
                      className="w-full outline-none text-gray-600"
                    />
                  </div>
                </div>
              </td>
              <td className="p-3" colSpan={2}>
                <div className="relative">
                  {(isFocused.country || formValue.country) && (
                    <label className="absolute -top-3 left-3 bg-[#29ABE2] text-white text-xs px-2 py-1 rounded-lg transition-all">
                      Country
                    </label>
                  )}
                  <div className="bg-white shadow-lg flex items-center  p-2 focus-within:border border-[#29ABE2]">
                    <FaFlagCheckered className={`${isFocused.country ? 'text-[#29ABE2]' : 'text-gray-400'} mr-3`} />
                    <select
                      name="country"
                      value={formValue.country}
                      onFocus={() => handleFocus("country")}
                      onBlur={() => handleBlur("country")}
                      onChange={handleInputChange}
                      className="w-full outline-none text-gray-500"
                    >
                      <option value="">Select Country</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="india">India</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td className="p-3">
                <div className="relative">
                  {(isFocused.city || formValue.city) && (
                    <label className="absolute -top-3 left-3 bg-[#29ABE2] text-white text-xs px-2 py-1 rounded-lg transition-all">
                      City
                    </label>
                  )}
                  <div className="bg-white shadow-lg flex items-center  p-2 focus-within:border border-[#29ABE2]">
                    <FaHandFist className={`${isFocused.city ? 'text-[#29ABE2]' : 'text-gray-400'} mr-3`} />
                    <select
                      name="city"
                      value={formValue.city}
                      onFocus={() => handleFocus("city")}
                      onBlur={() => handleBlur("city")}
                      onChange={handleInputChange}
                      className="w-full outline-none text-gray-500"
                    >
                      <option value="" className="">Select City</option>
                      <option value="tamilnadu">Tamilnadu</option>
                    </select>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <div className="relative">
                  {(isFocused.birthDate || formValue.birthDate) && (
                    <label className="absolute -top-3 left-3 bg-[#29ABE2] text-white text-xs px-2 py-1 rounded-lg transition-all">
                      Birth Date
                    </label>
                  )}
                  <div className="flex items-center bg-white shadow-lg  p-2 focus-within:border border-[#29ABE2]">
                    <GrAnnounce className={`${isFocused.birthDate ? 'text-[#29ABE2]' : 'text-gray-400'} mr-3`} />
                    <input
                      type="date"
                      name="birthDate"
                      value={formValue.birthDate}
                      onFocus={() => handleFocus("birthDate")}
                      onBlur={() => handleBlur("birthDate")}
                      onChange={handleInputChange}
                      className="w-full outline-none text-gray-500"
                    />
                  </div>
                </div>
              </td>


              <td className="p-3" rowSpan={2}>
                <div className="bg-white shadow-lg  gap-4">
                  <div className="flex items-center justify-center">
                    <FaTransgender className={`${formValue.gender ? 'text-[#29ABE2]' : 'text-gray-400'} mr-3`} />
                    <h2 className="p-3 text-gray-600 font-semibold">Gender</h2>
                  </div>

                  <div className="p-4 flex items-center justify-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formValue.gender === "male"}
                        onChange={handleInputChange}
                        className="hidden peer"
                      />
                      <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[#29ABE2]">
                        <div className="w-3 h-3 bg-gray-400 rounded-full peer-checked:bg-[#29ABE2]"></div>
                      </div>
                      Male
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formValue.gender === "female"}
                        onChange={handleInputChange}
                        className="hidden peer"
                      />
                      <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[#29ABE2]">
                        <div className="w-3 h-3 bg-gray-400 rounded-full peer-checked:bg-[#29ABE2]"></div>
                      </div>
                      Female
                    </label>
                  </div>
                </div>
              </td>
            </tr>

            <tr>

              <td className="p-3">
                <div className="relative">
                  {(isFocused.address || formValue.address) && (
                    <label className="absolute -top-3 left-3 bg-[#29ABE2] text-white text-xs px-2 py-1  transition-all">
                      Address
                    </label>
                  )}
                  <div className="flex items-center bg-white shadow-lg  p-2 focus-within:border border-[#29ABE2]">
                    <FaMapMarkerAlt className={`${isFocused.address ? 'text-[#29ABE2]' : 'text-gray-400'} mr-3`} />
                    <input
                      type="text"
                      name="address"
                      value={formValue.address}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus("address")}
                      onBlur={() => handleBlur("address")}
                      placeholder={!isFocused.address && !formValue.address ? "Address" : ""}
                      className="w-full outline-none text-gray-600"
                    />
                  </div>
                </div>
              </td>

              <td className="p-3">
                <div className="relative">
                  {(isFocused.position || formValue.position) && (
                    <label className="absolute -top-3 left-3 bg-[#29ABE2] text-white text-xs px-2 py-1 rounded-lg transition-all">
                      Position
                    </label>
                  )}
                  <div className="flex items-center bg-white shadow-lg p-2 focus-within:border border-[#29ABE2]">
                    <MdWork className={`${isFocused.position ? 'text-[#29ABE2]' : 'text-gray-400'} mr-3`} />
                    <select
                      name="position"
                      value={formValue.position}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus("position")}
                      onBlur={() => handleBlur("position")}
                      className="w-full outline-none text-gray-600"
                    >
                      <option value="">Choose Position</option>
                      <option value="developer">Software Developer</option>
                      <option value="designer">UI/UX Designer</option>
                      <option value="manager">Project Manager</option>
                      <option value="analyst">Business Analyst</option>
                    </select>
                  </div>
                </div>
              </td>

            </tr>
            <tr>

              <td colSpan={3} className="p-3">
                <div className="relative">
                  {(isFocused.additionalInfo || formValue.additionalInfo) && (
                    <label className="absolute -top-3 left-3 bg-[#29ABE2] text-white text-xs px-2 py-1  transition-all">
                      Additional Info
                    </label>
                  )}
                  <div className="flex items-center bg-white shadow-lg  p-2 focus-within:border border-[#29ABE2] h-24">
                    <ImLeaf className={`${isFocused.additionalInfo ? 'text-[#29ABE2]' : 'text-gray-400'} mr-3`} />
                    <textarea
                      name="additionalInfo"
                      value={formValue.additionalInfo}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus("additionalInfo")}
                      onBlur={() => handleBlur("additionalInfo")}
                      placeholder={!isFocused.additionalInfo && !formValue.additionalInfo ? "Additional Info" : ""}
                      className="w-full outline-none"
                    ></textarea>
                  </div>
                </div>
              </td>

            </tr>

            <tr>

              <td></td>
              <td colSpan={2} className="p-3">
                <div className="flex items-center gap-4 bg-white shadow-lg p-3">
                  <BsUpload className={`${formValue.image ? 'text-[#29ABE2]' : 'text-gray-400'} mr-3`} />
                  <span className="text-gray-600">{formValue.image ? formValue.image.name : "Add your Image"}</span>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="imageUpload"
                  />
                  <label htmlFor="imageUpload" className="ml-auto bg-[#29ABE2] text-white px-6 py-2 rounded-full cursor-pointer">
                    Browse
                  </label>
                </div>
              </td>

            </tr>
            <tr>
              <td></td>
              <td colSpan={2} className="p-3 text-sm text-gray-500">
                Only: pdf, jpg, png, doc. Size: less than 1Mb
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>{`
        @media (max-width: 720px) {
          .table-auto {
            display: block;
            overflow-x: auto;
            padding:0px 150px;
          }
          td {
            display: block;
            width: 100%;
            margin: 0 0 1rem 0;
          }
        }
          @media (max-width: 550px) {
          .table-auto {
            display: block;
            overflow-x: auto;
            padding:0px 10px;
          }
            td {
            display: block;
            width: 100%;
            margin: 0 0 1rem 0;
          }
      }
      `}</style>
    </>
  );
};

export default GuestDetails;

