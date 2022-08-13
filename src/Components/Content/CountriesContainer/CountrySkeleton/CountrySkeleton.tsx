import { useMemo, useRef} from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useAppSelector } from '../../../../Hooks/hooks'
import styles from './CountrySkeleton.module.scss'
const CountrySkeleton = () => {
    const {theme} = useAppSelector(state => state.country)
    const themeColors = (theme: 'dark' | 'light') => {
        return theme === 'dark' 
        ? {baseColor:'#2b3945', highlightColor:'#171d2c4d'} 
        : {baseColor:'#f0eeee', highlightColor:'#dbd8d8'}
    }
    const size = useRef<{width:number, height: number} | null>(null)
    size.current = {width:window.innerWidth, height: window.innerHeight}

    const skeletonArray = useMemo(()=>{
        console.log(size.current)
        const rowAmount = Math.round(size.current!.width/320)
        const colAmount = Math.ceil(size.current!.height/300)
        console.log(rowAmount, colAmount)
        return Array.from({length: rowAmount*colAmount + 10}, (_, i) => i+1)
       
    },[size.current.width, size.current.height])
  return (
    <div className={styles.countrySkeleton}>
    <SkeletonTheme {...themeColors(theme)} duration = {1.5}>
        {skeletonArray.map(el => <Skeleton key = {el}/>)}
    </SkeletonTheme>
    </div>
  )
}

export default CountrySkeleton