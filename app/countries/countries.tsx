'use client'
import React, { useEffect, useState } from 'react'

import { useGetCountriesQuery } from '@/services/countryAPI';

import Country from './country';

export const Countries = () => {

    const { data: countries, isFetching } = useGetCountriesQuery();

    return (
        <div className='w-full h-auto my-4 flex justify-center bg-grey-50'>
            <div className='grid grid-cols-1 gap-8 h-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {countries?.map((country: object, index: number) => (
                        <Country key={index} country={country} />
                ))}
            </div>
        </div>
    )
}
