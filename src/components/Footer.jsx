"use client"
import logo from '../../public/images/logo.png'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
import { IoMdMail } from "react-icons/io"
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo2 from "../../public/images/Logo.svg";




export default function Footer() {
  const navigationLinks = {
    column1: [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "Our Testimonials", href: "/testimonials" },
      { name: "FAQ", href: "/faq" },
    ],
    column2: [
      { name: "About Us", href: "/about" },
      { name: "Our Mission", href: "/mission" },
      { name: "Our Vision", href: "/vision" },
      { name: "Awards and Recognitions", href: "/awards" },
      { name: "History", href: "/history" },
      { name: "Teachers", href: "/teachers" },
    ],
    column3: [
      { name: "Academics", href: "/academics" },
      { name: "Special Features", href: "/special-features" },
      { name: "Gallery", href: "/gallery" },
    ],
    column4: [
      { name: "Contact Us", href: "/contact" },
      { name: "Information", href: "/information" },
      { name: "Map & Direction", href: "/map" },
    ],
  }

  const socialLinks = [
    { icon: <FaFacebook className='size-6'  />, href: "#", label: "Facebook" },
    { icon: <FaTwitter className='size-6' />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin className='size-6' />, href: "#", label: "LinkedIn" },
  ]

  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
  ]

  return (
    <footer style={{ boxShadow: '6px 6px 0 rgb(30, 30, 30)' }} className="bg-white text-[20px] border-4 border-gray-800 rounded-md max-w-[1820px] font-outfit m-auto px-[113px] pt-[110px] pb-[40px]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-12">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
                <img src={logo2} alt=""  />
              
             
            </div>

            {/* Mission Statement */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in the power of play to foster creativity, problem-solving skills, and imagination.
            </p>

            {/* Contact Information */}
            <div className=" flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 bg-[#FFF5F0] border-gray-800 rounded-lg flex items-center justify-center">
                  <IoMdMail className='size-5' />

                </div>
                <span className="text-gray-700">hello@littlelearners.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10  h-10  bg-[#FFF5F0] border-2 border-gray-800 rounded-lg flex items-center justify-center">
                 <FaPhoneAlt  className='size-5' />

                </div>
                <span className="text-gray-700 ">+91 91813 23 2309</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10  bg-[#FFF5F0] h-10 border-2 border-gray-800 rounded-lg flex items-center justify-center">
                  <FaLocationDot  className='size-5' />
                </div>
                <span className="text-gray-700">Somewhere in the World</span>
              </div>
            </div>
          </div>

          {/* Navigation Links - Column 1 */}
          <div>
            <ul className="space-y-3">
              {navigationLinks.column1.map((link, index) => (
                <div key={index} className='flex flex-col gap-1'>
                  {index==0 ? <a href=" " className=' text-xl  font-semibold mb-4'>{link.name}</a> : <a href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors mb-2 ">
                    {link.name}
                  </a>}
                </div>
              ))}
            </ul>
          </div>

          {/* Navigation Links - Column 2 */}
          <div>
            <ul className="space-y-3">
              {navigationLinks.column2.map((link, index) => (
              <div key={index} className='flex flex-col gap-1'>
                  {index==0 ? <a href=" " className=' text-xl  font-semibold mb-4'>{link.name}</a> : <a href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors mb-2 ">
                    {link.name}
                  </a>}
                </div>
              ))}
            </ul>
          </div>

          {/* Navigation Links - Column 3 & 4 Combined */}
          <div>
            <ul className="space-y-3 mb-6">
              {navigationLinks.column3.map((link, index) => (
               <div key={index} className='flex flex-col gap-1'>
                  {index==0 ? <a href=" " className=' text-xl  font-semibold mb-4'>{link.name}</a> : <a href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors mb-2 ">
                    {link.name}
                  </a>}
                </div>
              ))}
            </ul>
           
          </div>
          <div>
             <ul className="space-y-3">
              {navigationLinks.column4.map((link, index) => (
                <div key={index} className='flex flex-col gap-1'>
                  {index==0 ? <a href=" " className=' text-xl  font-semibold mb-4'>{link.name}</a> : <a href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors mb-2 ">
                    {link.name}
                  </a>}
                </div>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-6 mt-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-[20px]">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link, index) => (
                
    
                <a
                key={index}
                href={link.href}
                className="text-gray-600 border-r-2 pr-[20px] hover:text-gray-900   transition-colors text-[18px]"
              >
                {link.name}
              </a>
       
             
             
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-[#FFDECC] border-2 border-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-300 transition-colors"
                  aria-label={social.label}
                >
                  {IconComponent}
                </a>
              )
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-300">
          <p className="text-gray-600 text-[18px]">Copyright © [2023] Little Learners Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
