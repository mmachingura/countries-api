import React from 'react';
import Link from 'next/link';
import { DarkMode } from './DarkMode';

const TopBar = () => {
  return (
    
      <div className='w-full h-20 flex justify-between place-items-center shadow-lg px-2 mb-4 bg-white'>
        <div className='h-10 w-auto flex items-center'>
            <Link href={`/`} className='font-black text-grey-950'>Where in the world?</Link>
        </div>
        <div className='w-26 h-10 flex items-center'>
          <DarkMode />
        </div>
      </div>

    
  )
}

export default TopBar
