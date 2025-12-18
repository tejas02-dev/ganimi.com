'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function DownloadsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#0086c3]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link href="/home" className="text-2xl md:text-3xl font-display font-bold" style={{ color: '#001f3f' }}>
            Ganimi
          </Link>
          
          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-10 flex-1 justify-center">
            <Link 
              href="/home" 
              className="text-base font-semibold text-foreground hover:text-[#0086c3] transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-base font-semibold text-foreground hover:text-[#0086c3] transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/downloads" 
              className="text-base font-semibold text-[#0086c3] transition-colors duration-200"
            >
              Downloads
            </Link>
            <Link 
              href="/contact" 
              className="text-base font-semibold text-foreground hover:text-[#0086c3] transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Get Started Button */}
          <Link
            href="/home#survey-section"
            className="hidden md:block px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-gradient-to-r from-[#0086c3] to-[#00a8e8] text-white font-semibold text-sm md:text-base hover:from-[#006b9f] hover:to-[#0086c3] hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ boxShadow: '0 4px 15px rgba(0, 134, 195, 0.25)' }}
          >
            Get started
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-[#0086c3] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#0086c3]/10 bg-white">
            <nav className="px-6 py-4 space-y-4">
              <Link 
                href="/home" 
                className="block text-base font-semibold text-foreground hover:text-[#0086c3] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block text-base font-semibold text-foreground hover:text-[#0086c3] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/downloads" 
                className="block text-base font-semibold text-[#0086c3] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Downloads
              </Link>
              <Link 
                href="/contact" 
                className="block text-base font-semibold text-foreground hover:text-[#0086c3] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/home#survey-section"
                className="block w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#0086c3] to-[#00a8e8] text-white font-semibold text-center hover:from-[#006b9f] hover:to-[#0086c3] transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get started
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Downloads & Mobile App Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="text-gray-900">Downloads &</span>{' '}
              <span className="text-[#0086c3]">Mobile App</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Download our mobile app and discover educational opportunities tailored to your child's talents and interests
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Mobile App Visual */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-64 h-[500px] md:w-80 md:h-[600px] bg-gray-800 rounded-[3rem] p-3 shadow-2xl">
                    {/* Phone Screen */}
                    <div className="w-full h-full bg-gradient-to-b from-[#00bcd4] to-[#0086c3] rounded-[2.5rem] p-8 flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Logo */}
                      <div className="mb-6">
                        <div className="flex items-center justify-center mb-2">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">G</span>
                          </div>
                        </div>
                        <p className="text-white/90 text-xs text-center">...TIP for life!</p>
                      </div>

                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-3">
                        Ganimi
                      </h2>

                      {/* Subtitle */}
                      <p className="text-white/90 text-base md:text-lg text-center">
                        Discover your path to success
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Download Information */}
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                    Download Android App
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Discover educational opportunities, explore courses, connect with tutors, and track your child's learning journey all from your Android mobile device.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {[
                    'Browse courses and services',
                    'Connect with tutors and instructors',
                    'Track learning progress',
                    'Discover talent-based opportunities'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0086c3] flex items-center justify-center mt-0.5">
                        <svg 
                          className="w-4 h-4 text-white" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={3} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </div>
                      <p className="text-base md:text-lg text-gray-700 font-medium">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Download Button */}
                <div className="pt-4">
                  <a
                    href="/Ganimi_App_V_1.0.apk"
                    download="Ganimi_App_V_1.0.apk"
                    className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#0086c3] to-[#00a8e8] text-white font-semibold text-lg hover:from-[#006b9f] hover:to-[#0086c3] hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{ boxShadow: '0 8px 25px rgba(0, 134, 195, 0.3)' }}
                  >
                    <svg 
                      className="w-5 h-5 text-white" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                      />
                    </svg>
                    <span>Download Android App</span>
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

