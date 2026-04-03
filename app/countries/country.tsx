'use client'
import React from 'react'
import Image from 'next/image'

const Country = ({country}) => {
  return (
    <div>
         <div>
            <Image src={country.flags.png} alt={country.flags.alt} width={300} height={100} className='w-full h-auto' priority />
        </div>
        <div>{country.name.official}</div>
        <div>
            <h1>Population<>{country.population}</></h1>
            <h1>Region<>{country.region}</></h1>
            <h1>Capital<>{country.capital}</></h1>
        </div>
    </div>
  )
}

export default Country