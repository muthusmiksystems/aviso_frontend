import Images from "../../assets/images/Image";
import { Img } from "../../components/common/Img";

const Clients = () => (
  <footer className="bg-[#ffff] py-8  mx-auto font-[OmnesArabic]">
    <div className="text-center w-auto  max-w-4xl mx-auto">
      <p className="text-[#000000] text-[20px] md:text-xl font-semibold">
        TRUSTED BY THE WORLD'S{" "}
        <span className="text-[#24A1DD]">BIGGEST EDUCATIONAL INSTITUTES</span>
      </p>
      <div className="flex justify-between mt-6 px-8 md:px-6 place-items-center xl:gap-10 gap-6 overflow-x-auto overflow-x-scroll lg:overflow-x-hidden ">
        <Img
          src={Images.Client1}
          alt="Client 1"
          className="w-24 md:w-32 h-auto"
        />
        <Img
          src={Images.Client2}
          alt="Client 2"
          className="w-24 md:w-32 h-auto"
        />
        <Img
          src={Images.Client3}
          alt="Client 3"
          className="w-24 md:w-32 h-auto"
        />
        <Img
          src={Images.Client4}
          alt="Client 4"
          className="w-24 md:w-32 h-auto"
        />
        <Img
          src={Images.Client5}
          alt="Client 5"
          className="w-24 md:w-64 h-auto"
        />
      </div>
    </div>
  </footer>
);

export default Clients;
