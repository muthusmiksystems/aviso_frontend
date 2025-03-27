import Images from "../../assets/images/Image";
import { Img } from "../../components/common/Img";

const WhyChoiceUs = () => {
    const features = [
        {
            icon: Images.WhyChoice1,
            title: "Extensive Job Knowledge",
            description:
                "Lorem ipsum dolor sit amet consectetur. Laoreet ac leo massa sit id. Pellentesque in eget tellus adipiscing amet.",
        },
        {
            icon: Images.WhyChoice2,
            title: "Global User Interface",
            description:
                "Lorem ipsum dolor sit amet consectetur. At nam magnis lobortis diam mauris. Habitnat quam non magna diam sit nibh.",
        },
        {
            icon: Images.WhyChoice3,
            title: "Custom Job Types Recommendations",
            description:
                "Lorem ipsum dolor sit amet consectetur. Aliquam vulputate vel lorem quisque viverra eget at vestibulum.",
        },
        {
            icon: Images.WhyChoice4,
            title: "Innovative Technology",
            description:
                "Lorem ipsum dolor sit amet consectetur. Scelerisque mauris donec ut pharetra mauris quis nulla.",
        },
    ];

    return (
        <section className="py-16 px-6 md:px-16 bg-[#ffff] font-[OmnesArabic]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="grid sm:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="">
                            <div className=" flex space-x-4 items-center justify-start lg:justify-center  text-white  text-xl">
                                <Img src={feature.icon} alt="test" />
                                <h6 className="font-semibold text-xl text-gray-900">{feature.title}</h6>
                            </div>
                            <div>

                                <p className="text-gray-600 text-base font-regular text-justify mt-3">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="text-5xl font-semibold text-gray-900 leading-tight">
                        Empowering Careers, One Choice at a Time
                    </h2>
                    <p className="mt-4 text-gray-600 font-regular text-base text-justify">
                    Lorem ipsum dolor sit amet consectetur. Mauris tincidunt viverra amet id enim mauris non sagittis a. Pellentesque id imperdiet nunc volutpat lobortis urna turpis. Nam volutpat morbi enim gravida amet et porttitor lacus mi. Ultrices eget volutpat ornare mi sed vitae lorem. Lectus dictum elit ipsum ipsum.
                    </p>
                    <button className="mt-6 px-6 py-3 border-2 border-[#57B3D3] text-[#57B3D3] font-semibold text-lg rounded-full hover:bg-[#57B3D3] hover:text-white transition-all">
                        Get Started and Track your Career Path
                    </button>
                </div>


            </div>
        </section>
    );
};

export default WhyChoiceUs;
