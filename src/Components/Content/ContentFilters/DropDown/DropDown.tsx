import React, { useState } from 'react'
import styles from './DropDown.module.scss'
import { ReactComponent as DownArrow } from '../../../../svg/dropDownArrow.svg'
import DropDownPopup from './DropDownPopup'
import { useThemeClassName } from '../../../../Hooks/useThemeClassName'
import { useAppSelector } from '../../../../Hooks/hooks'
const DropDown = () => {
    const {currentRegionName} = useAppSelector(state => state.country)
    const className = useThemeClassName('dropdown', styles)
    const [openDropDown, setOpenDropDown] = useState(false)
    const togglePopup = (ev: React.MouseEvent<HTMLDivElement>): void => {
        ev.stopPropagation()
        setOpenDropDown(prev => !prev)
    }
    const togglePopupWithKeyboard = (ev: React.KeyboardEvent<HTMLDivElement>): void => {
        if(ev.key === 'Enter') {
            ev.stopPropagation()
        setOpenDropDown(prev => !prev) 
        }  
    }
  return (
    <>
    <div tabIndex = {1} className={className} onKeyDown = {togglePopupWithKeyboard} onClick = {togglePopup}>
        {currentRegionName || 'Filter by Region'}
        <DownArrow/>
    {openDropDown && <DropDownPopup  setOpenDropDown = {setOpenDropDown}/>}
    </div>
    </>
  )
}

export default DropDown