import React from 'react'
import { MenuItem } from '@chakra-ui/react'

const OrderPublished = ({handleOrderByPublished}) => {
  return (
    <>
      <MenuItem 
        onClick={handleOrderByPublished} 
        value="desc"
        bg='#3E4AB8'
        color='white'
        justifyContent='center'
        _hover={{ color:'black' }}
        fontFamily='text'
        fontWeight='bold'
        >
          Most recent
      </MenuItem>
      
      <MenuItem 
        onClick={handleOrderByPublished} 
        value="asc"
        bg='#3E4AB8'
        color='white'
        justifyContent='center'
        _hover={{ color:'black' }}
        fontFamily='text'
        fontWeight='bold'
        >
          Oldest
      </MenuItem>
    </>
  );
}

export default OrderPublished