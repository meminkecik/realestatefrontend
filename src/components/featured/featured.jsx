import React, { useState } from 'react'
import EstateCard from './estate-card'
import Spacer from '../common/spacer'
import SearchForm from './search-form'


const Featured = () => {
  const [searchData, setSearchData] = useState(null);

  const handleFormSubmit = async (formData) => {
    const newFormData = { ...formData };
    if (newFormData.estateType === "For SALE"){
      newFormData.estateType = "SALE"
    }
    if (newFormData.estateType === "For RENT"){
      newFormData.estateType = "RENT"
    }
    setSearchData(newFormData);
  };

  return (
    <>
        <SearchForm onFormSubmit={handleFormSubmit} />
        <Spacer/>
        <EstateCard searchData={searchData} />
        <Spacer/>
    </>
  )
}

export default Featured