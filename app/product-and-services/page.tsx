'use client'

import Navbar from '../components/Navbar'
import Image from 'next/image'

export default function ProductAndServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Categories Section */}
      <section className="pt-32 pb-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-white to-gray-50 min-h-screen">
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

          {/* Categories List - One per Row */}
          <div className="space-y-6 md:space-y-8">
            {/* Category 1: Academics */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0">
                  <Image
                    src="/Downloads/Academics.jpeg"
                    alt="Academics"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
                    Academics
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Comprehensive subject tutoring and personalized learning support to strengthen your child's academic foundation. 
                    Expert tutors help students excel in all subjects while building confidence and critical thinking skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Category 2: Sports */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0">
                  <Image
                    src="/Downloads/Sports.jpeg"
                    alt="Sports"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
                    Sports
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Professional coaching in various sports and physical activities to develop athleticism, teamwork, and discipline. 
                    Build physical fitness, motor skills, and a healthy competitive spirit through expert guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Category 3: COP */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0">
                  <Image
                    src="/Downloads/COP.jpeg"
                    alt="Career Orientation Program"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
                    COP - Career Orientation Program
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Structured career guidance program that helps students explore different career paths and discover their professional interests. 
                    Expert counselors provide insights into various industries and help align career choices with individual talents and passions.
                  </p>
                </div>
              </div>
            </div>

            {/* Category 4: GUT */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0">
                  <Image
                    src="/Downloads/GUT.jpeg"
                    alt="Glam Up Teen"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
                    GUT - Glam Up Teen
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Personal grooming and style development program designed to boost confidence and self-expression in teenagers. 
                    Learn about fashion, grooming, etiquette, and personal presentation skills in a fun and supportive environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Category 5: Computer Skills */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0">
                  <Image
                    src="/Downloads/Computer Skills.jpeg"
                    alt="Computer Skills"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
                    Computer Skills
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Comprehensive digital literacy and programming courses to prepare students for the technology-driven future. 
                    From basic computer skills to advanced coding, develop essential tech competencies that open doors to countless opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Category 6: Competitive Exams */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0">
                  <Image
                    src="/Downloads/Competetive Exams.jpeg"
                    alt="Competitive Exams"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
                    Competitive Exams
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Specialized test preparation and coaching for various competitive examinations and entrance tests. 
                    Expert instructors provide strategic guidance, practice materials, and personalized coaching to maximize performance and achieve success.
                  </p>
                </div>
              </div>
            </div>

            {/* Category 7: Life Skills */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0">
                  <Image
                    src="/Downloads/Life Skills.jpeg"
                    alt="Life Skills"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
                    Life Skills
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Essential life capabilities including communication, problem-solving, time management, and emotional intelligence. 
                    Develop practical skills that empower students to navigate challenges, build relationships, and succeed in all aspects of life.
                  </p>
                </div>
              </div>
            </div>

            {/* Category 8: Performing Arts */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0">
                  <Image
                    src="/Downloads/Performing Arts.jpeg"
                    alt="Performing Arts"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
                    Performing Arts
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Explore creativity through music, dance, drama, and theatrical arts with experienced instructors. 
                    Express yourself, build confidence on stage, and discover the joy of performance while developing artistic talents and appreciation.
                  </p>
                </div>
              </div>
            </div>

            {/* Category 9: EDP */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0">
                  <Image
                    src="/Downloads/EDP.jpeg"
                    alt="Entrepreneurship Development Program"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
                    EDP - Entrepreneurship Development Program
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Cultivate an entrepreneurial mindset and learn the fundamentals of business, innovation, and leadership. 
                    Develop critical thinking, creativity, and business acumen to turn ideas into reality and build the foundation for future success.
                  </p>
                </div>
              </div>
            </div>

            {/* Category 10: Adventure */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0">
                  <Image
                    src="/Downloads/Adventure.jpeg"
                    alt="Adventure"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
                    Adventure
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Outdoor activities and exploration programs that build resilience, teamwork, and a spirit of adventure. 
                    Experience nature, learn survival skills, and develop courage through carefully supervised adventure activities and expeditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Category 11: Upskilling */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-80 h-80 md:h-96 flex-shrink-0">
                  <Image
                    src="/Downloads/Upskilling.jpeg"
                    alt="Upskilling"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3">
                    Upskilling
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Modern skills training and certification programs in emerging fields and technologies. 
                    Stay ahead of the curve by learning in-demand skills that prepare students for future career opportunities and professional growth.
                  </p>
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

