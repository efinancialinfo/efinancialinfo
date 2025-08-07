'use client'

import { Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    services: 'consulting',
    message: ''
  })

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceSelect = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: service
    }))
    setIsDropdownOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const serviceOptions = [
    { value: 'consulting', label: 'Consulting' },
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' }
  ]

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-50">
      <div className="grid md:grid-cols-2 overflow-hidden max-w-7xl w-full gap-2">
        {/* Left side - Contact Info */}
        <div className=" p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#224334] mb-6">Call or Visit Us</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">Phone:</p>
                <p className="text-gray-800 font-medium">(703) 555-0124</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">Email:</p>
                <p className="text-gray-800 font-medium">info.Co.@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">Location:</p>
                <p className="text-gray-800 font-medium">10 3rd Avenue Houghton Estate</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">Open-time:</p>
                <p className="text-gray-800 font-medium">Monday - Friday: 08:00 - 20:00</p>
                <p className="text-gray-800 font-medium">Saturday - Sunday: 09:00 - 19:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="bg-[#F2F5F3] p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reach Out by Email</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your name here"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email here"
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone no
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1234"
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-1">
                Services
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-left flex items-center justify-between"
                >
                  <span className="capitalize">
                    {serviceOptions.find(option => option.value === formData.services)?.label}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {serviceOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleServiceSelect(option.value)}
                        className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none first:rounded-t-md last:rounded-b-md"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message here"
                rows={4}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-8 rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
