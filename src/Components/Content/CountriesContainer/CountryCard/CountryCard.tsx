
import { Link } from 'react-router-dom'
import { useThemeClassName } from '../../../../Hooks/useThemeClassName'
import { Country } from '../../../../Types/Types'
import styles from './CountryCard.module.scss'
import CountryCardInfo from './CountryCardInfo'
const CountryCard = ({...country}: Country) => {
    const className = useThemeClassName('countryCardContainer', styles)
    const {flags, name} = country
  return (
    <>
    <Link to = {name.common.toLowerCase()}>
    <div className={className}>
        <img src={flags.png} alt = {name.common}/>
        <CountryCardInfo {...country}/>
    </div>
    </Link>
    </>
  )
}

export default CountryCard