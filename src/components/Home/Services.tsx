import Image from "next/image";
import taxImg from "@/assets/home/tax-preparation.png";
import notaryImg from "@/assets/home/notary-service.png";
import businessImg from "@/assets/home/business-filing.png";
import consultingImg from "@/assets/home/business-consult.png";

const services = [
  {
    title: (
      <>
        Tax Preparation <br /> & Strategy
      </>
    ),
    description: (
      <>
        Accurate filing and expert <br /> strategies to save you money
      </>
    ),
    image: taxImg,
    active: false,
  },
  {
    title: (
      <>
        Notary <br /> Services
      </>
    ),
    description: (
      <>
        Certified notary services with <br /> flexible scheduling.
      </>
    ),
    image: notaryImg,
    active: true,
  },
  {
    title: (
      <>
        Business <br /> Filing
      </>
    ),
    description: (
      <>
        Start or grow your business with <br /> full compliance.
      </>
    ),
    image: businessImg,
    active: false,
  },
  {
    title: "Small Business Consulting",
    description: (
      <>
        Get strategic advice to take <br /> your business forward.
      </>
    ),
    image: consultingImg,
    active: false,
  },
];

const Services = () => {
  return (
    <section className="bg-white py-12 container">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
          Services Overview
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                p-6 shadow-sm text-[#171B26] 
                transition-colors duration-300 ease-in-out 
                hover:bg-[var(--primary-color)] 
                hover:scale-[1.03] transform-gpu
                border-[#EBEBEB] bg-[#F2F8F3]
                rounded-[25px] border border-white/10 bg-white/10
                flex flex-col hover:text-white
              "
            >
              <h3 className="font-semibold text-[#171B26] hover:text-white text-xl sm:text-2xl text-center sm:text-left transition-colors duration-300 ease-in-out">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-center sm:text-left text-[#585C67] transition-colors duration-300 ease-in-out">
                {service.description}
              </p>

              <div className="mt-4 flex justify-center items-center bg-white rounded-lg w-full h-40 sm:h-44">
                <Image
                  src={service.image}
                  alt="Service Image"
                  width={218}
                  height={180}
                  className="object-contain"
                />
              </div>

              {/* Push button to bottom */}
              <button
                className="
                  mt-auto border px-4 py-2 rounded-full text-sm font-medium 
                  transition-colors duration-300 ease-in-out
                  border-[#28543F] bg-white text-[var(--primary-color)] 
                  hover:bg-white hover:text-[var(--primary-color)]
                "
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
