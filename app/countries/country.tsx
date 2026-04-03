'use client'
import React from 'react'
import Image from 'next/image'

const Country = ({country}) => {

  const thousands_separators = (num: number) => {
      const num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return num_parts.join(".");
  }

  return (
    <div className='w-70 sm:w-76 h-80 flex flex-col justify-between bg-white shadow-lg rounded overflow-hidden'>
      <div className='relative h-40'>
        <Image src={country.flags.png} alt={country.flags.alt} fill sizes='auto' priority />
      </div>
      <div className='w-full h-40 flex flex-col items-start px-4 py-6 justify-between'>
        <div>
          <p className='text-grey-950 font-black'>{country.name.official}</p>
        </div>
        <div className='w-auto'>
          <h1 className='font-semibold text-grey-950'>Population: <span className='font-light text-grey-950'>{thousands_separators(country.population)}</span></h1>
          <h1 className='font-semibold text-grey-950'>Region: <span className='font-light text-grey-950'>{country.region}</span></h1>
          <h1 className='font-semibold text-grey-950'>Capital: <span className='font-light text-grey-950'>{country.capital}</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Country