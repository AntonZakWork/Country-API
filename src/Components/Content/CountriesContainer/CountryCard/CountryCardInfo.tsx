
import { useThemeClassName } from "../../../../Hooks/useThemeClassName";
import { Country } from "../../../../Types/Types"
import styles from './CountryCardInfo.module.scss';

const CountryCardInfo = (country : Country ) => {
    // const className = useThemeClassName('cardInfoContainer', styles)
    const {name, population, capital, subregion } = country
  return (
    <div className={styles.cardInfoContainer}>
        <div className={styles.countryName}>{name.common}</div>
        <div><b>Population: </b>{population.toLocaleString()}</div>
        <div><b>Capital: </b>{capital}</div>
        <div><b>Region: </b>{subregion}</div>
    </div>
  )
}

export default CountryCardInfo