"use client";

import Image from "next/image";
import individualImage from "@/assets/tax-preparation/individual-docs.png"; // Replace with actual image
import businessImage from "@/assets/tax-preparation/business-docs.png"; // Replace with actual image
import { FaCheckCircle } from "react-icons/fa";

const WhatDocuments = () => {
  return (
    <section className="bg-[#f1f9f6] py-16 mt-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12">
          WHAT DOCUMENTS DO I NEED?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Individual Card */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md flex flex-col h-full">
            <div className="flex justify-center mb-6">
              <Image
                src={individualImage}
                alt="Individual Document Illustration"
                className="w-full max-w-[500px] h-auto"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl text-left font-bold mb-4 text-[#1a1a1a]">
              Individual
            </h3>
            <ul className="text-left space-y-3 text-[15px] text-[#333]">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                ID and Social Security
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                <div>
                  Income Documents
                  <ul className="ml-6 list-disc text-[14px] mt-1 text-gray-700">
                    <li>W2</li>
                    <li>1099s</li>
                    <li>Others</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                Deduction & Credit Documents
              </li>
            </ul>
          </div>

          {/* Business Card */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md flex flex-col h-full">
            <div className="flex justify-center mb-6">
              <Image
                src={businessImage}
                alt="Business Document Illustration"
                className="w-full max-w-[500px] h-auto"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl text-left font-bold mb-4 text-[#1a1a1a]">
              Business
            </h3>
            <ul className="text-left space-y-3 text-[15px] text-[#333]">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                Profit & Loss Statements
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                Payroll Records
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                Business License or EIN
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDocuments;
