import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Images from "../../assets/images/Image";
import CustomButton from "../../components/common/Button";

export default function CommunitySection() {
  return (
    <section className="mb-32 md:mb-24">
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div className="text-center md:text-end">
          <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#FB46E8] to-[#A82884] font-semibold text-xl uppercase tracking-wider">
            Community
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold my-8">
            Our Community
          </h2>
          <p className="text-[#29ABE2] font-semibold text-xl ">
            “ imperdi eleifend adipiscing facilisis arcu pharetra ”
          </p>
          <p className="text-[#606060] text-md leading-lg mt-8">
            Ultrices congue eget amet, elit, porttitor sed maecenas consectetur.
            Nunc, sem imperdiet ultrices sed eleifend adipiscing facilisis arcu
            pharetra. Cras nibh egestas neque integer. Vel ultrices fusce dolor
            laoreet lacus, leo dignissim. Sollicitudin quam tortor integer.
            Vehicula dignissim aenean nec, pulvinar. Quam velit purus
          </p>
          <span>
            <CustomButton className="bg-gradient-to-b from-[#FF47ED] to-[#992B8E] text-white shadow-lg mt-6 px-20 py-2  text-md text-white sm:text-md font-bold">
              Learn More
            </CustomButton>
          </span>

          {/* <button className=" bg-[#29ABE2] text-white rounded-full shadow-lg hover:bg-blue-600">
            Learn More
          </button> */}
        </div>

        <div className="relative">
          <img
            src={Images.Teamcover}
            alt="Students"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-45 md:-bottom-30 lg:-bottom-45  left-[12vh] sm:left-[18vh] md:left-[12vh] ld:left-[23vh] bg-white/30 backdrop-blur-lg p-6 rounded-lg  w-3/4 mx-auto z-10">
            <p className="text-sm  bg-clip-text text-white font-semibold z-10">
              Students across the glope
            </p>
            <h3 className="text-3xl font-bold text-black py-2">1,030,500</h3>
            <p className="text-gray-700 text-sm mt-2">
              Ultrices congue eget amet, elit, porttitor sed maecenas
              consectetur. Nunc, sem imperdiet ultrices sed eleifend adipiscing
              facilisis arcu pharetra. Cras nibh egestas neque integer. Vel
              ultrices fusce dolor laoreet lacus, leo dignissim. Sollicitudin
              quam tortor integer. Vehicula dignissim aenean nec, pulvinar. Quam
              velit purus
            </p>
            <div className="flex gap-8 mt-4 text-xl text-black">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
