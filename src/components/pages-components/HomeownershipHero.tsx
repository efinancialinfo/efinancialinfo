"use client";

import Image from "next/image";
import img1 from "@/assets/real-estate/tr2.png";
import img2 from "@/assets/real-estate/tr1.png";
import { BsCheckCircleFill } from "react-icons/bs";
import Link from "next/link";

const HomeOwnershipHero = () => {
  return (
    <section className="container mx-auto px-4 mt-10 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div className="flex flex-col h-full">
          <div className="overflow-hidden rounded-2xl shadow-md aspect-w-4 aspect-h-3">
            <Image
              src={img1}
              alt="HomeOwnership Hero Image 1"
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171B26] mt-6 md:mt-10 leading-snug">
              Your Path to HomeOwnership Starts Here
            </h1>

            <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[#585C67] mt-4 md:mt-6 leading-relaxed">
              Whether you need a trusted realtor or expert guidance as a loan
              officer, we&apos;re here to help you find — and finance — your
              dream home.
            </p>

            <Link href={"/book-appointment"}>
              <button className="w-full sm:w-fit mt-6 md:mt-9 bg-green-800 text-white px-6 py-3 rounded-full font-medium border-2 border-green-800 transition-all duration-300 ease-in-out hover:bg-white hover:text-green-800">
                Talk to a Realtor
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col h-full">
          <div className="overflow-hidden rounded-2xl shadow-md aspect-w-4 aspect-h-3">
            <Image
              src={img2}
              alt="HomeOwnership Hero Image 2"
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171B26] mt-6 md:mt-10 leading-snug">
              Ready to Start the Pre-Approval Process
            </h1>

            <div className="mt-4 md:mt-6 space-y-3 text-[#333] text-sm sm:text-base">
              {[
                "Guides borrowers through the loan process",
                "Evaluates applications and financial documents",
                "Recommends the right loan options and explains terms",
                "Helps get loans approved and closed smoothly",
              ].map((text, idx) => (
                <p className="flex items-start gap-2" key={idx}>
                  <BsCheckCircleFill className="text-[#28543F] mt-1 shrink-0" />
                  {text}
                </p>
              ))}
            </div>

            <Link href={"/book-appointment"}>
              <button className="w-full sm:w-fit mt-6 md:mt-9 bg-green-800 text-white px-6 py-3 rounded-full font-medium border-2 border-green-800 transition-all duration-300 ease-in-out hover:bg-white hover:text-green-800">
                Talk to a Loan Officer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOwnershipHero;
