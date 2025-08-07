import img from "@/assets/consulting-page/1.png";
import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

const BusinessStrategyPlanning = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Business Strategy &<br />
              Planning
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                Get clear, actionable guidance to drive your business forward
                with purpose and clarity.
              </p>
              <p className="flex gap-2 items-center">
                {" "}
                <BsCheckCircleFill style={{ color: "#28543F" }} /> Create a
                clear, realistic roadmap tailored to your goals
              </p>
              <p className="flex gap-2 items-center">
                {" "}
                <BsCheckCircleFill style={{ color: "#28543F" }} /> Identify
                opportunities to grow, improve, or pivot
              </p>
              <p className="flex gap-2 items-center">
                {" "}
                <BsCheckCircleFill style={{ color: "#28543F" }} /> ISupport with
                business plans, vision mapping, or funding prep
              </p>
            </div>
            <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)] cursor-pointer text-white px-6 py-3 rounded-md">
              Start Your Business Plan
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

export default BusinessStrategyPlanning;
