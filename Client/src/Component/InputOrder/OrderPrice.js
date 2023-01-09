import React from 'react'
import { Grid, GridItem, Button } from '@chakra-ui/react'

const OrderPrice = ({handleOrderByPrice}) => {
  
  return (
    <div>
      <Grid gridTemplateRows="repeat(2, 45px)" p={0}>
        <Button onClick={(e)=>handleOrderByPrice(e)} value="desc">Higher price</Button>
        <Button onClick={(e)=>handleOrderByPrice(e)} value="asc">Lower price</Button>
      </Grid>
    </div>
  );
}

export default OrderPrice