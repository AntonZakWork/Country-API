import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../Hooks/hooks'
import { useThemeClassName } from '../../../../Hooks/useThemeClassName'
import { setCurrentQueryRegion } from '../../../../Store/countrySlice'
import styles from './DropDownPopup.module.scss'
type DropDownPopupProps = {
    setOpenDropDown: (arg: boolean) => void,
}
const DropDownPopup = ({setOpenDropDown}: DropDownPopupProps) => {
    const {regions} = useAppSelector(state => state.country)
    const className = useThemeClassName('dropDownPopup', styles)
    const dispatch = useAppDispatch()
    const countryClick = (region: string) => {
        dispatch(setCurrentQueryRegion(region))
    }
    const closePopup = ()=> {
        setOpenDropDown(false) 
    }
    useEffect(()=>{
        document.addEventListener('click', closePopup)
        return () => document.removeEventListener('click', closePopup)
    },[])
  return (
    <div className={className}>
        <ul>
            {regions.map(region => <li key = {region} onClick = {() => countryClick(region)}>{region}</li>)}
        </ul>
    </div>
  )
}

export default DropDownPopup