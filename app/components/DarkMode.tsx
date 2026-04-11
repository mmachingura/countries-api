import React from 'react'
import { IoMoonOutline } from 'react-icons/io5'

export const DarkMode = () => {

  return (
    <div className='flex items-center gap-2'>
        <IoMoonOutline className='font-semibold text-grey-950'/>
        <p className='font-semibold text-grey-950'>Dark Mode</p>
    </div>
  )
}
