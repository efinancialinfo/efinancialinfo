import Image from "next/image";
import icon1 from "@/assets/tax-preparation/1.svg";
import icon2 from "@/assets/tax-preparation/2.svg";
import icon3 from "@/assets/tax-preparation/3.svg";

const CommitmentToExcellence = () => {
  const features = [
    {
      icon: icon1,
      label: "Over 5+ Years of Tax Experience",
    },
    {
      icon: icon2,
      label: "Authorized IRS e-file Providers",
    },
    {
      icon: icon3,
      label: "Fast, Accurate, and Secure Process",
    },
  ];

  return (
    <section className="bg-[#edf7f4] py-16 mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#1a1a1a] mb-12">
          OUR COMMITMENT TO EXCELLENCE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white w-full max-[370px] h-[278px] mx-auto rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-[#1f4e3d] p-4 rounded-full mb-6">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-base sm:text-xl font-semibold text-[#1a1a1a]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentToExcellence;
