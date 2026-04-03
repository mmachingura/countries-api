'use client'
import React, { useEffect, useState } from 'react'

import { useGetCountriesQuery } from '@/services/countryAPI';

import Country from './country';

export const Countries = () => {

    const { data: countries, isFetching } = useGetCountriesQuery();

    return (
        <div>
            <div>
                {countries?.map((country: object, index: number) => (
                        <Country key={index} country={country} />
                ))}
            </div>
        </div>
    )
}
