'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ContactPage() {
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
    <main className="min-h-screen bg-white">
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
              className="text-base font-semibold text-foreground hover:text-[#0086c3] transition-colors duration-200"
            >
              Downloads
            </Link>
            <Link 
              href="/contact" 
              className="text-base font-semibold text-[#0086c3] transition-colors duration-200"
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
                className="block text-base font-semibold text-foreground hover:text-[#0086c3] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Downloads
              </Link>
              <Link 
                href="/contact" 
                className="block text-base font-semibold text-[#0086c3] transition-colors duration-200"
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

                {/* Phone Number */}
                <a 
                  href="tel:" 
                  className="text-lg md:text-xl text-[#0086c3] font-medium hover:text-[#006b9f] transition-colors duration-200"
                >
                  Please add phone number
                </a>
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

