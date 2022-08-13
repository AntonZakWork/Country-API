import { useAppSelector } from '../../../Hooks/hooks'
import { countriesAPI } from '../../../Services/AllCountriesService'
import styles from './CountriesContainer.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import CountryCard from './CountryCard/CountryCard'
import CountrySkeleton from './CountrySkeleton/CountrySkeleton'


const CountriesContainer = () => {
   const {currentRegion, searchInput} = useAppSelector(state => state.country)
   const {data, isFetching, error} = searchInput 
   ? countriesAPI.useFetchByNameQuery(searchInput)
   : countriesAPI.useFetchCountriesQuery(currentRegion || 'all')
  return (
    <div className = {styles.countriesContainer}>
        {isFetching  && <CountrySkeleton/>}
        {error && ('status' in error) 
        ? <div>Error: {`${error.status}`} </div> 
        : !isFetching && Array.isArray(data) && data.map(country => <CountryCard key = {country.name.common} {...country}/>) }
    </div>
  )
}

export default CountriesContainer


