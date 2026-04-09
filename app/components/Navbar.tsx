'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { GANIMI_PLAY_STORE_URL } from '../../lib/links'

interface NavbarProps {
  onGetStartedClick?: () => void
}

export default function Navbar({ onGetStartedClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  const handleGetStarted = () => {
    if (onGetStartedClick) {
      onGetStartedClick()
    }
  }

  const handleProductClick = (e: any) => {
    // If the user is already on the home page, smoothly scroll to the product section.
    // Otherwise, navigate to /#product-section and rely on the hash target.
    if (pathname === '/') {
      e.preventDefault()
      const section = document.getElementById('product-section')
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const isActive = (path: string) => {
    return pathname === path ? 'text-[#4f46e5]' : 'text-foreground'
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#0086c3]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-2 md:gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 whitespace-nowrap"
          aria-label="Ganimi"
        >
          <Image src="/icon-wide.png" alt="Ganimi" width={100} height={100} />
          <span
            className="text-xl sm:text-2xl md:text-3xl font-display font-bold"
            style={{ color: '#4f46e5' }}
          >
          </span>
        </Link>
        
        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-10 flex-1 justify-center">
          <Link 
            href="/" 
            className={`text-base font-semibold hover:text-[#4f46e5] transition-colors duration-200 ${isActive('/')}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`text-base font-semibold hover:text-[#4f46e5] transition-colors duration-200 ${isActive('/about')}`}
          >
            About
          </Link>
          <Link
            href="/#product-section"
            onClick={handleProductClick}
            className="text-base font-semibold hover:text-[#4f46e5] transition-colors duration-200"
          >
            Product & Services
          </Link>
          <Link 
            href={GANIMI_PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-base font-semibold hover:text-[#4f46e5] transition-colors duration-200 ${isActive('/downloads')}`}
          >
            Downloads
          </Link>
          <Link 
            href="/contact" 
            className={`text-base font-semibold hover:text-[#4f46e5] transition-colors duration-200 ${isActive('/contact')}`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Get Started Button */}
        {onGetStartedClick ? (
          <button
            onClick={handleGetStarted}
            className="hidden md:block px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#2563eb] text-white font-semibold text-sm md:text-base hover:from-[#4338ca] hover:to-[#1d4ed8] hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ boxShadow: '0 4px 15px rgba(0, 134, 195, 0.25)' }}
          >
            Get started
          </button>
        ) : (
          <Link
            href={GANIMI_PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#2563eb] text-white font-semibold text-sm md:text-base hover:from-[#4338ca] hover:to-[#1d4ed8] hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ boxShadow: '0 4px 15px rgba(0, 134, 195, 0.25)' }}
          >
            Get started
          </Link>
        )}

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#4f46e5] hover:text-[#3730a3] transition-colors duration-200"
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
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-[#0086c3]/10 shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-semibold hover:text-[#4f46e5] transition-colors duration-200 py-2 ${isActive('/')}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-semibold hover:text-[#4f46e5] transition-colors duration-200 py-2 ${isActive('/about')}`}
            >
              About
            </Link>
            <Link
              href="/#product-section"
              onClick={(e) => {
                setIsMobileMenuOpen(false)
                handleProductClick(e)
              }}
              className="text-lg font-semibold hover:text-[#4f46e5] transition-colors duration-200 py-2"
            >
              Product & Services
            </Link>
            <Link 
              href={GANIMI_PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-semibold hover:text-[#4f46e5] transition-colors duration-200 py-2 ${isActive('/downloads')}`}
            >
              Downloads
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-semibold hover:text-[#4f46e5] transition-colors duration-200 py-2 ${isActive('/contact')}`}
            >
              Contact
            </Link>
            {onGetStartedClick ? (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  handleGetStarted()
                }}
                className="w-full px-8 py-3.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#2563eb] text-white font-semibold text-base hover:from-[#4338ca] hover:to-[#1d4ed8] transition-all duration-300 mt-2"
                style={{ boxShadow: '0 4px 15px rgba(0, 134, 195, 0.25)' }}
              >
                Get started
              </button>
            ) : (
              <Link
                href={GANIMI_PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-8 py-3.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#2563eb] text-white font-semibold text-base hover:from-[#4338ca] hover:to-[#1d4ed8] transition-all duration-300 mt-2 text-center"
                style={{ boxShadow: '0 4px 15px rgba(0, 134, 195, 0.25)' }}
              >
                Get started
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

