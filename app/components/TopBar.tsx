import React from 'react'
import { IoMoonOutline } from "react-icons/io5";

const TopBar = () => {
  return (
    
      <div className='w-full h-20 flex justify-between place-items-center shadow-lg px-2 mb-4 bg-white'>
        <div className='h-10 w-auto flex items-center'>
            <p className='font-black text-grey-950'>Where in the world?</p>
        </div>
        <div className='w-26 h-10 flex items-center justify-between'>
            <IoMoonOutline className='font-semibold text-grey-950'/>
            <p className='font-semibold text-grey-950'>Dark Mode</p>
        </div>
      </div>

    
  )
}

export default TopBar
