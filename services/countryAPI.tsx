import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://restcountries.com/v3.1"

export const countryAPI = createApi({
    reducerPath: "countryAPI",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => "/all?fields=name,capital,flags,region,population"
        }),
        getCountry: builder.query({
            query: (name) => `name/${name}?fullText=true`
        }),
        getCountriesWithCode: builder.query({
            query: () => "/all?fields=name,cca3"
        })
    })
})

export const {
    useGetCountriesQuery,
    useGetCountryQuery,
    useGetCountriesWithCodeQuery,
} = countryAPI;
