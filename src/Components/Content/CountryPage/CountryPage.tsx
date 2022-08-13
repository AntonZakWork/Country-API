import { useNavigate, useParams } from 'react-router-dom'
import styles from './CountryPage.module.scss'
import { countriesAPI } from '../../../Services/AllCountriesService'
import CountryPageContent from './CountryPageContent/CountryPageContent'
import { useThemeClassName } from '../../../Hooks/useThemeClassName'
import CountryPageSkeleton from './CountryPageContent/CountryPageSkeleton/CountryPageSkeleton'
const CountryPage = () => {
    const className = useThemeClassName('countryContainer', styles)
    const {country} = useParams()
    const navigate = useNavigate()
    const {data, isFetching} = countriesAPI.useFetchCountryQuery(country as string)
    const prevPage = () => {
        navigate(-1)
    }
  return (
    <>
        <div className = {className}>
            <button onClick = {prevPage}>Back</button>
            { isFetching ? <CountryPageSkeleton/> :  data && <CountryPageContent data = {data}/>} 
        </div>
    </>
  )
}
export default CountryPage