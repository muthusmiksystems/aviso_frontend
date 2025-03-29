import { useSelector } from "react-redux";
import Images from "../../assets/images/Image";
import { Img } from "../../components/common/Img";
import { useNavigate } from "react-router-dom";

const WhyChoiceUs = () => {
  const { user } = useSelector((state) => state.auth);
  const naviagate = useNavigate();
  const handleclick = () => {
    if (user) {
      naviagate("/jobuniverse");
    } else {
      naviagate("/login");
    }
  };
  const features = [
    {
      icon: Images.WhyChoice1,
      title: "Extensive Job Knowledge",
      description:
        " Lorem ipsum dolor sit amet consectetur. Laoreet ac leo massa sit id. Pellentesque in eget tellus adipiscing amet. Porttitor sodales orci eget nisl semper enim ac morbi.",
    },
    {
      icon: Images.WhyChoice2,
      title: "Global User Interface",
      description:
        "Lorem ipsum dolor sit amet consectetur. At nam magnis lobortis diam mauris. Habitant quam non magna diam sit nibh tellus. Dui non ultrices ut at sed amet dolor et.",
    },
    {
      icon: Images.WhyChoice3,
      title: "Custom Job Types Recommendations",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquam vulputate vel lorem quisque viverra eget at vestibulum. Sit est orci in tristique.",
    },
    {
      icon: Images.WhyChoice4,
      title: "Innovative Technology",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque mauris donec ut pharetra mauris quis nulla. Felis aenean lacinia orci urna nulla.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-16 bg-[#ffff] font-[OmnesArabic]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 ">
        <div className="grid sm:grid-cols-2 gap-[55px]">
          {features.map((feature, index) => (
            <div key={index} className="">
              <div className=" flex space-x-4 items-center justify-start lg:justify-center  text-white  text-xl">
                <Img
                  src={feature.icon}
                  alt="test"
                  className="w-[56px] h-[56px]"
                />
                <h6 className="font-semibold text-[20px]  font-semibold text-gray-900">
                  {feature.title}
                </h6>
              </div>
              <div>
                <p className="text-gray-600 text-base text-[16px] leading-[24px] font-regular text-justify mt-3">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <h2 className="text-[48px] font-semibold text-gray-900 leading-tight">
            Empowering Careers, One Choice at a Time
          </h2>
          <p className="mt-4 text-gray-600 font-regular text-base text-justify">
            Lorem ipsum dolor sit amet consectetur. Mauris tincidunt viverra
            amet id enim mauris non sagittis a. Pellentesque id imperdiet nunc
            volutpat lobortis urna turpis. Nam volutpat morbi enim gravida amet
            et porttitor lacus mi. Ultrices eget volutpat ornare mi sed vitae
            lorem. Lectus dictum elit ipsum ipsum.
          </p>
          <button
            className="mt-6 px-6 py-3 border-2 border-[#57B3D3] text-[#57B3D3] font-semibold text-lg rounded-full hover:bg-[#57B3D3] hover:text-white transition-all"
            onClick={handleclick}
          >
            Get Started and Track your Career Path
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoiceUs;
