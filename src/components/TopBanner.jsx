import React from 'react'

import { MdArrowRightAlt } from "react-icons/md";
import banner from '../../public/images/banner.png'


const TopBanner = () => {
  return (
    <div style={{ backgroundImage: `url(${banner})` }} className=" font-outfit  bg-[#FFDDC9]  bg-no-repeat  bg-cover  text-sm text-center py-2 rounded-md mb-2 flex justify-center items-center gap-2">
        {/* <img src={topBanner} /> */}
        <p className='  text-[20px]'>Admission is Open, Grab your seat now</p>
        <MdArrowRightAlt />


        
      </div>

  )
}

export default TopBanner