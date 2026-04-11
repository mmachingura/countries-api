import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://restcountries.com/v3.1"

interface Country {
    capital: [],
    flags: {
        png: string,
        alt: string
    },
    name: {
        official: string,
    },
    population: number,
    region: string,
}

interface CountryCode {
    cca3: string,
    name: {
        official: string,
        common: string,
    },
}

interface CountryName {
    borders: [],
    capital: [],
    currencies: { [key: string]: 
        {
            name: string,
        } 
    },
    flags: {
        png: string,
        alt: string
    },
    languages: { [key: string]: string },
    name: {
        common: string,
        nativeName: { [key: string]: 
            {
                common: string,
            }
         },
        official: string,
    },
    population: number,
    region: string,
    subregion: string,
    tld: [],
}


export const countryAPI = createApi({
    reducerPath: "countryAPI",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCountries: builder.query<Country[], void>({
            query: () => "/all?fields=name,capital,flags,region,population"
        }),
        getCountry: builder.query<CountryName[], string>({
            query: (name) => `name/${name}?fullText=true`
        }),
        getCountriesWithCode: builder.query<CountryCode[], void>({
            query: () => "/all?fields=name,cca3"
        })
    })
})

export const {
    useGetCountriesQuery,
    useGetCountryQuery,
    useGetCountriesWithCodeQuery,
} = countryAPI;
