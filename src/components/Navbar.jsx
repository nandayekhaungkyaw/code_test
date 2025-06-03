import React from 'react'
import logo from '../../public/images/logo.png'

const Navbar = () => {
  return (
    <div className='mt-2'>
        <nav className="flex min-h-[80px]  border font-outfit border-black rounded-2xl overflow-hidden">
  {/* Logo Section */}
  <div className="bg-[#FF8D4D] text-black px-4 py-2 h-full flex items-center justify-center min-h-[80px] gap-2 ">
    {/* Replace this with your actual SVG or icon */}
    <img src={logo} alt="" className='size-[40px]' />
    <span className="font-semibold">Little Learners</span>
  </div>

  {/* Spacer */}
  <div className="flex-1" />

  {/* Menu Items */}
  <div className="flex ">
   
    <a
      href="#home"
      className="px-6 py-4 text-gray-700 text-[20px] bg-orange-50 hover:bg-gray-100  flex justify-center items-center  text-center border border-gray-500"
    >
      Home
    </a>
    <a
      href="#about"
      className="px-6 py-4 text-gray-700 text-[20px] hover:bg-gray-100  flex justify-center items-center  text-center border border-gray-500"
    >
      About Us
    </a>
    <a
      href="#academics"
      className="px-6 py-4 text-gray-700 text-[20px] hover:bg-gray-100  flex justify-center items-center  text-center border border-gray-500"
    >
      Academics
    </a>
    <a
      href="#admissions"
      className="px-6 py-4 text-gray-700 text-[20px] hover:bg-gray-100  flex justify-center items-center  text-center border border-gray-500"
    >
      Admissions
    </a>
    <a
      href="#student-life"
      className="px-6 py-4 text-gray-700 text-[20px] hover:bg-gray-100  flex justify-center items-center  text-center border border-gray-500"
    >
      Student Life
    </a>

    {/* Contact Button */}
    <a
      href="#contact"
      className="px-6 py-2 text-[20px] bg-[#FFAE80] font-semibold text-black text-center flex justify-center items-center hover:bg-orange-500"
    >
      Contact
    </a>
  </div>
</nav>

    </div>
  )
}

export default Navbar
