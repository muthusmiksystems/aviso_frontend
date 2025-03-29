import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import Images from "../../assets/images/Image";
import CustomButton from "../../components/common/Button";

export default function CommunitySection() {
  return (
    <section className="mb-32 md:mb-24">
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div className="text-center md:text-end">
          <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#FB46E8] to-[#A82884] font-semibold text-[24px] uppercase tracking-wider">
            Community
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[64px] font-semibold my-8">
            Our Community
          </h2>
          <p className="text-[#29ABE2] font-semibold text-[24px] ">
            “ imperdi eleifend adipiscing facilisis arcu pharetra ”
          </p>
          <p className="text-[#606060] text-[16px] leading-loose mt-8  ps-20">
            Ultrices congue eget amet, elit, porttitor sed maecenas consectetur.
            Nunc, sem imperdiet ultrices sed eleifend adipiscing facilisis arcu
            pharetra. Cras nibh egestas neque integer. Vel ultrices fusce dolor
            laoreet lacus, leo dignissim. Sollicitudin quam tortor integer.
            Vehicula dignissim aenean nec, pulvinar. Quam velit purus
          </p>
          <span>
            <CustomButton className="bg-gradient-to-b from-[#FF47ED] to-[#992B8E] text-white shadow-lg mt-6 px-18 py-3  text-[18px] text-white sm:text-md font-semibold drop-shadow-lg">
              Learn More
            </CustomButton>
          </span>
        </div>

        <div className="relative mb-18 md:mb-0">
          <img
            src={Images.Teamcover}
            alt="Students"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-45 md:-bottom-10 lg:-bottom-20 xl:-bottom-44  left-[9vh] sm:left-[18vh] md:left-[12vh] ld:left-[25vh] bg-white/30 backdrop-blur-lg p-6 rounded-lg  w-3/4 mx-auto z-10">
            <p className="text[14px]  bg-clip-text text-white font-semibold z-10">
              Students across the globe
            </p>
            <h3 className="text-2xl sm:text-[3xl] md:text-[40px] font-semibold text-black py-2">
              1,030,500
            </h3>
            <p className="text-[#606060] text-[10px] sm:text-[12px] md:text-[16px] lg:text-[16px] leading-normal">
              Ultrices congue eget amet, elit, porttitor sed maecenas
              consectetur. Nunc, sem imperdiet ultrices sed eleifend adipiscing
              facilisis arcu pharetra. Cras nibh egestas neque integer. Vel
              ultrices fusce dolor laoreet lacus, leo dignissim. Sollicitudin
              quam tortor integer. Vehicula dignissim aenean nec, pulvinar. Quam
              velit purus
            </p>
            <div className="flex gap-8 mt-4 text-xl text-black">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
              <FaYoutube />
              <FaTwitch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
