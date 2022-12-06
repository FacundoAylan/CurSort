import React from 'react'
import { Select } from '@chakra-ui/react'

const OrderPrice = ({handleOrderByPrice}) => {
  return (
    <div>
      <Select onChange={handleOrderByPrice} placeholder="Price">
        <option value="all">All</option>
        <option value="asc">Expensive</option>
        <option value="desc">Cheap</option>
      </Select>
    </div>
  );
}

export default OrderPrice