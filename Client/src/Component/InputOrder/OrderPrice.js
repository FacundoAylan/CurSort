import React from 'react'
import { MenuItem } from '@chakra-ui/react'

const OrderPrice = ({handleOrderByPrice}) => {
  
  return (
    <>
      <MenuItem 
        onClick={(e)=>handleOrderByPrice(e)} 
        value="desc"
        bg='black'
        color='white'
        justifyContent='center'
        _hover={{ bg: 'gray.600' }}
        >
          Higher price
      </MenuItem>
      
      <MenuItem 
        onClick={(e)=>handleOrderByPrice(e)} 
        value="asc"
        bg='black'
        color='white'
        justifyContent='center'
        _hover={{ bg: 'gray.600' }}
        >
          Lower price
      </MenuItem>
    </>
  );
}

export default OrderPrice