import Image from "next/image";
import icon1 from "@/assets/real-estate/Icon.png";
import icon3 from "@/assets/real-estate/3.png";
import icon5 from "@/assets/real-estate/5.svg";
import icon7 from "@/assets/real-estate/icon7.png";
import icon4 from "@/assets/real-estate/4.png";
export default function BuyingProcessWorks() {
  return (
    <div className="bg-[var(--soft-color)] min-h-screen py-16 px-4 mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-20">
          How the Home Buying Process Works
        </h1>

        {/* Process steps container */}
        <div className="relative">
          {/* Curved dotted connecting lines */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-20">
            <svg className="w-full h-full" viewBox="0 0 1200 80" fill="none">
              {/* First curved line */}
              <path
                d="M180 40 Q240 20 300 40"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeDasharray="6,6"
                fill="none"
              />
              {/* Second curved line */}
              <path
                d="M420 40 Q480 20 540 40"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeDasharray="6,6"
                fill="none"
              />
              {/* Third curved line */}
              <path
                d="M660 40 Q720 20 780 40"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeDasharray="6,6"
                fill="none"
              />
              {/* Fourth curved line */}
              <path
                d="M900 40 Q960 20 1020 40"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeDasharray="6,6"
                fill="none"
              />
            </svg>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Step 1 - Get Pre-Approved */}
            <div className="flex flex-col items-center text-center relative">
              <div className="relative left-10 top-33 z-10 w-14 h-14 bg-green-800 rounded-full flex items-center justify-center mb-8">
                <span className="text-white font-bold text-sm">01</span>
              </div>
              <div className="mb-6 bg-white p-12 rounded-full absolute">
                <Image
                  src={icon1}
                  alt="Pre-Approved Icon"
                  className="w-16 h-16 text-gray-700"
                />
              </div>
              <div className="mt-30">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Get Pre-Approved
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-48">
                  We connect you with trusted lenders to secure your
                  pre-approval — the first step in understanding your budget and
                  boosting your buying power.
                </p>
              </div>
            </div>

            {/* Step 2 - Meet Your Realtor */}
            <div className="flex flex-col items-center text-center relative">
              <div className="relative left-18 z-10 w-14 h-14 bg-green-800 rounded-full flex items-center justify-center mb-8">
                <span className="text-white font-bold text-sm">02</span>
              </div>
              <div className="mb-6 bg-white p-12 rounded-full absolute">
                <Image
                  src={icon7}
                  alt="Pre-Approved Icon"
                  className="w-16 h-16 text-gray-700"
                />
              </div>
              <div className="mt-30">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Meet Your Realtor
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-48">
                  We’ll pair you with a local expert who understands your needs,
                  your market, and how to help you find the perfect place.
                </p>
              </div>
            </div>

            {/* Step 3 - Search Your Home */}
            <div className="flex flex-col items-center text-center relative">
              <div className="relative left-10 top-33 z-10 w-14 h-14 bg-green-800 rounded-full flex items-center justify-center mb-8">
                <span className="text-white font-bold text-sm">03</span>
              </div>
              <div className="mb-6 bg-white p-12 rounded-full absolute">
                <Image
                  src={icon3}
                  alt="Pre-Approved Icon"
                  className="w-16 h-16 text-gray-700"
                />
              </div>
              <div className="mt-30">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Search Your Home
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-48">
                  Explore homes that fit your lifestyle, schedule private
                  showings, and receive expert advice every step of the way.
                </p>
              </div>
            </div>

            {/* Step 4 - Make an Offer & Complete Due Diligence */}
            <div className="flex flex-col items-center text-center relative">
              <div className="relative left-18 z-10 w-14 h-14 bg-green-800 rounded-full flex items-center justify-center mb-8">
                <span className="text-white font-bold text-sm">04</span>
              </div>
              <div className="mb-6 bg-white p-12 rounded-full absolute">
                <Image
                  src={icon5}
                  alt="Pre-Approved Icon"
                  className="w-16 h-16 text-gray-700"
                />
              </div>
              <div className="mt-30">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Make an Offer & Complete Due Diligence
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-48">
                  From submitting a strong offer to navigating inspections and
                  negotiations, we’ll make sure everything stays smooth and
                  stress-free.
                </p>
              </div>
            </div>

            {/* Step 5 - Close & Get Your Keys */}
            <div className="flex flex-col items-center text-center relative">
              <div className="relative left-10 top-33 z-10 w-14 h-14 bg-green-800 rounded-full flex items-center justify-center mb-8">
                <span className="text-white font-bold text-sm">05</span>
              </div>
              <div className="mb-6 bg-white p-12 rounded-full absolute">
                <Image
                  src={icon4}
                  alt="Pre-Approved Icon"
                  className="w-16 h-16 text-gray-700"
                />
              </div>
              <div className="mt-30">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Close & Get Your Keys
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-48">
                  Finalize the paperwork and unlock the door to your new home.
                  Welcome to homeownership!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
