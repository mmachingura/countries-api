import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://restcountries.com/v3.1"

export const countryAPI = createApi({
    reducerPath: "countryAPI",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => "/all?fields=name,capital,flags,region,population"
        })
    })
})

export const {
    useGetCountriesQuery,
} = countryAPI;