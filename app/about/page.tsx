'use client'

import Navbar from '../components/Navbar'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* About Us Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* About Us Heading */}
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="text-gray-900">About</span>{' '}
              <span className="text-[#0086c3]">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Building the future of education through innovation, technology, and meaningful connections.
            </p>
          </div>

          {/* Vision & Mission Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Our Vision */}
            <div className="text-center">
              {/* Vision Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0086c3] flex items-center justify-center">
                  <svg 
                    className="w-10 h-10 md:w-12 md:h-12 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                    />
                  </svg>
                </div>
              </div>

              {/* Vision Heading */}
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                <span className="text-gray-900">Our</span>{' '}
                <span className="text-[#0086c3]">Vision</span>
              </h2>

              {/* Vision Text */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                To build dynamic teaching-learning platform connecting individual talent-interest-passion for successful educational and career development.
              </p>
            </div>

            {/* Our Mission */}
            <div className="text-center">
              {/* Mission Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0086c3] flex items-center justify-center">
                  <svg 
                    className="w-10 h-10 md:w-12 md:h-12 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
              </div>

              {/* Mission Heading */}
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                <span className="text-gray-900">Our</span>{' '}
                <span className="text-[#0086c3]">Mission</span>
              </h2>

              {/* Mission Text */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                To Integrate local and global resources with latest technology for quality education to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values We Offer Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0f9fc] to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="text-gray-900">Values We</span>{' '}
              <span className="text-[#0086c3]">Offer</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Core principles that shape the Ganimi learning experience
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {/* Freedom Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Freedom Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0086c3] flex items-center justify-center">
                  <svg 
                    className="w-10 h-10 md:w-12 md:h-12 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" 
                    />
                  </svg>
                </div>
              </div>

              {/* Freedom Title */}
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4 text-center">
                Freedom
              </h3>

              {/* Freedom Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
                Learn anytime, anywhere, and at your own pace — Ganimi gives every learner the freedom to explore beyond classroom boundaries.
              </p>
            </div>

            {/* Choice Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Choice Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0086c3] flex items-center justify-center">
                  <svg 
                    className="w-10 h-10 md:w-12 md:h-12 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" 
                    />
                  </svg>
                </div>
              </div>

              {/* Choice Title */}
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4 text-center">
                Choice
              </h3>

              {/* Choice Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
                A platform that offers complete flexibility — choose what, when, and how you want to learn.
              </p>
            </div>

            {/* Joy Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Joy Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0086c3] flex items-center justify-center">
                  <svg 
                    className="w-10 h-10 md:w-12 md:h-12 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
              </div>

              {/* Joy Title */}
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4 text-center">
                Joy
              </h3>

              {/* Joy Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
                Experience the true joy of learning through engaging content, instant feedback, and real progress.
              </p>
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

