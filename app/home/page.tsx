'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface LifeStage {
  id: string
  theme: string
  question: string
  emotionalStatement: string
  backgroundTone: string
  icon: JSX.Element
  accentColor: string
}

const lifeStages: LifeStage[] = [
  {
    id: 'birth',
    theme: 'Infinite potential',
    question: 'Do you believe every child is naturally talented at something?',
    emotionalStatement: 'When your child was born, you believed they could become anything.',
    backgroundTone: 'warm-cream',
    accentColor: '#FFB74D',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: 'early-childhood',
    theme: 'Exploration',
    question: "Do you know what your child's strongest talent actually is today?",
    emotionalStatement: 'They play with blocks longer. They ask more questions about animals. Are you noticing?',
    backgroundTone: 'soft-blue',
    accentColor: '#64B5F6',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'school-years',
    theme: 'Confusion between scores and ability',
    question: "Can you tell whether your child's interests are aligned with that talent?",
    emotionalStatement: 'They love art but score well in math. Which path do you trust?',
    backgroundTone: 'pale-gray',
    accentColor: '#9575CD',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 'teenage-years',
    theme: 'Changing interests',
    question: "Do you know which of your child's interests could grow into real passion over time?",
    emotionalStatement: "Last year it was coding. This year it's photography. What will stick?",
    backgroundTone: 'light-lavender',
    accentColor: '#BA68C8',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 'stream-selection',
    theme: 'Pressure vs insight',
    question: 'When choosing subjects or courses, do you know if they are developing talent, interest, or just improving marks?',
    emotionalStatement: 'Science because of marks? Or science because of curiosity?',
    backgroundTone: 'neutral-beige',
    accentColor: '#F06292',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    id: 'coaching',
    theme: 'Too many inputs, no clarity',
    question: 'If your child succeeds academically but feels unhappy later, would you know where the mismatch began?',
    emotionalStatement: 'Good grades. Top college. Great job. But something feels empty.',
    backgroundTone: 'subtle-green',
    accentColor: '#81C784',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 'early-career',
    theme: 'Late realization',
    question: "Would you like your child's career to be chosen by chance — or by years of understanding?",
    emotionalStatement: 'Ten years of education. One career choice. How much was planned?',
    backgroundTone: 'gentle-rose',
    accentColor: '#E57373',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
]

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set([0]))

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const element = section as HTMLElement
        const top = element.offsetTop
        const bottom = top + element.offsetHeight

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-section') || '0')
          setVisibleSections((prev) => {
            const newSet = new Set(prev)
            if (entry.isIntersecting) {
              newSet.add(index)
            }
            return newSet
          })
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    try {
      const response = await fetch('https://ganimi.app/api/waitlist/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      })
      if (response.status === 200) {
        setIsSubmitted(true)
        setEmail('')
      }
    } catch (error) {
      console.error('Failed to submit:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScrollY = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScrollY, { passive: true })
    return () => window.removeEventListener('scroll', handleScrollY)
  }, [])

  const getBackgroundColor = (tone: string) => {
    const colors: Record<string, string> = {
      'warm-cream': 'bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2]',
      'soft-blue': 'bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]',
      'pale-gray': 'bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0]',
      'light-lavender': 'bg-gradient-to-br from-[#F3E5F5] to-[#E1BEE7]',
      'neutral-beige': 'bg-gradient-to-br from-[#FFF8E1] to-[#FFECB3]',
      'subtle-green': 'bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9]',
      'gentle-rose': 'bg-gradient-to-br from-[#FCE4EC] to-[#F8BBD0]'
    }
    return colors[tone] || 'bg-gradient-to-br from-[#faf9f7] to-[#f5f4f2]'
  }

  const getParallaxOffset = (sectionIndex: number) => {
    if (typeof window === 'undefined') return 0
    const sectionHeight = window.innerHeight
    const sectionTop = sectionHeight * sectionIndex
    const offset = (scrollY - sectionTop) * 0.3
    return offset
  }

  const scrollToNextSection = (currentIndex: number) => {
    const nextIndex = currentIndex + 1
    if (nextIndex < lifeStages.length) {
      const sections = document.querySelectorAll('[data-section]')
      const nextSection = sections[nextIndex] as HTMLElement
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // Last section, scroll to final reveal
      const finalSection = document.querySelector('[data-section="' + lifeStages.length + '"]') as HTMLElement
      if (finalSection) {
        finalSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const renderStageElements = (stageId: string, index: number, isVisible: boolean, accentColor: string) => {
    const baseClass = `absolute pointer-events-none transition-all duration-1000 ease-out`
    const visibleClass = isVisible ? 'opacity-70 animate-pulse-slow' : 'opacity-0'
    
    switch(stageId) {
      case 'birth':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Baby bottle */}
            <div className={`${baseClass} ${visibleClass} top-[15%] left-[10%] md:left-[15%]`} style={{ transitionDelay: '400ms', animationDelay: '0s', animationDuration: '6s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">🍼</div>
            </div>
            {/* Baby */}
            <div className={`${baseClass} ${visibleClass} top-[20%] right-[15%] md:right-[20%]`} style={{ transitionDelay: '600ms', animationDelay: '1s', animationDuration: '7s' }}>
              <div className="text-7xl md:text-9xl lg:text-[10rem] drop-shadow-lg">👶</div>
            </div>
            {/* Pacifier */}
            <div className={`${baseClass} ${visibleClass} bottom-[25%] left-[15%] md:left-[18%]`} style={{ transitionDelay: '800ms', animationDelay: '2s', animationDuration: '5s' }}>
              <div className="text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">🍭</div>
            </div>
            {/* Star (potential) */}
            <div className={`${baseClass} ${visibleClass} bottom-[20%] right-[10%] md:right-[15%]`} style={{ transitionDelay: '1000ms', animationDelay: '1.5s', animationDuration: '6.5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">⭐</div>
            </div>
          </div>
        )
      
      case 'early-childhood':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Teddy bear */}
            <div className={`${baseClass} ${visibleClass} top-[18%] left-[12%] md:left-[15%]`} style={{ transitionDelay: '400ms', animationDelay: '0s', animationDuration: '5.5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">🧸</div>
            </div>
            {/* Toy car */}
            <div className={`${baseClass} ${visibleClass} top-[25%] right-[18%] md:right-[20%]`} style={{ transitionDelay: '600ms', animationDelay: '1s', animationDuration: '6s' }}>
              <div className="text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">🚗</div>
            </div>
            {/* Ball */}
            <div className={`${baseClass} ${visibleClass} bottom-[30%] left-[20%] md:left-[22%]`} style={{ transitionDelay: '800ms', animationDelay: '2s', animationDuration: '5s' }}>
              <div className="text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">⚽</div>
            </div>
            {/* Building blocks */}
            <div className={`${baseClass} ${visibleClass} bottom-[18%] right-[12%] md:right-[16%]`} style={{ transitionDelay: '1000ms', animationDelay: '1.5s', animationDuration: '6.5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">🧩</div>
            </div>
            {/* Crayons */}
            <div className={`${baseClass} ${visibleClass} top-[50%] left-[8%] md:left-[10%]`} style={{ transitionDelay: '1200ms', animationDelay: '0.5s', animationDuration: '7s' }}>
              <div className="text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">🖍️</div>
            </div>
          </div>
        )
      
      case 'school-years':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Books */}
            <div className={`${baseClass} ${visibleClass} top-[15%] left-[10%] md:left-[15%]`} style={{ transitionDelay: '400ms', animationDelay: '0s', animationDuration: '6s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">📚</div>
            </div>
            {/* Report card / Paper */}
            <div className={`${baseClass} ${visibleClass} top-[22%] right-[15%] md:right-[18%]`} style={{ transitionDelay: '600ms', animationDelay: '1s', animationDuration: '5.5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">📝</div>
            </div>
            {/* Backpack */}
            <div className={`${baseClass} ${visibleClass} bottom-[28%] left-[18%] md:left-[20%]`} style={{ transitionDelay: '800ms', animationDelay: '2s', animationDuration: '6.5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">🎒</div>
            </div>
            {/* A+ grade */}
            <div className={`${baseClass} ${visibleClass} bottom-[20%] right-[12%] md:right-[16%]`} style={{ transitionDelay: '1000ms', animationDelay: '1.5s', animationDuration: '5s' }}>
              <div className="text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">💯</div>
            </div>
            {/* Pencil */}
            <div className={`${baseClass} ${visibleClass} top-[50%] right-[8%] md:right-[12%]`} style={{ transitionDelay: '1200ms', animationDelay: '0.5s', animationDuration: '7s' }}>
              <div className="text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">✏️</div>
            </div>
          </div>
        )
      
      case 'teenage-years':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Lightbulb (ideas) */}
            <div className={`${baseClass} ${visibleClass} top-[18%] left-[12%] md:left-[15%]`} style={{ transitionDelay: '400ms', animationDelay: '0s', animationDuration: '5.5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">💡</div>
            </div>
            {/* Musical note */}
            <div className={`${baseClass} ${visibleClass} top-[25%] right-[15%] md:right-[18%]`} style={{ transitionDelay: '600ms', animationDelay: '1s', animationDuration: '6.5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">🎵</div>
            </div>
            {/* Sports */}
            <div className={`${baseClass} ${visibleClass} bottom-[30%] left-[15%] md:left-[18%]`} style={{ transitionDelay: '800ms', animationDelay: '2s', animationDuration: '6s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">🏀</div>
            </div>
            {/* Book/Reading */}
            <div className={`${baseClass} ${visibleClass} bottom-[22%] right-[10%] md:right-[15%]`} style={{ transitionDelay: '1000ms', animationDelay: '1.5s', animationDuration: '5s' }}>
              <div className="text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">📖</div>
            </div>
            {/* Art */}
            <div className={`${baseClass} ${visibleClass} top-[48%] left-[8%] md:left-[12%]`} style={{ transitionDelay: '1200ms', animationDelay: '0.5s', animationDuration: '7s' }}>
              <div className="text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">🎨</div>
            </div>
          </div>
        )
      
      case 'stream-selection':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Science - Flask */}
            <div className={`${baseClass} ${visibleClass} top-[15%] left-[10%] md:left-[12%]`} style={{ transitionDelay: '400ms', animationDelay: '0s', animationDuration: '6s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">🧪</div>
            </div>
            {/* Arts - Palette */}
            <div className={`${baseClass} ${visibleClass} top-[20%] right-[12%] md:right-[15%]`} style={{ transitionDelay: '600ms', animationDelay: '1s', animationDuration: '5.5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">🎨</div>
            </div>
            {/* Commerce - Money/Business */}
            <div className={`${baseClass} ${visibleClass} bottom-[28%] left-[15%] md:left-[18%]`} style={{ transitionDelay: '800ms', animationDelay: '2s', animationDuration: '6.5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">💼</div>
            </div>
            {/* Engineering - Gear */}
            <div className={`${baseClass} ${visibleClass} bottom-[22%] right-[10%] md:right-[14%]`} style={{ transitionDelay: '1000ms', animationDelay: '1.5s', animationDuration: '5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">⚙️</div>
            </div>
            {/* Medical */}
            <div className={`${baseClass} ${visibleClass} top-[48%] right-[8%] md:right-[10%]`} style={{ transitionDelay: '1200ms', animationDelay: '0.5s', animationDuration: '7s' }}>
              <div className="text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">🩺</div>
            </div>
            {/* Computer/Tech */}
            <div className={`${baseClass} ${visibleClass} bottom-[45%] left-[8%] md:left-[10%]`} style={{ transitionDelay: '1400ms', animationDelay: '2.5s', animationDuration: '6s' }}>
              <div className="text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">💻</div>
            </div>
          </div>
        )
      
      case 'coaching':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Stack of books */}
            <div className={`${baseClass} ${visibleClass} top-[18%] left-[12%] md:left-[15%]`} style={{ transitionDelay: '400ms', animationDelay: '0s', animationDuration: '6s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">📚</div>
            </div>
            {/* Certificate */}
            <div className={`${baseClass} ${visibleClass} top-[24%] right-[15%] md:right-[18%]`} style={{ transitionDelay: '600ms', animationDelay: '1s', animationDuration: '5.5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">📜</div>
            </div>
            {/* Chart/Growth */}
            <div className={`${baseClass} ${visibleClass} bottom-[30%] left-[18%] md:left-[20%]`} style={{ transitionDelay: '800ms', animationDelay: '2s', animationDuration: '6.5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">📊</div>
            </div>
            {/* Calendar */}
            <div className={`${baseClass} ${visibleClass} bottom-[20%] right-[12%] md:right-[16%]`} style={{ transitionDelay: '1000ms', animationDelay: '1.5s', animationDuration: '5s' }}>
              <div className="text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">📅</div>
            </div>
            {/* Laptop */}
            <div className={`${baseClass} ${visibleClass} top-[50%] left-[8%] md:left-[10%]`} style={{ transitionDelay: '1200ms', animationDelay: '0.5s', animationDuration: '7s' }}>
              <div className="text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">💻</div>
            </div>
          </div>
        )
      
      case 'early-career':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Briefcase */}
            <div className={`${baseClass} ${visibleClass} top-[18%] left-[12%] md:left-[15%]`} style={{ transitionDelay: '400ms', animationDelay: '0s', animationDuration: '6s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">💼</div>
            </div>
            {/* Clock/Time */}
            <div className={`${baseClass} ${visibleClass} top-[24%] right-[15%] md:right-[18%]`} style={{ transitionDelay: '600ms', animationDelay: '1s', animationDuration: '5.5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">⏰</div>
            </div>
            {/* Confused face */}
            <div className={`${baseClass} ${visibleClass} bottom-[30%] left-[18%] md:left-[20%]`} style={{ transitionDelay: '800ms', animationDelay: '2s', animationDuration: '6.5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">😕</div>
            </div>
            {/* Question mark */}
            <div className={`${baseClass} ${visibleClass} bottom-[22%] right-[12%] md:right-[16%]`} style={{ transitionDelay: '1000ms', animationDelay: '1.5s', animationDuration: '5s' }}>
              <div className="text-6xl md:text-8xl lg:text-9xl drop-shadow-lg">❓</div>
            </div>
            {/* Thinking */}
            <div className={`${baseClass} ${visibleClass} top-[50%] right-[8%] md:right-[10%]`} style={{ transitionDelay: '1200ms', animationDelay: '0.5s', animationDuration: '7s' }}>
              <div className="text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">🤔</div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Header - Minimal */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#0086c3]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image 
            src="/logo.png" 
            alt="Ganimi" 
            width={120} 
            height={40}
            className="h-8 w-auto"
          />
          <div className="h-8 w-1 bg-gradient-to-b from-[#0086c3] to-[#00a8e8] rounded-full" />
        </div>
      </header>

      {/* Scroll Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {lifeStages.map((stage, index) => (
          <div
            key={index}
            className={`w-1.5 rounded-full transition-all duration-500 ${
              activeSection === index 
                ? 'h-16 shadow-lg' 
                : 'h-12 opacity-30'
            }`}
            style={{ 
              backgroundColor: activeSection === index ? '#0086c3' : '#b0d4e8',
              boxShadow: activeSection === index ? '0 0 10px rgba(0, 134, 195, 0.5)' : 'none'
            }}
          />
        ))}
      </div>

      {/* Life Stage Sections */}
      {lifeStages.map((stage, index) => (
        <section
          key={stage.id}
          data-section={index}
          className={`min-h-screen flex items-center justify-center px-6 py-24 ${getBackgroundColor(stage.backgroundTone)} transition-all duration-1000 relative overflow-hidden`}
        >
          {/* Decorative Background Circle */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              transform: `translateY(${getParallaxOffset(index)}px)`,
            }}
          >
            <div 
              className="w-[600px] h-[600px] rounded-full opacity-20 blur-3xl transition-all duration-1000"
              style={{ backgroundColor: stage.accentColor }}
            />
          </div>

          {/* Contextual Visual Elements */}
          {renderStageElements(stage.id, index, visibleSections.has(index), stage.accentColor)}

          <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10">
            {/* Icon - Appears from above */}
            <div 
              className={`flex justify-center transition-all duration-1200 ease-out ${
                visibleSections.has(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 -translate-y-12 scale-75'
              }`}
            >
              <div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-110 border-2"
                style={{ 
                  backgroundColor: 'rgba(0, 134, 195, 0.08)',
                  borderColor: '#0086c3',
                  color: '#0086c3',
                  boxShadow: '0 8px 30px rgba(0, 134, 195, 0.15)'
                }}
              >
                {stage.icon}
              </div>
            </div>

            {/* Emotional Statement - Fades in */}
            <div className={`space-y-8 transition-all duration-1000 ease-out ${
              visibleSections.has(index)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: visibleSections.has(index) ? '300ms' : '0ms' }}
            >
              <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mx-auto">
                {stage.emotionalStatement}
              </p>
            </div>

            {/* Question - Slides in from below */}
            <div 
              className={`space-y-8 transition-all duration-1200 ease-out ${
                visibleSections.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: visibleSections.has(index) ? '600ms' : '0ms' }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-foreground leading-tight max-w-3xl mx-auto px-4">
                {stage.question}
              </h2>

              {/* Yes/No Buttons */}
              <div 
                className={`flex items-center justify-center gap-4 transition-all duration-1000 ease-out ${
                  visibleSections.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: visibleSections.has(index) ? '900ms' : '0ms' }}
              >
                <button
                  onClick={() => scrollToNextSection(index)}
                  className="group relative px-8 md:px-12 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-[#0086c3] to-[#00a8e8] text-white"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 134, 195, 0.3)'
                  }}
                >
                  <span className="relative z-10">Yes</span>
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white"
                  />
                </button>
                <button
                  onClick={() => scrollToNextSection(index)}
                  className="px-8 md:px-12 py-4 rounded-full border-2 border-[#0086c3] font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white/80 backdrop-blur-sm text-[#0086c3] hover:bg-[#0086c3] hover:text-white"
                >
                  No
                </button>
              </div>
            </div>

            {/* Decorative Line */}
            <div 
              className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#0086c3] to-[#00a8e8] transition-all duration-1000 ease-out ${
                visibleSections.has(index)
                  ? 'opacity-100 scale-x-100'
                  : 'opacity-0 scale-x-0'
              }`}
              style={{ 
                transitionDelay: visibleSections.has(index) ? '1200ms' : '0ms',
                boxShadow: '0 2px 8px rgba(0, 134, 195, 0.3)'
              }}
            />
          </div>
        </section>
      ))}

      {/* Final Reveal Section */}
      <section 
        data-section={lifeStages.length}
        className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-br from-white via-[#e6f4f9] to-[#cce7f2] relative overflow-hidden"
      >
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(0, 134, 195, 0.15) 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(0, 168, 232, 0.15) 0%, transparent 70%)', animationDelay: '2s' }} />
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-16 relative z-10">
          {/* Icon cluster */}
          <div className={`flex justify-center gap-4 transition-all duration-1200 ease-out ${
            visibleSections.has(lifeStages.length)
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-75'
          }`}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0086c3] to-[#00a8e8] flex items-center justify-center text-white shadow-xl" style={{ boxShadow: '0 8px 25px rgba(0, 134, 195, 0.3)' }}>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00a8e8] to-[#0086c3] flex items-center justify-center text-white shadow-xl" style={{ marginTop: '2rem', boxShadow: '0 8px 25px rgba(0, 168, 232, 0.3)' }}>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0086c3] to-[#006b9f] flex items-center justify-center text-white shadow-xl" style={{ boxShadow: '0 8px 25px rgba(0, 134, 195, 0.3)' }}>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          {/* Reflective Content */}
          <div className={`space-y-12 transition-all duration-1000 ease-out ${
            visibleSections.has(lifeStages.length)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: visibleSections.has(lifeStages.length) ? '400ms' : '0ms' }}
          >
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
                Talent, interest, and passion leave patterns over time.
              </p>
              <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mx-auto">
                Decisions don't have to be guesses.
              </p>
              <p className="text-base md:text-lg text-muted/80 font-light leading-relaxed max-w-xl mx-auto">
                Clarity can be built, not forced.
              </p>
            </div>

            {/* Divider */}
            <div 
              className={`w-32 h-1 bg-gradient-to-r from-[#0086c3] via-[#00a8e8] to-[#0086c3] mx-auto my-16 rounded-full transition-all duration-1000 ${
                visibleSections.has(lifeStages.length)
                  ? 'opacity-100 scale-x-100'
                  : 'opacity-0 scale-x-0'
              }`}
              style={{ 
                transitionDelay: visibleSections.has(lifeStages.length) ? '800ms' : '0ms',
                boxShadow: '0 4px 15px rgba(0, 134, 195, 0.4)'
              }}
            />

            {/* CTA Section */}
            <div 
              className={`space-y-8 transition-all duration-1000 ease-out ${
                visibleSections.has(lifeStages.length)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: visibleSections.has(lifeStages.length) ? '1000ms' : '0ms' }}
            >
              <p className="text-base md:text-lg text-muted font-light">
                Track your child's journey
              </p>

              {!isSubmitted ? (
                <form 
                  onSubmit={handleSubmit} 
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-6 py-4 rounded-full bg-white/90 backdrop-blur-sm border-2 border-[#0086c3]/30 text-foreground placeholder:text-muted/60 focus:outline-none focus:border-[#0086c3] focus:shadow-lg transition-all duration-300 text-center sm:text-left"
                    style={{ boxShadow: '0 2px 10px rgba(0, 134, 195, 0.1)' }}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0086c3] to-[#00a8e8] text-white font-semibold hover:from-[#006b9f] hover:to-[#0086c3] hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap transform hover:scale-105"
                    style={{ boxShadow: '0 8px 25px rgba(0, 134, 195, 0.3)' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Join waitlist'}
                  </button>
                </form>
              ) : (
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-[#e6f4f9] to-[#cce7f2] border-2 border-[#0086c3] shadow-lg">
                  <svg className="w-5 h-5 text-[#0086c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#006b9f] font-semibold">Thank you. We'll be in touch soon.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
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
