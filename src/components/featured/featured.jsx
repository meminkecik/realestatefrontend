<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React, { useEffect, useState } from 'react'
>>>>>>> cb9a00cde6abe90a38924fa7772bd2cc18b8d501
import EstateCard from './estate-card'
import Spacer from '../common/spacer'
import SearchForm from './search-form'
import { getAllEstateByPage } from '../../api/post-service'

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