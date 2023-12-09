import React from 'react'
import EstateCard from './estate-card'
import Spacer from '../common/spacer'
import SearchForm from './search-form'

const Featured = () => {
  return (
    <>
        <SearchForm />
        <Spacer/>
        <EstateCard />
        <Spacer/>
    </>
  )
}

export default Featured