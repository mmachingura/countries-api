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
    
        const country = (data ?? [])[0]

        console.log(country)

        const resolveCountry = (code: string) => {
            const res = countries?.filter((country) => {
                return country.cca3.includes(code) !== false;
            })
            
            const countryName = res?.map((res) => {return res.name.common});

            return countryName;
        }

    return (
        <div className='w-full h-auto flex flex-col justify-around items-center px-2 py-4 text-base md:py-2 lg:flex-row lg:gap-12 lg:justify-between'>
            <div className='relative h-auto w-full aspect-7/5 my-4 max-w-100 sm:min-w-100 md:max-w-3/4 lg:max-w-140'>
                <Image src={country.flags.png} alt={country.flags.alt} fill sizes='auto' className='object-cover' priority />
            </div>
            <div className='w-full max-w-100 sm:flex sm:flex-col sm:w-full md:w-full md:max-w-3/4 lg:w-1/2 h-auto'>
                <div className='py-4 h-auto w-full '>
                    <h1 className='font-extrabold lg:text-2xl'>{country.name.common}</h1>
                </div>
                <div className='h-auto md:flex md:items-start md:justify-between lg:flex gap-8 lg:w-full lg:items-center'>
                    <div className='py-2 h-auto w-full flex flex-col md:p-0 md:h-auto'>
                        <p className='w-full font-semibold md:min-h-8'>Native Name: <span className='font-light'>{Object.values(country.name.nativeName)[0].common}</span></p>
                        <p className='w-full font-semibold md:min-h-8'>Population: <span className='font-light'>{thousands_separators(country.population)}</span></p>
                        <p className='w-full font-semibold md:min-h-8'>Region: <span className='font-light'>{country.region}</span></p>
                        <p className='w-full font-semibold md:min-h-8'>Sub Region: <span className='font-light'>{country.subregion}</span></p>
                        <p className='w-full font-semibold md:min-h-8'>Capital: {country.capital.map((capital, index:number) => (<span key={index} className='font-light'>{capital}, </span>))}</p>
                    </div>
                    <div className='py-6 h-full w-full flex flex-col md:p-0 lg:min-h-40'>
                        <p className='w-full font-semibold md:min-h-8'>Top Level Domain: <span className='font-light'>{country.tld}</span></p>
                        <p className='w-full font-semibold md:min-h-8'>Currencies: {Object.values(country.currencies).map((value, index: number)=> (<span key={index} className='font-light'>{value.name}, </span>))}</p>
                        <p className='w-full font-semibold md:min-h-8'>Languages: {Object.values(country.languages).map((value, index: number)=> (<span key={index} className='font-light'>{value}, </span>))}</p>
                    </div>
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
        </div>
    )
}