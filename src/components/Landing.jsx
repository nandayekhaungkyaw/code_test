import React from 'react'
import landing from '../../public/images/landing.png'
const Landing = () => {
  return (
    <div>
            <section className="grid md:grid-cols-2 font-outfit gap-4 p-5 items-center max-w-[1590px] m-auto">
        <img src={landing} alt="Kids learning" className="rounded-xl max-h-[758px]" />
        <div>
          <p className="uppercase text-sm text-gray-700 font-medium mb-2  underline underline-offset-8 text-[22px]  ">Welcome to Little Learners Academy</p>
          <h1 className=" text-3xl xl:text-[54px] font-railway  font-bold leading-tight mb-4">
            Where Young Minds Blossom and 
            <span className="text-[#EF7C59] inline-block xl:ml-3">  Dreams Take Flight.</span>
          </h1>
          <p className="mb-6 text-[20px] text-gray-600">
            Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!
          </p>
          <div style={{ boxShadow: '8px 8px 0 rgba(255, 190, 153, 0.5)' }} className="flex gap-[13px] bg-[#FFEFE5] justify-between items-center    border-2 rounded-[12px] border-gray-800 px-[50px] py-[24px]">
            <div>
              <p className="xl:text-[44px] text-xl font-bold ">+7000</p>
              <p className="text-[18px]">Students Passed Out</p>
            </div>
            <div>
              <p className="xl:text-[44px] text-xl font-bold ">+37</p>
              <p className="text-[18px]">Awards & Recognitions</p>
            </div>
            <div>
              <p className="xl:text-[44px] text-xl font-bold ">+15</p>
              <p className="text-[18px]">Experienced Educators</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing