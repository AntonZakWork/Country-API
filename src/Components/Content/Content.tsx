import React from 'react'
import styles from './Content.module.scss'
import ContentFilters from './ContentFilters/ContentFilters'
import CountriesContainer from './CountriesContainer/CountriesContainer'
const Content = () => {
  return (
    <main className = {styles.contentContainer}>
        <ContentFilters/>
        <CountriesContainer/>
    </main>
  )
}

export default Content