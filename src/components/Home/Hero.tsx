import Image from "next/image";
import heroImg from "@/assets/home/hero-image.png";
import videoThumb from "@/assets/home/video-image.png";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-white py-12">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h1 className="md:text-5xl text-4xl text-gray-900 leading-[120%] font-bold text-black-900 font-inter">
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
              <h3 className="md:text-2xl text-xl font-semibold">
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
   <div className="flex justify-center relative">
  <Image
    src={heroImg}
    alt="Hero Illustration"
    className="rounded-3xl"
  />

<button
  className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-4 text-timber-green-900-main md:px-6 px-3 md:text-2xl text-base py-3 font-medium transition rounded-full border hover:bg-timber-green-800 border-timber-green-800 bg-white font-inter text-[20px] leading-[120%] text-[#182F25] hover:bg-[#182F25] hover:text-white"
>
  File My Taxes

  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-800">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M17 7H7m10 0v10" />
    </svg>
  </span>
</button>

</div>

      </div>
    </section>
  );
};

export default Hero;
