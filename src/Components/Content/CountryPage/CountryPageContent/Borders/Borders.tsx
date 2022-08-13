
import BorderButton from './BorderButton'
import styles from './Borders.module.scss'
const Borders = ({borders} : {borders: string[]}) => {
  return <>
   {borders && 
    <div className = {styles.borderCountries}>
        Bordering countries: {borders.map(country => <BorderButton country = {country} key = {country}/>)}
        </div>
    }</>
  
}

export default Borders