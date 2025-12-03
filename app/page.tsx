'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    const response = await fetch('https://ganimi.app/api/v1/waitlist/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    if (response.status === 200) {
      setIsSubmitted(true)
      setEmail('')
      setIsSubmitting(false)
    } else {
      alert('Failed to submit waitlist')
      setIsSubmitting(false)
    }
  }

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Natural Abilities',
      description: 'Uncover innate talents and strengths that make each child unique.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Interests & Motivations',
      description: 'Discover what truly excites and drives them forward.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Learning Style',
      description: 'Understand behavioural traits and how they learn best.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: 'Aligned Career Paths',
      description: 'Match them with careers that fit who they truly are.'
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,188,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,188,212,0.08) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="py-5 px-6 md:px-12 animate-fade-in">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Image 
              src="/logo.png" 
              alt="Ganimi" 
              width={200} 
              height={200}
              className="h-10 w-auto"
            />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Brand Title */}
            <div className="mb-6 animate-fade-in">
              <span className="text-2xl md:text-3xl font-display font-bold text-foreground">Ganimi.</span>
              <span className="text-2xl md:text-3xl font-display font-bold text-aqua ml-2">Coming Soon</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-surface-light shadow-sm mb-8 animate-fade-in animation-delay-200">
              <span className="w-2 h-2 rounded-full bg-aqua" />
              <span className="text-muted text-sm font-medium">For Students & Families</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-400">
              Guide children toward careers<br />
              <span className="text-aqua">based on who they truly are.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-600">
              Most children choose careers based on pressure, trends, or fear. 
              We help them choose based on <span className="text-foreground font-medium">self-awareness</span>, <span className="text-foreground font-medium">strengths</span>, and <span className="text-foreground font-medium">passion</span>.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 animate-fade-in-up animation-delay-800">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-surface rounded-2xl p-6 border border-surface-light shadow-sm hover:shadow-md hover:border-aqua/20 transition-all duration-300 text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-aqua/10 flex items-center justify-center text-aqua mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="animate-fade-in-up animation-delay-1000">
              <p className="text-aqua-dark font-medium mb-6">
                Be the first to experience the future of career discovery
              </p>

              {/* Email Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-5 py-3.5 rounded-full bg-surface border border-surface-light text-foreground placeholder:text-muted focus:outline-none focus:border-aqua focus:shadow-md transition-all duration-300"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-full bg-aqua text-white font-semibold hover:bg-aqua-dark transition-all duration-300 hover:shadow-lg hover:shadow-aqua/25 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </form>
              ) : (
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-aqua/10 border border-aqua/30">
                  <svg className="w-5 h-5 text-aqua-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-aqua-dark font-medium">You're on the list! We'll notify you soon.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="px-6 pb-8 animate-fade-in-up animation-delay-1200">
          <div className="max-w-3xl mx-auto bg-surface-light rounded-2xl p-8 md:p-10 text-center">
            <p className="text-lg md:text-xl text-foreground italic leading-relaxed mb-4">
              "Life is all about satisfaction. We help children lead successful and satisfied lives by connecting their <span className="text-aqua-dark font-semibold not-italic">talent</span>, <span className="text-aqua-dark font-semibold not-italic">interest</span>, and <span className="text-aqua-dark font-semibold not-italic">passion</span>."
            </p>
            <div className="w-12 h-0.5 bg-aqua mx-auto mb-4" />
            <p className="text-muted text-sm">
              On Ganimi, students discover their natural abilities, motivations, and behavioral traits — so they can make decisions today that lead to a future they'll love.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-6 px-6">
          <p className="text-center text-muted text-sm">
            © {new Date().getFullYear()} Ganimi. Helping children discover their true path.
          </p>
        </footer>
      </div>
    </main>
  )
}
