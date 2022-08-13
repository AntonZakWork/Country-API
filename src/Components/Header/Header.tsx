import styles from './Header.module.scss'
import { ReactComponent as MoonDarkSvg } from '../../svg/moon.svg';
import { ReactComponent as MoonLightSvg } from '../../svg/moonLight.svg';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { reset, toggleTheme } from '../../Store/countrySlice';
import { useThemeClassName } from '../../Hooks/useThemeClassName';
import { Link } from 'react-router-dom';
const Header = () => {
    const className = useThemeClassName('header', styles)
    const {theme} = useAppSelector(state => state.country)
    const dispatch = useAppDispatch()
    const changeTheme = () => {
        theme === 'dark' 
        ? dispatch(toggleTheme('light'))
        : dispatch(toggleTheme('dark'))
    }
    const logoClick = () => {
        dispatch(reset())
    }
  return (
    <header className = {className}>
        <Link to ='/'>
        <div 
            className={styles.title}
            onClick = {logoClick}
            >Where in the world?</div>
        </Link>
        <div className={styles.themeButton} onClick = {changeTheme}>
            {theme === 'dark' ? <MoonDarkSvg/> : <MoonLightSvg/>}
            {theme === 'dark' ? <div>Dark theme</div> : <div>Light theme</div>} 
        </div>
    </header>
  )
}

export default Header