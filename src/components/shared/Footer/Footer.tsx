import Link from "next/link";
import logo from "@/assets/footer-logo.png";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="bg-green-900 text-white p-10 max-w-7xl mx-auto rounded-[20px]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              <Image
                src={logo}
                alt="Logo"
                width={115}
                height={80}
                className="inline-block mr-2"
              />
            </h2>
            <div className="flex space-x-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="p-2 border hover:bg-white hover:text-green-800 rounded-full cursor-pointer transition duration-200"
                    style={{ borderColor: "#FFFFFF1C" }}
                  >
                    <Icon size={24} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-details/about-us"
                  className="hover:text-gray-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-400">
                  Services{" "}
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="hover:text-gray-400">
                  Booking{" "}
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-gray-400">
                  FAQ’s
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-details/contact-us"
                  className="hover:text-gray-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-gray-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-400 flex gap-2 items-center"
                >
                  <FaPhone size={16} /> +1 (123) 456-7890
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-400 flex gap-2 items-center"
                >
                  <MdEmail size={16} /> hello@mail.com
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-400 flex gap-2 items-center"
                >
                  <IoLocationOutline size={20} /> 10 3rd Avenue <br /> Houghton
                  Estate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm text-white">
          &copy; {new Date().getFullYear()} | EFINANCIAL All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
