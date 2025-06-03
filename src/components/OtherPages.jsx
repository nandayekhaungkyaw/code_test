"use client"

import { ArrowRight } from "lucide-react"

export default function OtherPages() {
  const navigationItems = [
    {
      title: "About Us",
      description:
        "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
      link: "/about",
    },
    {
      title: "Academics",
      description:
        "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
      link: "/academics",
    },
    {
      title: "Student Life",
      description:
        "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
      link: "/student-life",
    },
    {
      title: "Admissions",
      description:
        "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
      link: "/admissions",
    },
  ]

  return (
    <section className="py-16 px-4 font-outfit">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 text-[18px] bg-white border-2 border-gray-800 rounded-md text-gray-800 font-medium">
              Explore More
            </span>
          </div>

          <h2 className="md:text-[58px] text-3xl font-bold text-gray-900 mb-6 font-railway">Navigate through our Pages</h2>

          <p className="text-gray-600 text-[20px] max-w-4xl mx-auto leading-relaxed">
            Your gateway to discovering a wealth of valuable information about our kindergarten school. Feel free to
            explore and learn more about the enriching experiences that await your child at our kindergarten school
          </p>
        </div>

        {/* Navigation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {navigationItems.map((item, index) => (
            <div key={index} className="bg-white border-4 border-gray-800 rounded-2xl p-8">
              {/* Title */}
              <h3 className="md:text-[48px] text-2xl font-bold text-gray-900 mb-6 font-railway">{item.title}</h3>

              {/* Decorative Line with Circles */}
              <div className="flex items-center mb-8 flex-row ">
                <div className="w-4 h-4 bg-white border-2   rounded-full"></div>
      {[...Array(6)].map((_, i) => (
  <div
    key={i}
    className={`${i === 5 ? "ml-2" : "mr-2"} flex-1 px-1 h-2 bg-[#FFBE99] flex items-center justify-center`}
  >
    <div className="w-full h-0.5 bg-gray-800"></div>
  </div>
))}

                

                
                <div className="w-4 h-4 bg-white border-2 rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8 text-[20px]">{item.description}</p>

              {/* Learn More Button */}
              <button style={{ boxShadow: '6px 6px 0 rgb(30, 30, 30)' }} className="w-full bg-[#FFDECC] text-[20px] hover:bg-orange-300 border-2 border-gray-800 rounded-md py-4 px-6 flex items-center justify-center gap-2 font-semibold text-gray-900 transition-colors">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
