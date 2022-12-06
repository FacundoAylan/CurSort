import React from 'react'
import { Select } from '@chakra-ui/react'
const OrderPublished = ({handleOrderByPublished}) => {
  return (
    <div>
      <Select onChange={handleOrderByPublished} placeholder="Published">
        <option value="all">All</option>
        <option value="desc">New</option>
        <option value="asc">Old</option>
      </Select>
    </div>
  );
}

export default OrderPublished