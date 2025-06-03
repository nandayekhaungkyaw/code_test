"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function Faq() {
  const [openItems, setOpenItems] = useState([0]) // First item open by default

  const toggleItem = (index) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqData = [
    {
      question: "What are the school hours at Little Learners Academy?",
      answer:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      question: "Is there a uniform policy for students?",
      answer:
        "Yes, we have a simple uniform policy that includes comfortable clothing in our school colors. This helps create a sense of community and reduces morning decision-making for families.",
    },
    {
      question: "What extracurricular activities are available for students?",
      answer:
        "We offer a variety of activities including art classes, music lessons, sports programs, drama club, and STEM workshops. Activities vary by age group and season.",
    },
    {
      question: "What extracurricular activities are available for students?",
      answer:
        "We offer a variety of activities including art classes, music lessons, sports programs, drama club, and STEM workshops. Activities vary by age group and season.",
    },
    {
      question: "How do you handle food allergies and dietary restrictions?",
      answer:
        "We take food allergies very seriously and work closely with families to ensure safe meal planning. Our kitchen staff is trained in allergy management and we maintain detailed records of all dietary restrictions.",
    },
    {
      question: "What is the teacher-to-student ratio at Little Learners Academy?",
      answer:
        "We maintain small class sizes with a 1:8 teacher-to-student ratio for optimal individual attention. This allows our educators to provide personalized learning experiences for each child.",
    },
    {
      question: "How do you handle discipline and behavior management?",
      answer:
        "We use positive reinforcement and age-appropriate guidance techniques. Our approach focuses on teaching children to make good choices while maintaining a supportive and nurturing environment.",
    },
    {
      question: "How do I apply for admission to Little Learners Academy?",
      answer:
        "You can start the application process by contacting our admissions office or filling out our online application form. We'll schedule a tour and discuss your child's specific needs and our program offerings.",
    },
  ]

  // Split FAQ items into two columns
  const leftColumnItems = faqData.slice(0, 4)
  const rightColumnItems = faqData.slice(4)

  const FAQItem = ({ item, index, isOpen }) => (
    <div className={`${isOpen ? "bg-white" :"bg-orange-50"} border-2 border-gray-800 rounded-xl p-6 mb-4`}>
      <button onClick={() => toggleItem(index)} className="w-full flex items-center justify-between text-left">
        <h3 className="text-[22px] font-semibold text-gray-900 pr-4">{item.question}</h3>
        <div className="flex-shrink-0 w-8 h-8 border-2 border-gray-800 rounded-lg flex items-center justify-center bg-orange-50">
          {isOpen ? <Minus className="w-4 h-4 text-gray-800" /> : <Plus className="w-4 h-4 text-gray-800" />}
        </div>
      </button>

      {isOpen && (
        <div className="mt-4 pt-4 border-t border-gray-300">
          <p className="text-gray-600 leading-relaxed text-[20px]">{item.answer}</p>
        </div>
      )}
    </div>
  )

  return (
    <section className="py-16 px-4 font-outfit">
      <div className="max-w-[1592px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-7">
            <span className="px-6 py-3 text-[18px] bg-white border-2 border-gray-800 rounded-md text-gray-800 font-medium">
              Solutions For The Doubts
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-railway md:text-[58px]">Frequently Asked Questions</h2>

          <p className="text-gray-600 text-[20px] max-w-4xl mx-auto leading-relaxed">
            Find all the essential information you need in our FAQ section, designed to address the most frequently
            asked questions and help you make informed decisions for your child's education.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {leftColumnItems.map((item, index) => (
              <FAQItem key={index} item={item} index={index} isOpen={openItems.includes(index)} />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightColumnItems.map((item, index) => {
              const actualIndex = index + leftColumnItems.length
              return (
                <FAQItem key={actualIndex} item={item} index={actualIndex} isOpen={openItems.includes(actualIndex)} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
