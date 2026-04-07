'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useGetCountriesWithCodeQuery, useGetCountryQuery } from '@/services/countryAPI'
import Link from 'next/link'

export default function Page() {

    const params = useParams<{ country: string }>()
    
    const thousands_separators = (num: number) => {
        const num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }
    
    const { data: countries, isFetching } = useGetCountriesWithCodeQuery();
    
    const { data, isFetching : fetching } = useGetCountryQuery(params.country);
    
    
    if(isFetching || fetching) return (<>Loading</>)
    
    const country = data[0]
    const nativeName = country.name.nativeName

    const officialNativeName = (name: object) => {

        const native = Object.values(name)[0]
        
        const official = Object.values(native)[0]

        return official
    }

    const resolveCountry = (code: string) => {
        const res = countries.filter((country) => {
            return country.cca3?.includes(code) !== false;
        })
        
        const countryName = res.map((res) => {return res.name.common});

        return countryName;
    }

  return (
    <div className='w-full h-auto flex flex-col justify-around px-2 py-4'>
        <div className='relative h-40 w-full my-4'>
            <Image src={country.flags.png} alt={country.flags.alt} fill sizes='auto' priority />
        </div>
        <div className='py-4 h-auto w-full '>
            <h1 className='font-extrabold'>{country.name.common}</h1>
        </div>
        <div className='py-2 h-40 flex flex-col justify-between'>
            <p className='font-semibold'>Native Name: <span className='font-light'>{officialNativeName(nativeName)}</span></p>
            <p className='font-semibold'>Population: <span className='font-light'>{thousands_separators(country.population)}</span></p>
            <p className='font-semibold'>Region: <span className='font-light'>{country.region}</span></p>
            <p className='font-semibold'>Sub Region: <span className='font-light'>{country.subregion}</span></p>
            <p className='font-semibold'>Capital: <span className='font-light'>{country.capital}</span></p>
        </div>
        <div className='py-6 min-h-24 flex flex-col justify-between'>
            <p className='font-semibold'>Top Level Domain: <span className='font-light'>{country.tld}</span></p>
            <p className='font-semibold'>Currencies: {Object.values(country.currencies).map((value, index: number)=> (<span key={index} className='font-light'>{value.name}, </span>))}</p>
            <p className='font-semibold'>Languages: {Object.values(country.languages).map((value, index: number)=> (<span key={index} className='font-light'>{value}, </span>))}</p>
        </div>
        <div className='py-8'>
            <h1 className='font-extrabold'>Border Countries</h1>
            <div className='flex justify-start w-full h-auto flex-wrap py-4 items-start gap-2'>
                {country.borders?.map((code: string, index: number) => (
                    <span key={index} className='py-2 px-3 bg-white shadow-md'>
                        <Link href={`/${resolveCountry(code)}`} className=''>
                            {resolveCountry(code)}
                        </Link>
                    </span>
                ))}
            </div>
        </div>
    </div>
  )
}