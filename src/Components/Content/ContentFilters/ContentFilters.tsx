import { ChangeEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../Hooks/hooks'
import { useDebounce } from '../../../Hooks/useDebounce'
import { useThemeClassName } from '../../../Hooks/useThemeClassName'
import { setSearchInput } from '../../../Store/countrySlice'
import {ReactComponent as SearchSVG} from '../../../svg/search.svg'
import styles from './ContentFilters.module.scss'
import DropDown from './DropDown/DropDown'
const ContentFilters = () => {
    const dispatch = useAppDispatch()
    const className = useThemeClassName('inputContainer', styles)
    const classNameContainer = useThemeClassName('contentFiltersContainer', styles)
    const [localInput, setLocalInput] = useState('')

    const setLocalInputToState = (localInput:string) => {
        dispatch(setSearchInput(localInput))
    }

    const debouncedSetLocalInputToState = useDebounce(setLocalInputToState, 700)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalInput(e.target.value)
        debouncedSetLocalInputToState(e.target.value)
    }
    
    const onEnterPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter') {
            dispatch(setSearchInput(localInput))
        }
    }
  return (
    <div className={classNameContainer}>
        <div className={className}> 
            <SearchSVG/>
            <input 
                type="text" 
                placeholder='Search for a country...' 
                value = {localInput} 
                onChange = {onChange}
                onKeyDown = {onEnterPress}/>
        </div>
        <DropDown/>
    </div>
  )
}

export default ContentFilters