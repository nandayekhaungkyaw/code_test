
import { FaMaskFace } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";


import React from 'react'

const Benefits = () => {
  const benefits = [
    {
      icon: <FaGraduationCap className="size-[34px]" />,
      title: "Holistic Learning Approach",
      description:
        "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    },
    {
      icon: <FaCrown  className="size-[34px]" />,
      title: "Experienced Educators",
      description: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    },
    {
      icon: <FaMaskFace  className="size-[34px]" />,
      title: "Nurturing Environment",
      description: "We prioritize safety and provide a warm and caring atmosphere for every child.",
    },
    {
      icon:<IoFlagSharp  className="size-[34px]" />,
      title: "Play-Based Learning",
      description: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    },
    {
      icon: <FaCircleInfo  className="size-[34px]" />,
      title: "Individualized Attention",
      description: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    },
    {
      icon: <HiUsers  className="size-[34px]" />
,
      title: "Parent Involvement",
      description: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    },
  ]

  return (
    <section className="py-16 px-4 font-outfit">
      <div className="max-w-[1592px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 text-[18px] bg-white border-2 border-gray-800 rounded-md text-gray-800 font-medium">
              Children Deserve Bright Future
            </span>
          </div>

          <h2 className="md:text-[58px] text-3xl font-bold text-gray-900 mb-6 font-railway">Our Benefits</h2>

          <p className="text-gray-600 text-[20px] max-w-4xl mx-auto leading-relaxed">
            With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum,
            we aim to lay a strong foundation for your child's future.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} 
 className="relative">
                {/* Icon */}
                <div  className="absolute -top-6 left-6">
                  <div className="size-[74px] bg-[#FFDECC] border-2 border-gray-800 rounded-xl flex items-center justify-center">
                   {IconComponent }
                  </div>
                </div>

                {/* Card */}
                <div style={{ boxShadow: '6px 6px 0 rgb(38, 38, 38)' }}
 className="bg-white border-4 border-gray-800 rounded-2xl p-[50px] pt-[80px] h-full">
                  <h3 className="md:text-[28px] text-2xl font-bold text-gray-900 mb-4 font-railway">{benefit.title}</h3>
                  <p className="text-gray-600 text-[20px] leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits