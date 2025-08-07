"use client";

import Image, { StaticImageData } from "next/image";
import support1 from "@/assets/tax-preparation/support1.png";
import support2 from "@/assets/tax-preparation/support2.png";
import support3 from "@/assets/tax-preparation/support3.png";
import icon1 from "@/assets/tax-preparation/file 1.png";
import icon2 from "@/assets/tax-preparation/taxation 1.png";
import icon3 from "@/assets/tax-preparation/refund 1.png";
import SmallButton from "../ui/SmallButton";

type Card =
  | {
      type: "image";
      image: StaticImageData;
      alt: string;
      bg: string;
    }
  | {
      type: "text";
      icon: StaticImageData;
      title: string;
      description: string;
      buttonText: string;
      bg: string;
    };

const TaxPreparation = () => {
  const cards: Card[] = [
    {
      type: "image",
      image: support3,
      alt: "Support Image 1",
      bg: "bg-[var(--soft-color)]",
    },
    {
      type: "text",
      icon: icon1,
      title: "File a Tax Amendment",
      description: "Mend past returns quickly and correctly",
      buttonText: "Amend My Return",
      bg: "bg-[var(--third-color)]",
    },
    {
      type: "image",
      image: support2,
      alt: "Support Image 2",
      bg: "bg-[var(--soft-color)]",
    },
    {
      type: "text",
      icon: icon2,
      title: "Start Filing Today",
      description:
        "File Now or Finalize Late/Extension Returns — EFinancial Can Help!",
      buttonText: "Start Filing Now",
      bg: "bg-[var(--third-color)]",
    },
    {
      type: "image",
      image: support1,
      alt: "Support Image 3",
      bg: "bg-[var(--soft-color)]",
    },
    {
      type: "text",
      icon: icon3,
      title: "Track Your Tax Refund",
      description: "Want to know your refund status? Check your status here.",
      buttonText: "Track My Refund",
      bg: "bg-[var(--third-color)]",
    },
  ];

  return (
    <section className="mt-20 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-20">
        Year-Round Tax Support
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} rounded-xl overflow-hidden shadow-lg flex flex-col`}
          >
            {card.type === "image" ? (
              <Image
                src={card.image}
                alt={card.alt}
                className="w-[370px] h-[340px] object-fit"
                priority
              />
            ) : (
              <div className="p-6 flex flex-col justify-between flex-1 text-white">
                <div className="w-14 h-14 mb-4 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt={`${card.title} icon`}
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {card.title}
                  </h3>
                  <p className="text-sm mb-4 text-[#585C67]">
                    {card.description}
                  </p>
                </div>
                <SmallButton
                  text={card.buttonText}
                  onClick={() => console.log(`${card.buttonText} clicked!`)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaxPreparation;
