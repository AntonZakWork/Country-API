import { Link } from "react-router-dom"
import { countriesAPI } from "../../../../../Services/AllCountriesService"


const BorderButton = ({country}: {country: string}) => {
    const {data, isFetching} = countriesAPI.useFetchByCodeQuery(country as string)
    return <>
    {!isFetching && data && <Link to = {`/${data?.[0].name.common.toLowerCase()}`} tabIndex = {-1}>
     <button>{data?.[0].name.common}</button>
    </Link>
} 
    </>
  
}

export default BorderButton