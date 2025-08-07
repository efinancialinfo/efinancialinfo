
import Image from "next/image";
import illustration from "@/assets/tax-preparation/tax-service-illustration.png";
import { FaCheckCircle } from "react-icons/fa";

const TaxServiceSpecialties = () => {
  return (
    <section className="py-20 bg-white max-w-7xl mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left: Illustration */}
        <div className="flex justify-center">
          <Image
            src={illustration}
            alt="Tax service illustration"
            width={555}
            height={455}
            className="rounded-xl"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
            TAX SERVICE SPECIALTIES
          </h2>
          <ul className="space-y-4 text-[#333] text-base">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              Individuals with simple or complex tax needs
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              Freelancers, contractors, and gig workers
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              Small business owners, startups, and S-Corps
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              Anyone looking for smarter tax-saving strategies
            </li>
          </ul>

          <button className="mt-6 px-6 py-3 bg-[#1e4d2b] text-white rounded-full font-medium hover:bg-[#163b20] transition duration-200">
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaxServiceSpecialties;
