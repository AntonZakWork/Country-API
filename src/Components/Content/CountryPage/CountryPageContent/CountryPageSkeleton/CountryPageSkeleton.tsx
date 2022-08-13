import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useAppSelector } from '../../../../../Hooks/hooks';
import styles from './CountryPageSkeleton.module.scss';
const CountryPageSkeleton = () => {
    const {theme} = useAppSelector(state => state.country)
    const themeColors = (theme: 'dark' | 'light') => {
        return theme === 'dark' 
        ? {baseColor:'#2b3945', highlightColor:'#171d2c4d'} 
        : {baseColor:'#f0eeee', highlightColor:'#dbd8d8'}
    }
  return (
    <>
        <SkeletonTheme {...themeColors(theme)} duration = {1.5}>
            <div className={styles.countryInfoContainer}>
                <div className={styles.flagSkeleton}>
                    <Skeleton/>
                </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.name}><Skeleton/></div>
                            <div className = {styles.regularInfo}>
                                <div><Skeleton count = {8}/></div>
                            </div>
                        <div><Skeleton/></div> 
                    </div>
            </div>
    </SkeletonTheme>
    </>
  )
}

export default CountryPageSkeleton