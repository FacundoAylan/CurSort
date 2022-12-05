import React from 'react'
import { Select } from '@chakra-ui/react'
const OrderPrice = () => {
  return (
    <div>
        <Select placeholder='Price'>
  <option value='option1'>Expensive</option>
  <option value='option2'>Cheap</option>
   
</Select>
    </div>
  )
}

export default OrderPrice