import Image from "next/image";
import { FaStar } from "react-icons/fa";
import user1 from "@/assets/home/user1.png";
import user2 from "@/assets/home/user2.png";
import user3 from "@/assets/home/user3.png";
import user4 from "@/assets/home/user4.png";
import user5 from "@/assets/home/user5.png";
import user6 from "@/assets/home/user6.png";

const testimonials = [
  {
    name: "Courtney Henry",
    location: "CA, Canada",
    review:
      "“I ordered online and my drink was ready within minutes. Super smooth experience and delicious every time!”",
    image: user1,
    rating: 4.5,
  },
  {
    name: "Eleanor Pena",
    location: "CA, Canada",
    review:
      "“I ordered online and my drink was ready within minutes. Super smooth experience and delicious every time!”",
    image: user2,
    rating: 4.5,
  },
  {
    name: "Robert Fox",
    location: "CA, Canada",
    review:
      "“I ordered online and my drink was ready within minutes. Super smooth experience and delicious every time!”",
    image: user3,
    rating: 4.5,
  },
  {
    name: "Dianne Russell",
    location: "CA, Canada",
    review:
      "“I ordered online and my drink was ready within minutes. Super smooth experience and delicious every time!”",
    image: user4,
    rating: 4.5,
  },
  {
    name: "Albert Flores",
    location: "CA, Canada",
    review:
      "“I ordered online and my drink was ready within minutes. Super smooth experience and delicious every time!”",
    image: user5,
    rating: 4.5,
  },
  {
    name: "Wade Warren",
    location: "CA, Canada",
    review:
      "“I ordered online and my drink was ready within minutes. Super smooth experience and delicious every time!”",
    image: user6,
    rating: 4.5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#0D1F1D] py-16 mb-20">
      <div className=" max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-5xl font-bold text-white mb-10">
          What Our Clients <br /> Say About Us.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#122623] text-white rounded-xl p-12 flex flex-col justify-between shadow-lg"
            >
              <p className="text-sm mb-4">{t.review}</p>
              <div className="flex items-center mt-auto">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
                <div className="ml-auto flex items-center text-yellow-400">
                  <FaStar className="mr-1" />
                  <span className="text-white">{t.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
