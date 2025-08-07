export default function JoinTeamSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-[#0F1F18] rounded-3xl overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            {/* Large curved shape */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-700 rounded-full opacity-30 -translate-x-32 -translate-y-32"></div>
            {/* Medium curved shape */}
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-900 rounded-full opacity-40 translate-x-24 translate-y-24"></div>
            {/* Small accent shape */}
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-emerald-600 rounded-full opacity-20"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center py-24 px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Join Our Team
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#28543F] hover:bg-emerald-700 text-white px-8 py-3 rounded-2xl font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-800">
                Apply Here
              </button>
              
              <button className="border-1 border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-3 rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-800">
                View Openings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
