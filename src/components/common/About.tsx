import React from "react";
import Image from "next/image";
import Img from "@/assets/Group.png"


export default function Component() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Mission
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                To simplify the financial lives of our clients by delivering expert, 
                transparent, and supportive services tailored to their individual 
                and business needs.
              </p>
              
              <p>
                With a focus on tax preparation, notary services, business filings, 
                and small business consulting, we provide the tools, expertise, 
                and support you need to make confident financial and business 
                decisions — all in one place.
              </p>
            </div>
            
            <button 
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Get Started
            </button>
          </div>
          
          {/* Image */}
          <div className="relative flex justify-end items-center">
            <div className="relative w-full max-w-md">
              <Image 
                src={Img}
                alt="Mission illustration showing a person with charts and business elements"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
