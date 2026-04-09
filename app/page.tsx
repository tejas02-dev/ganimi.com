'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import { GANIMI_PLAY_STORE_URL } from '../lib/links'

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
  const [activeBenefitTab, setActiveBenefitTab] = useState<'students' | 'parents' | 'vendors'>('students')

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
    const productSection = document.getElementById('product-section')
    if (productSection) productSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const progress = ((currentQuestion + 1) / surveyQuestions.length) * 100

  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar onGetStartedClick={scrollToSurvey} />

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-r from-[#eef2ff] via-[#f5f7ff] to-[#dbeafe]"
      >
        <div className="absolute -top-28 -right-28 w-[520px] h-[520px] rounded-full bg-[#a78bfa]/35 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-14 md:pt-32 lg:pb-16">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 border border-[#4f46e5]/10 text-[#4f46e5] text-xs font-semibold backdrop-blur">
                The Future of Learning
              </div>

              <h1 className="mt-6 text-5xl md:text-6xl font-display font-bold leading-[1.05] text-[#0b1220]">
                Fuel Your Future with
                <br />
                <span className="bg-gradient-to-r from-[#4f46e5] to-[#00a8e8] bg-clip-text text-transparent">
                  Clarity and
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#4f46e5] to-[#00a8e8] bg-clip-text text-transparent">
                  Growth.
                </span>
              </h1>

              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                The student development platform that aligns your passion with purpose. Track
                growth, discover career paths, and connect with mentors.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link
                  href={GANIMI_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r text-center from-[#4f46e5] to-[#2563eb] text-white font-semibold shadow-lg hover:shadow-xl transition-shadow text-sm md:text-base"
                >
                  Download App
                </Link>

                <button
                  type="button"
                  onClick={scrollToSurvey}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-white border border-[#4f46e5]/20 text-[#4f46e5] font-semibold shadow-sm hover:bg-[#f5f3ff] transition-colors text-sm md:text-base"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute -top-10 -right-12 w-72 h-72 rounded-full bg-[#4f46e5]/10 blur-3xl" />

              <div className="relative bg-white rounded-[28px] p-6 shadow-xl border border-white/70 transform rotate-6">
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-[#4f46e5] flex items-center justify-center shadow">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 5 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-5z" />
                  </svg>
                </div>

                <div className="rounded-[18px] overflow-hidden bg-gray-100">
                  <Image
                    src="/Downloads/Computer Skills.jpeg"
                    alt="Learning with mentors"
                    width={640}
                    height={420}
                    className="w-full h-[320px] object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Core Ecosystem Section */}
      <section className="md:py-16 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mt-10 md:mt-12">
            <div className="text-[#4f46e5] text-xs md:text-sm font-semibold tracking-widest uppercase">
              Core Ecosystem
            </div>
            <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
              Curated tools designed to elevate your academic and professional trajectory.
            </p>
          </div>

          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Verified Mentors */}
            <div className="bg-[#eef2ff] rounded-3xl px-8 py-8 shadow-sm border border-[#e5e7eb]/50 relative overflow-hidden">
              <div className="text-[#4f46e5]">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2l3 3 4 .5-1 4 2.5 3.5-3.5 2-1 4-4-1-4 1-1-4-3.5-2L4 9.5l2.5-3.5-1-4 4-.5 3-3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-5"
                  />
                </svg>
              </div>

              <h3 className="text-xl md:text-2xl font-display font-bold text-[#0b1220] mt-5 mb-2">
                Verified Mentors
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Connect with industry leaders and academic pioneers who align with your specific
                goals. High-impact guidance, directly at your fingertips.
              </p>

              <div className="mt-6 flex items-center">
                <div className="flex -space-x-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-[#dbeafe] flex items-center justify-center border-2 border-[#eef2ff]">
                    <svg className="w-5 h-5 text-[#1d4ed8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#ede9fe] flex items-center justify-center border-2 border-[#eef2ff]">
                    <svg className="w-5 h-5 text-[#6d28d9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-xs border-2 border-[#eef2ff]">
                    +50
                  </div>
                </div>
              </div>
            </div>

            {/* Career Map */}
            <div className="bg-gradient-to-br from-[#2b1b7a] to-[#2a1c6d] rounded-3xl px-8 py-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-8 right-8 text-white/25">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 19a2 2 0 0 1 2-2h14"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 0-2 2V5z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6" />
                </svg>
              </div>

              <h3 className="text-xl md:text-2xl font-display font-bold text-white mt-2 mb-2">
                Career Map
              </h3>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                Navigate the complex path between education and your dream career with interactive
                milestones.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Our Product Section */}
      <section id="product-section" className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0b1220]">
            Our Product
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
            Empowering the next generation of ambitious scholars through a holistic approach
            to development.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* COP */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col">
              <div className="w-11 h-11 rounded-full bg-[#eef2ff] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7a4 4 0 108 0 4 4 0 00-8 0z" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-display font-bold text-[#0b1220]">COP</h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Community of Practice designed to foster collaborative learning and
                professional networking among top-tier academic cohorts.
              </p>
              <div className="mt-5 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/Downloads/COP.jpeg"
                  alt="COP"
                  width={640}
                  height={360}
                  className="w-full h-28 object-cover"
                  priority
                />
              </div>
            </div>

            {/* GUT */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col">
              <div className="w-11 h-11 rounded-full bg-[#ede9fe] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#6d28d9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4l3 2" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-display font-bold text-[#0b1220]">GUT</h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Personalized grit and resilience training programs that prepare scholars
                for high-pressure academic environments.
              </p>
              <div className="mt-5 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/Downloads/GUT.jpeg"
                  alt="GUT"
                  width={640}
                  height={360}
                  className="w-full h-28 object-cover"
                  priority
                />
              </div>
            </div>

            {/* Performing Arts */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col">
              <div className="w-11 h-11 rounded-full bg-[#cffafe] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 19a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-display font-bold text-[#0b1220]">
                Performing Arts
              </h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Nurturing creativity and public speaking through world-class instruction and
                elite stage opportunities.
              </p>
              <div className="mt-5 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/Downloads/Performing%20Arts.jpeg"
                  alt="Performing Arts"
                  width={640}
                  height={360}
                  className="w-full h-28 object-cover"
                  priority
                />
              </div>
            </div>

            {/* Sports */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col">
              <div className="w-11 h-11 rounded-full bg-[#ffe4e6] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7l10 10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-display font-bold text-[#0b1220]">Sports</h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Advanced athletic development programs focused on leadership, teamwork, and
                physical excellence.
              </p>
              <div className="mt-5 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/Downloads/Sports.jpeg"
                  alt="Sports"
                  width={640}
                  height={360}
                  className="w-full h-28 object-cover"
                  priority
                />
              </div>
            </div>

            {/* Academics */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col lg:col-span-1">
              <div className="w-11 h-11 rounded-full bg-[#e0f2fe] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 19a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 11h8" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-display font-bold text-[#0b1220]">Academics</h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Rigorous scholarly pursuit supported by personalized mentoring and cutting-edge
                research methodologies.
              </p>
              <div className="mt-5 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/Downloads/Academics.jpeg"
                  alt="Academics"
                  width={640}
                  height={360}
                  className="w-full h-28 object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mt-10 bg-gradient-to-br from-[#4f46e5] to-[#1d4ed8] rounded-3xl p-7 text-white shadow-lg">
            <div className="text-2xl font-display font-bold">Start Your Journey</div>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Download Ganimi today and take control of your academic future.
            </p>

            <Link
              href={GANIMI_PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block w-full text-center rounded-2xl bg-white text-[#1d4ed8] font-semibold py-3"
            >
              Download App
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-14 md:py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#4f46e5] text-xs md:text-sm font-semibold tracking-widest uppercase">
            Ecosystem
          </div>

          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-[#0b1220] leading-tight">
            Who benefits from Ganimi?
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
            A unified platform designed to bridge the gap between academic ambition and real-world opportunities.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex w-full max-w-[520px] items-center justify-between rounded-full bg-[#eef2ff] p-1">
              <button
                type="button"
                onClick={() => setActiveBenefitTab('students')}
                className={`flex-1 rounded-full py-2 text-center text-sm font-semibold transition-colors ${
                  activeBenefitTab === 'students'
                    ? 'bg-white text-[#4f46e5] shadow-sm'
                    : 'text-gray-600 hover:text-[#4f46e5]'
                }`}
              >
                Students
              </button>
              <button
                type="button"
                onClick={() => setActiveBenefitTab('parents')}
                className={`flex-1 rounded-full py-2 text-center text-sm font-semibold transition-colors ${
                  activeBenefitTab === 'parents'
                    ? 'bg-white text-[#4f46e5] shadow-sm'
                    : 'text-gray-600 hover:text-[#4f46e5]'
                }`}
              >
                Parents
              </button>
              <button
                type="button"
                onClick={() => setActiveBenefitTab('vendors')}
                className={`flex-1 rounded-full py-2 text-center text-sm font-semibold transition-colors ${
                  activeBenefitTab === 'vendors'
                    ? 'bg-white text-[#4f46e5] shadow-sm'
                    : 'text-gray-600 hover:text-[#4f46e5]'
                }`}
              >
                Vendors
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {activeBenefitTab === 'students' && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
                {/* Left: Discover interests */}
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 p-8 lg:col-span-7">
                  <div className="absolute -right-28 -bottom-28 h-72 w-72 rounded-full bg-[#eef2ff] opacity-70" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#eef2ff] flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#4f46e5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>

                    <h3 className="mt-6 text-lg md:text-xl font-display font-bold text-[#0b1220]">
                      Discover interests
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      Uncover your true passions through AI-driven assessments and real-world project simulations.
                    </p>

                    <div className="mt-6">
                      <Link
                        href={GANIMI_PLAY_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f46e5] hover:underline"
                      >
                        Get started <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right: Track progress */}
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#2b2aa6] to-[#2b1b7a] p-8 shadow-lg lg:col-span-5">
                  <div className="absolute -left-6 bottom-0 h-28 w-28 rounded-full bg-white/10" />
                  <div className="absolute right-8 bottom-6 h-20 w-28 rounded-2xl bg-white/10 overflow-hidden ring-1 ring-white/10">
                    <Image
                      src="/Downloads/Computer Skills.jpeg"
                      alt="Mentors"
                      width={320}
                      height={200}
                      className="h-full w-full object-cover opacity-90"
                      priority
                    />
                  </div>

                  {/* Vertical markers */}
                  <div className="absolute left-10 bottom-4 flex flex-col gap-4">
                    <div className="h-14 w-8 rounded-2xl bg-[#4f46e5]/40" />
                    <div className="h-14 w-8 rounded-2xl bg-[#7c3aed]/40" />
                  </div>

                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 19a2 2 0 0 1 2-2h14"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 0-2 2V5z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6" />
                      </svg>
                    </div>

                    <h3 className="mt-6 text-lg md:text-xl font-display font-bold text-white">
                      Track progress
                    </h3>
                    <p className="mt-3 text-sm text-white/80 leading-relaxed">
                      Real-time visualization of your academic and extracurricular journey.
                    </p>
                  </div>
                </div>

                {/* Bottom: two small cards */}
                <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="rounded-3xl bg-[#eef2ff] shadow-sm border border-[#e5e7eb]/40 p-7">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#4f46e5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      </svg>
                    </div>
                    <h4 className="mt-5 text-lg font-display font-bold text-[#0b1220]">
                      Explore fields
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      Dive into over 50+ professional sectors with curated industry insights.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-[#f3e8ff] shadow-sm border border-[#e5e7eb]/40 p-7">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#6d28d9]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
                      </svg>
                    </div>
                    <h4 className="mt-5 text-lg font-display font-bold text-[#0b1220]">
                      Better career choices
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      Make informed decisions with data-backed career paths and mentor guidance.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeBenefitTab === 'parents' && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
                {/* Left: See clear guidance */}
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 p-8 lg:col-span-7">
                  <div className="absolute -right-28 -bottom-28 h-72 w-72 rounded-full bg-[#eef2ff] opacity-70" />
                  <div className="w-12 h-12 rounded-full bg-[#eef2ff] flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#4f46e5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 01-8 0 4 4 0 018 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11c-4.418 0-8 1.79-8 4v3h16v-3c0-2.21-3.582-4-8-4z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg md:text-xl font-display font-bold text-[#0b1220]">
                    See clear guidance
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Understand your child&apos;s strengths with simpler signals and actionable insights.
                  </p>

                  <div className="mt-6">
                    <Link
                      href={GANIMI_PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f46e5] hover:underline"
                    >
                      Get started <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                {/* Right: Support milestones */}
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#2b2aa6] to-[#2b1b7a] p-8 shadow-lg lg:col-span-5">
                  <div className="absolute -left-6 bottom-0 h-28 w-28 rounded-full bg-white/10" />
                  <div className="absolute right-8 bottom-6 h-20 w-28 rounded-2xl bg-white/10 overflow-hidden ring-1 ring-white/10">
                    <Image
                      src="/Downloads/Life Skills.jpeg"
                      alt="Learning support"
                      width={320}
                      height={200}
                      className="h-full w-full object-cover opacity-90"
                      priority
                    />
                  </div>

                  <div className="absolute left-10 bottom-4 flex flex-col gap-4">
                    <div className="h-14 w-8 rounded-2xl bg-[#4f46e5]/40" />
                    <div className="h-14 w-8 rounded-2xl bg-[#7c3aed]/40" />
                  </div>

                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    <h3 className="mt-6 text-lg md:text-xl font-display font-bold text-white">
                      Support milestones
                    </h3>
                    <p className="mt-3 text-sm text-white/80 leading-relaxed">
                      Get updates that help you encourage the right learning steps at the right time.
                    </p>
                  </div>
                </div>

                {/* Bottom: two small cards */}
                <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="rounded-3xl bg-[#eef2ff] shadow-sm border border-[#e5e7eb]/40 p-7">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#4f46e5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="mt-5 text-lg font-display font-bold text-[#0b1220]">Right-time reminders</h4>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      Simple nudges to keep you aligned with your child&apos;s progress.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-[#f3e8ff] shadow-sm border border-[#e5e7eb]/40 p-7">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#6d28d9]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4h.01" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10a8 8 0 10-16 0c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <h4 className="mt-5 text-lg font-display font-bold text-[#0b1220]">Better decisions</h4>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      Make choices with confidence using clearer learning signals.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeBenefitTab === 'vendors' && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
                {/* Left: Reach the right students */}
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 p-8 lg:col-span-7">
                  <div className="absolute -right-28 -bottom-28 h-72 w-72 rounded-full bg-[#eef2ff] opacity-70" />
                  <div className="w-12 h-12 rounded-full bg-[#eef2ff] flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#4f46e5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7a4 4 0 100-8 4 4 0 000 8z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 8v6" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M23 11h-6" />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-lg md:text-xl font-display font-bold text-[#0b1220]">
                    Reach the right students
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Connect with students whose interests match what you offer.
                  </p>
                </div>

                {/* Right: Manage your programs */}
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#2b2aa6] to-[#2b1b7a] p-8 shadow-lg lg:col-span-5">
                  <div className="absolute -left-6 bottom-0 h-28 w-28 rounded-full bg-white/10" />
                  <div className="absolute right-8 bottom-6 h-20 w-28 rounded-2xl bg-white/10 overflow-hidden ring-1 ring-white/10">
                    <Image
                      src="/Downloads/Computer Skills.jpeg"
                      alt="Program management"
                      width={320}
                      height={200}
                      className="h-full w-full object-cover opacity-90"
                      priority
                    />
                  </div>

                  <div className="absolute left-10 bottom-4 flex flex-col gap-4">
                    <div className="h-14 w-8 rounded-2xl bg-[#4f46e5]/40" />
                    <div className="h-14 w-8 rounded-2xl bg-[#7c3aed]/40" />
                  </div>

                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 13h3" />
                      </svg>
                    </div>

                    <h3 className="mt-6 text-lg md:text-xl font-display font-bold text-white">
                      Manage your programs
                    </h3>
                    <p className="mt-3 text-sm text-white/80 leading-relaxed">
                      Handle bookings, batches, and attendance with an organized dashboard.
                    </p>
                  </div>
                </div>

                {/* Bottom: two small cards */}
                <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="rounded-3xl bg-[#eef2ff] shadow-sm border border-[#e5e7eb]/40 p-7">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#4f46e5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l5-5 5 5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l5 5 5-5" />
                      </svg>
                    </div>
                    <h4 className="mt-5 text-lg font-display font-bold text-[#0b1220]">Program visibility</h4>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      Let the right students discover you based on matching interests.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-[#f3e8ff] shadow-sm border border-[#e5e7eb]/40 p-7">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#6d28d9]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="mt-5 text-lg font-display font-bold text-[#0b1220]">Faster updates</h4>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      Update schedules and batches quickly without confusing students.
                    </p>
                  </div>
                </div>
              </div>
            )}
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
