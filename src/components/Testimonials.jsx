import React from 'react'
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import icon2 from '../../public/images/Icon2.svg'
import icon1 from '../../public/images/icon1.svg'
import icon3 from '../../public/images/icon3.svg'

const Testimonials = () => {
     const testimonials = [
    {
      name: "Jennifer B",
      avatar: icon1,
      rating: 5,
      text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      name: "David K",
      avatar: icon2,
      rating: 5,
      text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
      name: "Emily L",
      avatar: icon3,
      rating: 5,
      text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`w-5 h-5 ${index < rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}`} />
    ))
  }
  return (
      <section className="py-16 px-4 bg-orange-50 font-outfit">
      <div className="max-w-[1592px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 text-[18px] bg-white border-2 border-gray-800 rounded-md text-gray-800 font-medium">
              Their Happy Words 😊
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-railway md:text-[58px]">Our Testimonials</h2>

          <p className="text-gray-600 text-[20px] max-w-4xl mx-auto leading-relaxed">
            Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish
            both academically and emotionally.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative flex flex-row gap-[50px] justify-between items-center">
          {/* Left Arrow */}
          <button className="  min-w-[58px] min-h-[58px] bg-white border-2 border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Right Arrow */}
       

          {/* Testimonials Grid */}
          <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{ boxShadow: '6px 6px 0 rgb(30, 30, 30)' }} className="bg-white border-4 border-gray-800 rounded-2xl p-8 text-center min-h-[462px]">
                {/* Avatar */}
                <div className="mb-6">
                  <img
                  src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto border-2 border-gray-200"
                  />
                </div>

                {/* Name */}
                <h3 className="text-[24px] font-semibold text-gray-900 mb-4 font-outfit">{testimonial.name}</h3>

                {/* Star Rating */}
                <div className="flex justify-center gap-1 mb-6">{renderStars(testimonial.rating)}</div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-[20px] leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>

             <button className=" min-w-[58px] min-h-[58px] bg-white border-2 border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials