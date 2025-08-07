import { ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  return (
    <div className="flex items-center justify-center p-6 mb-20 mt-20">
      <div className="w-full max-w-4xl">
        <div className="bg-[var(--primary-color)] rounded-3xl px-12 py-16 relative overflow-hidden shadow-2xl">
          {/* Subtle background overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-700/30 via-transparent to-green-900/50 rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold text-white mb-12 tracking-tight">
              Let&apos;s Build What&apos;s Next
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Primary Button */}
              <button className="bg-white cursor-pointer hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-200 text-[var(--primary-color)] px-6 py-3 rounded-full font-medium text-base flex items-center gap-3 shadow-md">
                Schedule a Free Consultation
                <span className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </button>

              {/* Secondary Button */}
              <button className="bg-white cursor-pointer hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-200 text-[var(--primary-color)] px-6 py-3 rounded-full font-medium text-base flex items-center gap-3 shadow-md">
                Contact Us for Custom Support
                <span className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
