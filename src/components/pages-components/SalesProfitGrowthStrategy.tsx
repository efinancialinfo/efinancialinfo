import { BsCheckCircleFill } from "react-icons/bs";
import img from "@/assets/consulting-page/2.png";
import Image from "next/image";

const SalesProfitGrowthStrategy = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Sales & Profit Growth <br /> Strategy
            </h2>

            <div className="space-y-4 text-gray-600">
              <p className="flex gap-2 items-center">
                {" "}
                <BsCheckCircleFill style={{ color: "#28543F" }} /> Review your
                pricing, offers, and revenue streams
              </p>
              <p className="flex gap-2 items-center">
                {" "}
                <BsCheckCircleFill style={{ color: "#28543F" }} /> Create a
                step-by-step sales process to attract and convert clients
              </p>
              <p className="flex gap-2 items-center">
                {" "}
                <BsCheckCircleFill style={{ color: "#28543F" }} /> Align Your
                Marketing Efforts With Sales and Client Retention
              </p>
            </div>
            <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)] cursor-pointer text-white px-6 py-3 rounded-md">
              Discuss Your Sales Challenges
            </button>
          </div>
          <div className="relative">
            <Image
              src={img}
              alt="Business Strategy Planning"
              className="w-full h-auto rounded-2xl shadow-lg"
              width={555}
              height={610}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesProfitGrowthStrategy;
