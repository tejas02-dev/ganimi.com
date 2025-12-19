'use client'

import Navbar from '../components/Navbar'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Contact Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="text-gray-900">Contact</span>{' '}
              <span className="text-[#0086c3]">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for questions, support, or partnership opportunities
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                {/* Email Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0086c3] flex items-center justify-center mb-6">
                  <svg 
                    className="w-8 h-8 md:w-10 md:h-10 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                </div>

                {/* Email Title */}
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-4">
                  Email
                </h3>

                {/* Email Address */}
                <a 
                  href="mailto:sales@ganimi.com" 
                  className="text-lg md:text-xl text-[#0086c3] font-medium hover:text-[#006b9f] transition-colors duration-200 break-all"
                >
                  sales@ganimi.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                {/* Phone Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0086c3] flex items-center justify-center mb-6">
                  <svg 
                    className="w-8 h-8 md:w-10 md:h-10 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                </div>

                {/* Phone Title */}
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-4">
                  Phone
                </h3>

                {/* Phone Numbers */}
                <div className="space-y-2">
                  <a 
                    href="tel:+919665014600" 
                    className="block text-lg md:text-xl text-[#0086c3] font-medium hover:text-[#006b9f] transition-colors duration-200"
                  >
                    +91 9665014600
                  </a>
                  <a 
                    href="tel:+919890058844" 
                    className="block text-lg md:text-xl text-[#0086c3] font-medium hover:text-[#006b9f] transition-colors duration-200"
                  >
                    +91 9890058844
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gradient-to-br from-[#f0f9fc] to-white border-t border-[#0086c3]/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-light" style={{ color: '#0086c3' }}>
            © {new Date().getFullYear()} Ganimi — Helping children discover their true path
          </p>
        </div>
      </footer>
    </main>
  )
}

