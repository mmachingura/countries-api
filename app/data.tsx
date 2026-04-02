'use client'

import { useGetCountriesQuery } from '@/services/countryAPI';


const Data = () => {
    const { data, isFetching } = useGetCountriesQuery();

    console.log(data, isFetching)

    return (
        <>
            <h1>Works</h1>
        </>
    )
}

export default Data;