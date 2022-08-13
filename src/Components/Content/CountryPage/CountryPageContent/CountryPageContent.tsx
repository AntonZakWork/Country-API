import Skeleton from "react-loading-skeleton"
import {  Data } from "../../../../Types/Types"
import Borders from "./Borders/Borders"
import styles from './CountryPageContent.module.scss'

const CountryPageContent = ({data}: {data: Data}) => {
  const {flags, name, population, region, subregion, capital, tld, currencies, languages, borders} = data[0]
  return (
    <>
    <div className={styles.countryInfoContainer}>
        { <img src={flags.png} alt={`${name.common} flag`} /> || <Skeleton/>}
       
        <div className={styles.infoContainer}>
            <div className={styles.name}>{name.common}</div>
            <div className = {styles.regularInfo}>
                <div><b>Native name:</b> {Object.values(name.nativeName)[0].common}</div>
                <div><b>Population:</b> {population.toLocaleString()}</div>
                <div><b>Region:</b> {region}</div>
                <div><b>Subregion:</b> {subregion}</div>
                <div><b>Capital:</b> {capital}</div>
                 {tld && <div><b>Top level domain:</b> {Object.values(tld).join(', ')}</div> }
                 <div><b>Currencies:</b> {Object.values(currencies).map(value => value.name).join(', ')}</div>
                <div><b>Languages:</b> {Object.values(languages).join(', ')}</div> 
             </div>
             <Borders borders = {borders}/>
         </div>
     </div> 
    </>
  )
}

export default CountryPageContent


