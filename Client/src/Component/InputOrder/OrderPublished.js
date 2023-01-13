import React from 'react'
import { MenuItem } from '@chakra-ui/react'

const OrderPublished = ({handleOrderByPublished}) => {
  return (
    <>
      <MenuItem 
        onClick={handleOrderByPublished} 
        value="desc"
        bg='black'
        color='white'
        justifyContent='center'
        _hover={{ bg: 'gray.600' }}
        >
          Most recent
      </MenuItem>
      
      <MenuItem 
        onClick={handleOrderByPublished} 
        value="asc"
        bg='black'
        color='white'
        justifyContent='center'
        _hover={{ bg: 'gray.600' }}
        >
          Oldest
      </MenuItem>
    </>
  );
}

export default OrderPublished