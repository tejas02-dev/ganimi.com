'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Question {
  id: string
  statement: string
  question: string
}

const surveyQuestions: Question[] = [
  {
    id: 'q1',
    statement: 'When your child was born, you believed they could become anything.',
    question: 'Do you believe every child is naturally talented at something?'
  },
  {
    id: 'q2',
    statement: 'They play with blocks longer. They ask more questions about animals. Are you noticing?',
    question: "Do you know what your child's strongest talent actually is today?"
  },
  {
    id: 'q3',
    statement: 'They love art but score well in math. Which path do you trust?',
    question: "Can you tell whether your child's interests are aligned with that talent?"
  },
  {
    id: 'q4',
    statement: "Last year it was coding. This year it's photography. What will stick?",
    question: "Do you know which of your child's interests could grow into real passion over time?"
  },
  {
    id: 'q5',
    statement: 'Science because of marks? Or science because of curiosity?',
    question: 'When choosing subjects or courses, do you know if they are developing talent, interest, or just improving marks?'
  },
  {
    id: 'q6',
    statement: 'Good grades. Top college. Great job. But something feels empty.',
    question: 'If your child succeeds academically but feels unhappy later, would you know where the mismatch began?'
  },
  {
    id: 'q7',
    statement: 'Ten years of education. One career choice. How much was planned?',
    question: "Would you like your child's career to be chosen by chance — or by years of understanding?"
  }
]

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [surveyComplete, setSurveyComplete] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  const handleAnswer = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1)
      }, 300)
    } else {
      setTimeout(() => {
        setSurveyComplete(true)
      }, 300)
    }
  }

  const skipToSignup = () => {
    const finalSection = document.getElementById('signup-section')
    if (finalSection) {
      finalSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToSurvey = () => {
    const surveySection = document.getElementById('survey-section')
    if (surveySection) {
      surveySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const progress = ((currentQuestion + 1) / surveyQuestions.length) * 100

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
              className="text-base font-semibold text-foreground hover:text-[#0086c3] transition-colors duration-200"
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
          <button
            onClick={scrollToSurvey}
            className="hidden md:block px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-gradient-to-r from-[#0086c3] to-[#00a8e8] text-white font-semibold text-sm md:text-base hover:from-[#006b9f] hover:to-[#0086c3] hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ boxShadow: '0 4px 15px rgba(0, 134, 195, 0.25)' }}
          >
            Get started
          </button>

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
          <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-[#0086c3]/10 shadow-lg">
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <Link 
                href="/home" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-foreground hover:text-[#0086c3] transition-colors duration-200 py-2"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-foreground hover:text-[#0086c3] transition-colors duration-200 py-2"
              >
                About
              </Link>
              <Link 
                href="/downloads" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-foreground hover:text-[#0086c3] transition-colors duration-200 py-2"
              >
                Downloads
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-foreground hover:text-[#0086c3] transition-colors duration-200 py-2"
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  scrollToSurvey()
                }}
                className="w-full px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0086c3] to-[#00a8e8] text-white font-semibold text-base hover:from-[#006b9f] hover:to-[#0086c3] transition-all duration-300 mt-2"
                style={{ boxShadow: '0 4px 15px rgba(0, 134, 195, 0.25)' }}
              >
                Get started
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-br from-[#00bcd4] via-[#4dd0e1] to-[#00bcd4] relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)', animationDelay: '2s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white rounded-full p-8 shadow-2xl">
              <Image 
                src="/logo.png" 
                alt="Ganimi" 
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-fade-in-up animation-delay-400 text-white drop-shadow-lg">
            Life is all about success and satisfaction
          </h1>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-fade-in animation-delay-800">
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm font-semibold text-white uppercase tracking-wider">Scroll to explore</p>
              <svg className="w-6 h-6 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Survey Section */}
      {!surveyComplete && (
        <section id="survey-section" className="lg:min-h-screen flex items-center justify-center px-4 py-6 md:py-20 bg-gradient-to-br from-white to-gray-100">
          <div className="max-w-2xl w-full mx-auto py-12 lg:py-0">
            {/* Progress Bar */}
            <div className="mb-4 md:mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-600">Question {currentQuestion + 1} of {surveyQuestions.length}</span>
                <button
                  onClick={skipToSignup}
                  className="text-sm font-medium text-[#0086c3] hover:text-[#006b9f] transition-colors"
                >
                  Skip Survey →
                </button>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#00bcd4] to-[#0086c3] transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12 border-2 border-[#0086c3]/10">
              {/* Statement */}
              <div className="mb-4 md:mb-6">
                <p className="text-base md:text-lg text-gray-600 italic leading-relaxed">
                  {surveyQuestions[currentQuestion].statement}
                </p>
              </div>

              {/* Question */}
              <div className="mb-6 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 leading-tight">
                  {surveyQuestions[currentQuestion].question}
                </h2>
              </div>

              {/* Answer Buttons */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <button
                  onClick={handleAnswer}
                  className="group relative py-4 md:py-6 px-4 md:px-6 rounded-2xl bg-gradient-to-br from-[#00bcd4] to-[#0086c3] text-white font-bold text-lg md:text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10">Yes</span>
                  <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                </button>
                <button
                  onClick={handleAnswer}
                  className="py-4 md:py-6 px-4 md:px-6 rounded-2xl border-3 border-[#0086c3] text-[#0086c3] font-bold text-lg md:text-xl hover:bg-[#0086c3] hover:text-white hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{ borderWidth: '3px' }}
                >
                  No
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="flex justify-center gap-2 mt-6 md:mt-8">
                {surveyQuestions.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx < currentQuestion
                        ? 'w-2 bg-[#00bcd4]'
                        : idx === currentQuestion
                        ? 'w-8 bg-gradient-to-r from-[#00bcd4] to-[#0086c3]'
                        : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product & Services Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Product and <span className="bg-gradient-to-r from-[#0086c3] to-[#00bcd4] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A platform that tracks your child's journey from curiosity to career
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Service 1 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 border-2 border-[#0086c3]/10 hover:border-[#0086c3]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00bcd4] to-[#0086c3] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Talent Tracking</h3>
              <p className="text-gray-600 leading-relaxed">Monitor natural abilities and strengths as they emerge over time through activities and performance data.</p>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 border-2 border-[#0086c3]/10 hover:border-[#0086c3]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00bcd4] to-[#0086c3] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Interest Analysis</h3>
              <p className="text-gray-600 leading-relaxed">Identify genuine interests by tracking what keeps them engaged, curious, and motivated across different areas.</p>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 border-2 border-[#0086c3]/10 hover:border-[#0086c3]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00bcd4] to-[#0086c3] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Passion Discovery</h3>
              <p className="text-gray-600 leading-relaxed">See which interests develop into lasting passion through consistent engagement and deep focus patterns.</p>
            </div>

            {/* Service 4 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 border-2 border-[#0086c3]/10 hover:border-[#0086c3]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00bcd4] to-[#0086c3] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Connected Network</h3>
              <p className="text-gray-600 leading-relaxed">Parents, teachers, coaches, and mentors all contribute insights to build a complete picture.</p>
            </div>

            {/* Service 5 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 border-2 border-[#0086c3]/10 hover:border-[#0086c3]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00bcd4] to-[#0086c3] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Progress Insights</h3>
              <p className="text-gray-600 leading-relaxed">Clear, visual reports showing development patterns and alignment between talent, interest, and passion.</p>
            </div>

            {/* Service 6 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 border-2 border-[#0086c3]/10 hover:border-[#0086c3]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00bcd4] to-[#0086c3] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Career Guidance</h3>
              <p className="text-gray-600 leading-relaxed">Data-driven recommendations for career paths that truly align with your child's unique profile.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#00bcd4]/10 to-[#0086c3]/10 rounded-2xl p-6 md:p-8 border-2 border-[#0086c3]/20">
              <div className="text-center sm:text-left flex-1">
                <p className="text-lg md:text-xl font-semibold text-foreground mb-2">Ready to understand your child's journey?</p>
                <p className="text-gray-600">Get started with Ganimi today</p>
              </div>
              <a
                href="#downloads"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0086c3] to-[#00bcd4] text-white font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap inline-block"
              >
                Download Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Explore <span className="bg-gradient-to-r from-[#0086c3] to-[#00bcd4] bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with verified coaches and mentors across diverse fields to help your child grow
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Category 1: Academics */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Academics</h3>
                <p className="text-sm text-gray-600">Subject tutoring & learning support</p>
              </div>
            </div>

            {/* Category 2: Sports */}
            <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 text-green-600 group-hover:scale-110 transition-transform">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sports</h3>
                <p className="text-sm text-gray-600">Physical fitness & athletics</p>
              </div>
            </div>

            {/* Category 3: COP */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 text-purple-600 group-hover:scale-110 transition-transform">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">COP</h3>
                <p className="text-sm text-gray-600">Career Orientation Program</p>
              </div>
            </div>

            {/* Category 4: GUT */}
            <div className="group relative bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border-2 border-pink-100 hover:border-pink-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 text-pink-600 group-hover:scale-110 transition-transform">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">GUT</h3>
                <p className="text-sm text-gray-600">Glam Up Teen</p>
              </div>
            </div>

            {/* Category 5: Computer Skills */}
            <div className="group relative bg-gradient-to-br from-cyan-50 to-sky-50 rounded-2xl p-6 border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 text-cyan-600 group-hover:scale-110 transition-transform">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Computer Skills</h3>
                <p className="text-sm text-gray-600">Digital literacy & coding</p>
              </div>
            </div>

            {/* Category 6: Competitive Exams */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 text-orange-600 group-hover:scale-110 transition-transform">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Competitive Exams</h3>
                <p className="text-sm text-gray-600">Test prep & coaching</p>
              </div>
            </div>

            {/* Category 7: Life Skills */}
            <div className="group relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 text-teal-600 group-hover:scale-110 transition-transform">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Life Skills</h3>
                <p className="text-sm text-gray-600">Essential capabilities for life</p>
              </div>
            </div>

            {/* Category 8: Performing Arts */}
            <div className="group relative bg-gradient-to-br from-fuchsia-50 to-purple-50 rounded-2xl p-6 border-2 border-fuchsia-100 hover:border-fuchsia-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 text-fuchsia-600 group-hover:scale-110 transition-transform">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Performing Arts</h3>
                <p className="text-sm text-gray-600">Music, dance & drama</p>
              </div>
            </div>

            {/* Category 9: EDP */}
            <div className="group relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-100 hover:border-yellow-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 text-yellow-600 group-hover:scale-110 transition-transform">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">EDP</h3>
                <p className="text-sm text-gray-600">Entrepreneurship Development</p>
              </div>
            </div>

            {/* Category 10: Adventure */}
            <div className="group relative bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl p-6 border-2 border-lime-100 hover:border-lime-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 text-lime-600 group-hover:scale-110 transition-transform">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Adventure</h3>
                <p className="text-sm text-gray-600">Outdoor & exploration activities</p>
              </div>
            </div>

            {/* Category 11: Upskilling */}
            <div className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 text-indigo-600 group-hover:scale-110 transition-transform">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Upskilling</h3>
                <p className="text-sm text-gray-600">Modern skills & certifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Signup Section */}
      <section id="signup-section" className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-br from-white via-[#e6f4f9] to-[#cce7f2] relative overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(0, 134, 195, 0.15) 0%, transparent 70%)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(0, 168, 232, 0.15) 0%, transparent 70%)', animationDelay: '2s' }} />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="space-y-12">
              {/* Thank you message if survey completed */}
              {surveyComplete && (
                <div className="mb-12 animate-fade-in">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#00bcd4] to-[#0086c3] text-white shadow-lg mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">Thank you for completing the survey!</span>
                  </div>
                </div>
              )}

              {/* Brand Title */}
              <div className="mb-6">
                <span className="text-3xl md:text-4xl lg:text-5xl font-display font-bold" style={{ color: '#001f3f' }}>Ganimi</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border-2 border-[#0086c3]/20 shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-[#0086c3]" />
                <span className="text-[#0086c3] text-sm font-semibold">For Students & Families</span>
              </div>

              {/* Hero Headline */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                Guide children toward careers<br />
                <span className="bg-gradient-to-r from-[#0086c3] to-[#00a8e8] bg-clip-text text-transparent">based on who they truly are.</span>
              </h1>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-16">
                Most children choose careers based on pressure, trends, or fear. 
                We help them choose based on <span className="text-[#0086c3] font-semibold">self-awareness</span>, <span className="text-[#0086c3] font-semibold">strengths</span>, and <span className="text-[#0086c3] font-semibold">passion</span>.
              </p>

              {/* Quote Section */}
              <div className="mt-16 pt-16 border-t border-[#0086c3]/10">
                <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border-2 border-[#0086c3]/10">
                  <p className="text-lg md:text-xl text-foreground italic leading-relaxed mb-4">
                    "Life is all about satisfaction. We help children lead successful and satisfied lives by connecting their <span className="text-[#0086c3] font-semibold not-italic">talent</span>, <span className="text-[#0086c3] font-semibold not-italic">interest</span>, and <span className="text-[#0086c3] font-semibold not-italic">passion</span>."
                  </p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#0086c3] to-[#00a8e8] mx-auto mb-4" />
                  <p className="text-muted text-sm">
                    On Ganimi, students discover their natural abilities, motivations, and behavioral traits — so they can make decisions today that lead to a future they'll love.
                  </p>
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
