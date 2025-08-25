"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronDown, Check } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    services: "consulting",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const serviceOptions = [
    { value: "tax-individual", label: "Tax individual" },
    { value: "tax-business", label: "Tax Business" },
    { value: "realtor", label: "Realtor" },
    { value: "loan-officer", label: "Loan officer" },
    { value: "consulting", label: "Consulting" },
    { value: "notary", label: "Notary" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, services: service }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess("Email sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          services: "consulting",
          message: "",
        });
      }
    } catch (err) {
      console.log(err);
      setSuccess("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen px-4 py-12 bg-gray-50">
      <div className="grid md:grid-cols-2 w-full max-w-6xl gap-6">
        {/* Left Info */}
        <div className="p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-[#224334] mb-8">
            Call or Visit Us
          </h2>
          <ul className="space-y-6 text-gray-700 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="text-green-600 w-5 h-5 mt-1" />
              <div>
                <p className="mb-1">Phone:</p>
                <Link
                  href="tel:+3219995639"
                  className="font-semibold hover:underline"
                >
                  1-321-999-5639
                </Link>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="text-green-600 w-5 h-5 mt-1" />
              <div>
                <p className="mb-1">Email:</p>
                <Link
                  href="mailto:support@efinancial.info"
                  className="font-semibold hover:underline"
                >
                  support@efinancial.info
                </Link>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-green-600 w-5 h-5 mt-1" />
              <div>
                <p className="mb-1">Location:</p>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=775+S+Kirkman+Rd+Ste+105,+Orlando,+FL+32811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-semibold"
                >
                  775 S Kirkman Rd Ste 105, Orlando, FL 32811
                </Link>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-green-600 w-5 h-5 mt-1" />
              <div className="max-w-sm">
                <h3 className="mb-1">Open Time</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    <span className="font-semibold">Monday: </span> 09:00 AM to
                    07:00 PM
                  </li>
                  <li>
                    <span className="font-semibold">Tuesday:</span> 09:00 AM to
                    07:00 PM
                  </li>
                  <li>
                    <span className="font-semibold">Wednesday:</span> 09:00 AM
                    to 07:00 PM
                  </li>
                  <li>
                    <span className="font-semibold">Thursday:</span> 09:00 AM to
                    07:00 PM
                  </li>
                  <li>
                    <span className="font-semibold">Friday:</span> 09:00 AM to
                    07:00 PM
                  </li>
                  <li>
                    <span className="font-semibold">Saturday:</span> 11:00 AM -
                    05:00 PM
                  </li>
                  <li>
                    <span className="font-semibold">Sunday:</span> Closed
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="bg-[#F2F5F3] p-6 md:p-10 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Reach Out by Email
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your name here"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none"
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email here"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+123"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            </div>

            {/* Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Services
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-2xl flex justify-between items-center focus:ring-2 focus:ring-green-500 outline-none"
                >
                  <span className="capitalize">
                    {
                      serviceOptions.find(
                        (opt) => opt.value === formData.services
                      )?.label
                    }
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen && (
                  <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden">
                    {serviceOptions.map((option) => (
                      <li key={option.value}>
                        <button
                          type="button"
                          onClick={() => handleServiceSelect(option.value)}
                          className={`flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 ${
                            formData.services === option.value
                              ? "bg-gray-200"
                              : ""
                          }`}
                        >
                          <span className="flex-1">{option.label}</span>
                          {formData.services === option.value && (
                            <Check className="w-4 h-4 text-green-600" />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message here"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none resize-none"
              />
            </div>

            {success && (
              <p
                className={`text-sm ${
                  success.includes("success")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-2xl transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Now"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
