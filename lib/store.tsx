import { configureStore } from '@reduxjs/toolkit'
import { countryAPI } from '@/services/countryAPI'

export const makeStore = () => {
  return configureStore({
    reducer: {
        [countryAPI.reducerPath]: countryAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryAPI.middleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']