import Images from "../../assets/images/Image";
import { Img } from "../../components/common/Img";

const Clients = () => (
  <footer className="bg-[#ffff] py-8  mx-auto border-b-1 border-grey-300">
    <div className="text-center w-auto  max-w-4xl mx-auto">
      <p className="text-gray-600 text-lg md:text-xl font-semibold">
        TRUSTED BY THE WORLD'S <span className="text-blue-500">BIGGEST EDUCATIONAL INSTITUTES</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 mt-6 px-4 md:px-6 place-items-center">
        <Img src={Images.Client1} alt="Client 1" className="w-24 md:w-32 h-auto" />
        <Img src={Images.Client2} alt="Client 2" className="w-24 md:w-32 h-auto" />
        <Img src={Images.Client3} alt="Client 3" className="w-24 md:w-32 h-auto" />
        <Img src={Images.Client4} alt="Client 4" className="w-24 md:w-32 h-auto" />
        <Img src={Images.Client5} alt="Client 5" className="w-24 md:w-32 h-auto" />
      </div>
    </div>
  </footer>
);

export default Clients;
