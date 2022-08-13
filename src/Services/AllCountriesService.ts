import {Country, Data, FetchByCodeData} from '../Types/Types'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

export const countriesAPI = createApi({
    reducerPath: 'countriesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://restcountries.com/v3.1/'}),
    endpoints: (build)=> ({
        fetchCountries: build.query<Country[], string>({
            query: (arg)=>({
                url: `/${arg}`,
            })
        }),
        fetchCountry: build.query<Data, string>({
            query: (arg)=>({
                url: `/name/${arg}`,
            })
        }),
        fetchByCode: build.query<FetchByCodeData, string>({
            query: (arg)=>({
                url: `/alpha/${arg}`,
            })
        }),
        fetchByName: build.query<Data, string>({
            query: (arg)=>({
                url: `/name/${arg}`,
            })
        }),
    })
})

