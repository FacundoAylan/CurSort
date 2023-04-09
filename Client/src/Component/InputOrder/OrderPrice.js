import React from 'react'
import { MenuItem } from '@chakra-ui/react'

const OrderPrice = ({handleOrderByPrice}) => {
  
  return (
    <>
      <MenuItem 
        onClick={(e)=>handleOrderByPrice(e)} 
        value="desc"
        bg='#3E4AB8'
        color='white'
        justifyContent='center'
        _hover={{ color:'black' }}
        fontFamily='text'
        fontWeight='bold'
        >
          Higher price
      </MenuItem>
      
      <MenuItem 
        onClick={(e)=>handleOrderByPrice(e)} 
        value="asc"
        bg='#3E4AB8'
        color='white'
        justifyContent='center'
        _hover={{ color:'black' }}
        fontFamily='text'
        fontWeight='bold'
        >
          Lower price
      </MenuItem>
    </>
  );
}

export default OrderPrice