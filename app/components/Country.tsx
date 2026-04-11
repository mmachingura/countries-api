'use client'
import React from 'react'
import Image from 'next/image'
import { useGetCountriesQuery } from '@/services/countryAPI'
import Link from 'next/link'

const Country = () => {

  const thousands_separators = (num: number) => {
      const num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return num_parts.join(".");
  }

  const { data, isFetching } = useGetCountriesQuery()

  if(isFetching) return (<>Loading...</>)

  const countries = data

  return (
    <div className='w-full h-auto my-4 flex justify-center bg-grey-50'>
      <div className='grid grid-cols-1 gap-8 h-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {countries?.map((country, index: number) => (
          <Link key={index} href={`/${country.name.official}`}>
            <div className='w-70 h-86 flex flex-col justify-between bg-white shadow-lg rounded overflow-hidden'>
              <div className='relative h-auto w-full max-w-75 aspect-7/5'>
                <Image src={country.flags.png} alt={country.flags.alt} fill sizes='auto' className='object-cover' priority />
              </div>
              <div className='w-full h-42 flex flex-col items-start px-4 pt-4 pb-10 justify-between'>
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
          </Link>
        ))}
      </div>
    </div>
    
  )
}

export default Country