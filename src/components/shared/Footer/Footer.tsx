import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/footer-logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const socialIcons = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn];
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact-details/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/bookings", label: "Booking" },
];
const infoLinks = [
  { href: "/faq", label: "FAQ’s" },
  { href: "/contact-details/contact-us", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];
const contactItems = [
  { href: "/", icon: FaPhone, text: "+1 (123) 456-7890", size: 16 },
  { href: "/", icon: MdEmail, text: "hello@mail.com", size: 16 },
  {
    href: "/",
    icon: IoLocationOutline,
    text: (
      <>
        10 3rd Avenue <br /> Houghton Estate
      </>
    ),
    size: 20,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="bg-[#28543F] p-10 max-w-7xl mx-auto rounded-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Image src={logo} alt="Logo" width={115} height={80} className="mr-2" />
            </h2>
            <div className="flex space-x-2">
              {socialIcons.map((Icon, i) => (
                <div
                  key={i}
                  className="p-2 border rounded-full cursor-pointer transition duration-200 hover:bg-white hover:text-green-800"
                  style={{ borderColor: "#FFFFFF1C" }}
                >
                  <Icon size={24} />
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <ul className="space-y-2 text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-gray-400 text-[#EBEBEB] md:text-base  gap-2">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Section 3 */}
          <ul className="space-y-2 text-sm">
            {infoLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-gray-400 text-[#EBEBEB] md:text-base  gap-2">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              {contactItems.map(({ href, icon: Icon, text, size }, i) => (
                <li key={i}>
                  <Link href={href} className="hover:text-gray-400 text-[#EBEBEB] md:text-base  gap-2 flex  items-center">
                    <Icon size={size} /> {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center md:text-base  hover:text-gray-400 text-[#EBEBEB] ">
          &copy; {new Date().getFullYear()} | EFINANCIAL All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
