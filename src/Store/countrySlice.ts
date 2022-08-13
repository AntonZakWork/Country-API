import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface CountryState {
    regions: string[],
    currentRegion: null | string,
    currentRegionName: null | string,
    theme: 'dark' | 'light',
    searchInput: string,
}

const initialState: CountryState = {
  regions: ['Asia', 'Europe', 'Oceania', 'Africa', 'America'],
  currentRegion: null,
  currentRegionName: null,
  theme: localStorage.getItem('theme') as 'dark' | 'light' || 'dark',
  searchInput: '',
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  
  reducers: {
    setCurrentQueryRegion(state, action: PayloadAction<string>) {
        state.currentRegion = 'region/' + action.payload.toLowerCase()
        state.currentRegionName = action.payload
    },
    toggleTheme(state, action: PayloadAction<'dark' | 'light'>) {
        state.theme = action.payload
        localStorage.setItem('theme', action.payload)
    },
    setSearchInput(state, action: PayloadAction<string>) {
        state.searchInput = action.payload
    },
    reset(state) {
        state.currentRegion =  null
        state.searchInput = ''
        state.currentRegionName = null
    }
  },
 
});

export const { setCurrentQueryRegion, toggleTheme, setSearchInput, reset } = countrySlice.actions;

export default countrySlice.reducer;
