"use client";
import img1 from "@/assets/real-estate/1.png";
import img2 from "@/assets/real-estate/2.png";
import Image from "next/image";
import SmallButton from "../ui/SmallButton";
import { BsCheckCircleFill } from "react-icons/bs";
const HomeownershipHero = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div>
          <Image
            src={img1}
            alt="Homeownership Hero Image 1"
            className="w-full h-auto rounded-4xl shadow-lg"
            width={500}
            height={300}
          />
          <h1 className="text-4xl font-semibold text-[#171B26] mt-12">
            Your Path to Homeownership <br /> Starts Here
          </h1>
          <p className="text-[18px] text-[#585C67] mt-6 mb-6">
            Whether you need a trusted realtor or expert guidance as a loan
            officer, we’re here to help you find — and finance — your dream
            home.
          </p>
          <SmallButton
            text="Talk to a Realtor"
            onClick={() => console.log(`clicked!`)}
          />
        </div>
        <div>
          <Image
            src={img2}
            alt="Homeownership Hero Image 2"
            className="w-full h-auto rounded-4xl shadow-lg"
            width={500}
            height={300}
          />
          <h1 className="text-4xl font-semibold text-[#171B26] mt-12">
            Ready to Start the Pre-Approval <br /> Process
          </h1>
          <div className="mt-5">
            <p className="flex gap-2 items-center">
              {" "}
              <BsCheckCircleFill style={{ color: "#28543F" }} /> Guides
              borrowers through the loan process{" "}
            </p>
            <p className="flex gap-2 items-center">
              {" "}
              <BsCheckCircleFill style={{ color: "#28543F" }} /> Evaluates
              applications and financial documents
            </p>
            <p className="flex gap-2 items-center">
              {" "}
              <BsCheckCircleFill style={{ color: "#28543F" }} /> Recommends the
              right loan options and explains terms
            </p>
            <p className="flex gap-2 items-center">
              {" "}
              <BsCheckCircleFill style={{ color: "#28543F" }} /> Helps get loans
              approved and closed smoothly
            </p>
          </div>
          <p className="text-[18px] text-[#585C67] mt-6 mb-6 border-l-4 border-[#28543F] pl-4">
            We make financing feel simple — whether you&apos;re buying your
            first home or expanding your investments.
          </p>

          <SmallButton
            text="Talk to a Realtor"
            onClick={() => console.log(`clicked!`)}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeownershipHero;
