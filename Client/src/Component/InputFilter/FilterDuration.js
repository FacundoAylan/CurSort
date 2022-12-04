import React from 'react'
import { Select } from '@chakra-ui/react'
const FilterDuration = () => {
  return (
    <div>
        <Select placeholder='Duration'>
  <option value='option1'>+ 40Hs</option>
  <option value='option2'>- 40Hs</option>
  
</Select>
    </div>
  )
}

export default FilterDuration