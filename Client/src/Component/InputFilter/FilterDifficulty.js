import React from 'react'
import { Select } from '@chakra-ui/react'

const FilterDifficulty = () => {
  return (
    <div>
        <Select placeholder='Difficulty'>
  <option value='option1'>Beginner</option>
  <option value='option2'>Middle</option>
  <option value='option3'>Advanced</option>
 
</Select>
    </div>
  )
}

export default FilterDifficulty