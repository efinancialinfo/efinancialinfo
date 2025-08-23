"use client";

import { useEffect, useRef } from "react";

type AppointmentFormProps = {
  className?: string;
  calendlyUrl?: string;
};

export default function AppointmentForm({
  className,
  calendlyUrl = "https://calendly.com/efinancialfirm/30min?primary_color=00a86b&text_color=000000",
}: AppointmentFormProps) {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="booking" className={className}>
      <div className="mx-auto rounded-2xl bg-[#F1F8F4] px-4 py-10 sm:px-8">
        <h1 className="md:text-5xl text-4xl text-gray-900 leading-[120%] font-bold mb-10 text-center">
          Book an Appointment
        </h1>

        {/* Calendly Inline Widget */}
        <div
          ref={calendlyRef}
          className="calendly-inline-widget"
          data-url={calendlyUrl}
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
    </section>
  );
}
