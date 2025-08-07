import { BsCheckCircleFill } from "react-icons/bs";
import img from "@/assets/consulting-page/3.png";
import Image from "next/image";
const OperationsSystemsSetup = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center grid-col-reverse">
          <div className="relative">
            <Image
              src={img}
              alt="Business Strategy Planning"
              className="w-full h-auto rounded-2xl shadow-lg"
              width={555}
              height={610}
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Operations & Systems <br /> Setup
            </h2>

            <div className="space-y-4 text-gray-600">
              <p className="flex gap-2 items-center">
                {" "}
                <BsCheckCircleFill style={{ color: "#28543F" }} /> Streamline
                your day-to-day with better tools and workflows
              </p>
              <p className="flex gap-2 items-center">
                {" "}
                <BsCheckCircleFill style={{ color: "#28543F" }} /> Recommend
                software and automations that save time
              </p>
              <p className="flex gap-2 items-center">
                {" "}
                <BsCheckCircleFill style={{ color: "#28543F" }} /> Help build
                efficient systems for booking, sales, and client management
              </p>
            </div>
            <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)] cursor-pointer text-white px-6 py-3 rounded-md">
              Identify Your Workflow Gaps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSystemsSetup;
