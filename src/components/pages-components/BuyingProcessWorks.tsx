
import { Home, Handshake, Search, FileCheck2 } from 'lucide-react'
import { StepsProcess } from './Step-process'

export default function Page() {
  // Example showing you can mix React SVG icons and string SVG URLs
  const steps = [
    {
      title: "Get Pre-Approved",
      description: "Connect with a trusted lender to understand your budget.",
      icon: <Home />,
    },
    {
      title: "Meet Your Realtor",
      description: "Work with a local expert who knows your market.",
      icon: <Handshake />,
    },
    {
      title: "Search Your Home",
      description: "Tour homes that fit your lifestyle and needs.",
      icon: <Search />,
    },
    {
      title: "Make an Offer & Due Diligence",
      description: "Offers, inspections, negotiations—we'll guide you.",
      icon: <FileCheck2 />,
    },
    {
      title: "Close & Get Keys",
      description: "Finalize paperwork and celebrate your new home.",
      // Any external or local SVG works:
      icon: "/placeholder.svg?height=40&width=40",
      iconAlt: "Key handoff icon",
    },
  ]

  return (
    <main className="p-4 sm:p-6 bg-[#F1F8F4]">
      <StepsProcess
   title="How the Home Buying Process Works"
      steps={steps}
      accent="emerald"
      />
    </main>
  )
}
