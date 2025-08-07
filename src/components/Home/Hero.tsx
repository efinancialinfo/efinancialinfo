import Image from "next/image";
import heroImg from "@/assets/home/hero-image.png";
import videoThumb from "@/assets/home/video-image.png";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Get Started on Your <br /> Tax Filing
          </h1>
          <p className="text-gray-600 mt-4 max-w-md">
            Expert guidance in tax preparation, notary, business filing, and
            small business consulting.
          </p>

          <button className="mt-6 bg-green-800 text-white px-6 py-3 rounded-full font-medium hover:bg-green-900 transition">
            Book an Appointment
          </button>

          {/* Video Box */}
          <div className="mt-10 bg-green-50 rounded-lg p-5 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">
                What Happens <br /> When You File With <br /> Efinancial
              </h3>
              <p className="text-[#585C67] text-sm mt-4">
                Watch how to use the platform{" "}
              </p>
            </div>
            <div className="relative w-64 h-40 rounded-lg overflow-hidden">
              <Image
                src={videoThumb}
                alt="Video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <FaPlay className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center">
          <Image
            src={heroImg}
            alt="Hero Illustration"
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
