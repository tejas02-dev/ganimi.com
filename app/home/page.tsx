'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'

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
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [surveyComplete, setSurveyComplete] = useState(false)

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
      <Navbar onGetStartedClick={scrollToSurvey} />

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

      {/* Our Concept Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Our <span className="bg-gradient-to-r from-[#0086c3] to-[#00bcd4] bg-clip-text text-transparent">Concept</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding something begins with exposure, grows through engagement, evolves with tracking and monitoring, and culminates in success
            </p>
          </div>

          {/* Concept Image */}
          <div className="flex justify-center items-center my-8 md:my-12">
            <div className="relative w-full max-w-4xl mx-auto">
              <Image
                src="/exposure.png"
                alt="Our Concept - Exposure, Engage, Track, Monitor, Success"
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Description Box */}
          <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-[#0086c3]/10 shadow-lg">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
                <span className="font-semibold text-[#0086c3]">Ganimi connects</span> students with opportunities to discover their path through structured exposure, meaningful engagement, comprehensive tracking, continuous monitoring, and ultimately, achieving success in their chosen fields.
              </p>
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
