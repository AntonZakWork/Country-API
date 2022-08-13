import { configureStore, ThunkAction, Action, } from '@reduxjs/toolkit';
import { countriesAPI } from '../Services/AllCountriesService';
import countryReducer from './countrySlice';

export const store = configureStore({
  reducer: {
    country: countryReducer,
    [countriesAPI.reducerPath]: countriesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesAPI.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
