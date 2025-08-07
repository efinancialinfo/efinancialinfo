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
    <section className="bg-white py-16 ">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-5xl font-bold text-gray-900 mb-15">
          Services Overview
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-sm hover:bg-[var(--primary-color)] bg-[var(--soft-color)] transition duration-200 text-[#171B26] hover:text-white"
            >
              <h3 className="font-semibold text-2xl">{service.title}</h3>
              <p className={`mt-2 text-sm hover:text-white}`}>
                {service.description}
              </p>

              {/* Image */}
              <div className="mt-4 flex justify-center w-60 h-44 bg-white rounded-lg">
                <Image
                  src={service.image}
                  width={218}
                  height={180}
                  alt="Service Image"
                  className="rounded-lg"
                />
              </div>

              {/* Button */}
              <button
                className={`mt-4 w-full border px-4 py-2 rounded-full text-sm font-medium transition border-white bg-white text-[var(--primary-color)] hover:bg-white cursor-pointer hover:text-[var(--primary-color)]`}
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
